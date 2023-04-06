"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwapTokenLogic = exports.isSwapTokenLogicSingleHopFields = void 0;
const tslib_1 = require("tslib");
const sdk_core_1 = require("@uniswap/sdk-core");
const constants_1 = require("./constants");
const service_1 = require("./service");
const contracts_1 = require("./contracts");
const axios_1 = tslib_1.__importDefault(require("axios"));
const axios_retry_1 = tslib_1.__importDefault(require("axios-retry"));
const common = tslib_1.__importStar(require("@composable-router/common"));
const core = tslib_1.__importStar(require("@composable-router/core"));
const v3_sdk_1 = require("@uniswap/v3-sdk");
const utils_1 = require("./utils");
(0, axios_retry_1.default)(axios_1.default, { retries: 5, retryDelay: axios_retry_1.default.exponentialDelay });
function isSwapTokenLogicSingleHopFields(v) {
    return !!v.fee;
}
exports.isSwapTokenLogicSingleHopFields = isSwapTokenLogicSingleHopFields;
let SwapTokenLogic = class SwapTokenLogic extends core.Logic {
    async getTokenList() {
        const { data } = await axios_1.default.get('https://gateway.ipfs.io/ipns/tokens.uniswap.org');
        const tmp = { [this.nativeToken.address]: true };
        const tokenList = [this.nativeToken];
        for (const token of data.tokens) {
            if (tmp[token.address] || token.chainId !== this.chainId)
                continue;
            tokenList.push({
                chainId: token.chainId,
                address: token.address,
                decimals: token.decimals,
                symbol: token.symbol,
                name: token.name,
            });
            tmp[token.address] = true;
        }
        return tokenList;
    }
    async getExactInBestTrade(input, tokenOut) {
        // should convert to wrapped native token first
        const wrappedTokenIn = input.token.wrapped;
        const wrappedTokenOut = tokenOut.wrapped;
        const tradeType = sdk_core_1.TradeType.EXACT_INPUT;
        const amountSpecified = sdk_core_1.CurrencyAmount.fromRawAmount(new sdk_core_1.Token(wrappedTokenIn.chainId, wrappedTokenIn.address, wrappedTokenIn.decimals), input.amountWei.toString());
        const otherCurrency = new sdk_core_1.Token(wrappedTokenOut.chainId, wrappedTokenOut.address, wrappedTokenOut.decimals);
        const service = new service_1.Service(this.chainId, this.provider);
        const bestTrade = await service.getBestTrade(tradeType, amountSpecified, otherCurrency);
        return bestTrade;
    }
    async getExactOutBestTrade(tokenIn, output) {
        // should convert to wrapped native token first
        const wrappedTokenIn = tokenIn.wrapped;
        const wrappedTokenOut = output.token.wrapped;
        const tradeType = sdk_core_1.TradeType.EXACT_OUTPUT;
        const amountSpecified = sdk_core_1.CurrencyAmount.fromRawAmount(new sdk_core_1.Token(wrappedTokenOut.chainId, wrappedTokenOut.address, wrappedTokenOut.decimals), output.amountWei.toString());
        const otherCurrency = new sdk_core_1.Token(wrappedTokenIn.chainId, wrappedTokenIn.address, wrappedTokenIn.decimals);
        const service = new service_1.Service(this.chainId, this.provider);
        const bestTrade = await service.getBestTrade(tradeType, amountSpecified, otherCurrency);
        return bestTrade;
    }
    async quote(params) {
        if (core.isTokenToTokenExactInParams(params)) {
            const tradeType = core.TradeType.exactIn;
            const { input, tokenOut } = params;
            const { route, outputAmount } = await this.getExactInBestTrade(input, tokenOut);
            const output = new common.TokenAmount(tokenOut, outputAmount.toExact());
            if (route.pools.length === 1) {
                return { tradeType, input, output, fee: route.pools[0].fee };
            }
            else {
                return { tradeType, input, output, path: (0, v3_sdk_1.encodeRouteToPath)(route, false) };
            }
        }
        else {
            const tradeType = core.TradeType.exactOut;
            const { tokenIn, output } = params;
            const { route, inputAmount } = await this.getExactOutBestTrade(tokenIn, output);
            const amountIn = common.calcSlippage(inputAmount.quotient.toString(), -100); // 1% slippage
            const input = new common.TokenAmount(tokenIn, common.toBigUnit(amountIn, tokenIn.decimals));
            if (route.pools.length === 1) {
                return { tradeType, input, output, fee: route.pools[0].fee };
            }
            else {
                return { tradeType, input, output, path: (0, v3_sdk_1.encodeRouteToPath)(route, true) };
            }
        }
    }
    // https://github.com/Uniswap/v3-sdk/blob/000fccfbbebadabadfa6d689ebc85a50489d25d4/src/swapRouter.ts#L64
    async build(fields, options) {
        const { tradeType, input, output, amountBps } = fields;
        const { account, slippage = 100 } = options;
        const recipient = core.calcAccountAgent(this.chainId, account);
        const deadline = (0, utils_1.getDeadline)(this.chainId);
        const amountIn = input.amountWei;
        const amountOut = tradeType === core.TradeType.exactIn ? common.calcSlippage(output.amountWei, slippage) : output.amountWei;
        const iface = contracts_1.SwapRouter__factory.createInterface();
        let data;
        let amountOffset;
        if (isSwapTokenLogicSingleHopFields(fields)) {
            const tokenIn = input.token.wrapped.address;
            const tokenOut = output.token.wrapped.address;
            if (tradeType === core.TradeType.exactIn) {
                const params = {
                    tokenIn,
                    tokenOut,
                    fee: fields.fee,
                    recipient,
                    deadline,
                    amountIn,
                    amountOutMinimum: amountOut,
                    sqrtPriceLimitX96: 0,
                };
                data = iface.encodeFunctionData('exactInputSingle', [params]);
                if (amountBps)
                    amountOffset = common.getParamOffset(5);
            }
            else {
                const params = {
                    tokenIn,
                    tokenOut,
                    fee: fields.fee,
                    recipient,
                    deadline,
                    amountOut,
                    amountInMaximum: amountIn,
                    sqrtPriceLimitX96: 0,
                };
                data = iface.encodeFunctionData('exactOutputSingle', [params]);
            }
        }
        else {
            if (tradeType === core.TradeType.exactIn) {
                const params = {
                    path: fields.path,
                    recipient,
                    deadline,
                    amountIn,
                    amountOutMinimum: amountOut,
                };
                data = iface.encodeFunctionData('exactInput', [params]);
                if (amountBps)
                    amountOffset = common.getParamOffset(3);
            }
            else {
                const params = {
                    path: fields.path,
                    recipient,
                    deadline,
                    amountOut,
                    amountInMaximum: amountIn,
                };
                data = iface.encodeFunctionData('exactOutput', [params]);
            }
        }
        const inputs = [
            core.newLogicInput({ input: new common.TokenAmount(input.token.wrapped, input.amount), amountBps, amountOffset }),
        ];
        const wrapMode = input.token.isNative
            ? core.WrapMode.wrapBefore
            : output.token.isNative
                ? core.WrapMode.unwrapAfter
                : core.WrapMode.none;
        return core.newLogic({ to: constants_1.SWAP_ROUTER_ADDRESS, data, inputs, wrapMode });
    }
};
SwapTokenLogic.supportedChainIds = [
    common.ChainId.mainnet,
    common.ChainId.polygon,
    common.ChainId.arbitrum,
    common.ChainId.optimism,
];
SwapTokenLogic = tslib_1.__decorate([
    core.LogicDefinitionDecorator()
], SwapTokenLogic);
exports.SwapTokenLogic = SwapTokenLogic;
//# sourceMappingURL=logic.swap-token.js.map