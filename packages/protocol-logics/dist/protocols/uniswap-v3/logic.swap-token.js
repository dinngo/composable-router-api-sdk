"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwapTokenLogic = exports.isSwapTokenLogicSingleHopFields = exports.isSwapTokenLogicSingleHopQuotation = void 0;
const tslib_1 = require("tslib");
const sdk_core_1 = require("@uniswap/sdk-core");
const constants_1 = require("./constants");
const service_1 = require("./service");
const contracts_1 = require("./contracts");
const axios_1 = tslib_1.__importDefault(require("axios"));
const axios_retry_1 = tslib_1.__importDefault(require("axios-retry"));
const common = tslib_1.__importStar(require("@composable-router/common"));
const ethers_1 = require("ethers");
const core = tslib_1.__importStar(require("@composable-router/core"));
const v3_sdk_1 = require("@uniswap/v3-sdk");
const utils_1 = require("./utils");
(0, axios_retry_1.default)(axios_1.default, { retries: 5, retryDelay: axios_retry_1.default.exponentialDelay });
function isSwapTokenLogicSingleHopQuotation(v) {
    return !!v.fee;
}
exports.isSwapTokenLogicSingleHopQuotation = isSwapTokenLogicSingleHopQuotation;
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
        let quotation;
        if (core.isTokenToTokenExactInParams(params)) {
            const { input, tokenOut } = params;
            const { route, outputAmount } = await this.getExactInBestTrade(input, tokenOut);
            const amount = outputAmount.toExact();
            if (route.pools.length === 1) {
                quotation = { amount, fee: route.pools[0].fee };
            }
            else {
                quotation = { amount, path: (0, v3_sdk_1.encodeRouteToPath)(route, false) };
            }
        }
        else {
            const { tokenIn, output } = params;
            const { route, inputAmount } = await this.getExactOutBestTrade(tokenIn, output);
            const amountIn = common.calcSlippage(inputAmount.quotient.toString(), -100); // 1% slippage
            const amount = common.toBigUnit(amountIn, tokenIn.decimals);
            if (route.pools.length === 1) {
                quotation = { amount, fee: route.pools[0].fee };
            }
            else {
                quotation = { amount, path: (0, v3_sdk_1.encodeRouteToPath)(route, true) };
            }
        }
        return quotation;
    }
    // https://github.com/Uniswap/v3-sdk/blob/000fccfbbebadabadfa6d689ebc85a50489d25d4/src/swapRouter.ts#L64
    async getLogic(fields, options) {
        const { tradeType, input, output } = fields;
        const { account, slippage = 100 } = options;
        const recipient = core.calcAccountAgent(this.chainId, account);
        const deadline = (0, utils_1.getDeadline)(this.chainId);
        const amountIn = input.amountWei;
        const amountOut = tradeType === core.TradeType.exactIn ? common.calcSlippage(output.amountWei, slippage) : output.amountWei;
        const routerMustCustody = output.token.isNative;
        const iface = contracts_1.SwapRouter__factory.createInterface();
        const datas = [];
        if (isSwapTokenLogicSingleHopFields(fields)) {
            const tokenIn = input.token.wrapped.address;
            const tokenOut = output.token.wrapped.address;
            if (tradeType === core.TradeType.exactIn) {
                const params = {
                    tokenIn,
                    tokenOut,
                    fee: fields.fee,
                    recipient: routerMustCustody ? ethers_1.constants.AddressZero : recipient,
                    deadline,
                    amountIn,
                    amountOutMinimum: amountOut,
                    sqrtPriceLimitX96: 0,
                };
                datas.push(iface.encodeFunctionData('exactInputSingle', [params]));
            }
            else {
                const params = {
                    tokenIn,
                    tokenOut,
                    fee: fields.fee,
                    recipient: routerMustCustody ? ethers_1.constants.AddressZero : recipient,
                    deadline,
                    amountOut: output.amountWei,
                    amountInMaximum: amountIn,
                    sqrtPriceLimitX96: 0,
                };
                datas.push(iface.encodeFunctionData('exactOutputSingle', [params]));
            }
        }
        else {
            if (tradeType === core.TradeType.exactIn) {
                const params = {
                    path: fields.path,
                    recipient: routerMustCustody ? ethers_1.constants.AddressZero : recipient,
                    deadline,
                    amountIn,
                    amountOutMinimum: amountOut,
                };
                datas.push(iface.encodeFunctionData('exactInput', [params]));
            }
            else {
                const params = {
                    path: fields.path,
                    recipient: routerMustCustody ? ethers_1.constants.AddressZero : recipient,
                    deadline,
                    amountOut,
                    amountInMaximum: amountIn,
                };
                datas.push(iface.encodeFunctionData('exactOutput', [params]));
            }
        }
        if (routerMustCustody) {
            datas.push(iface.encodeFunctionData('unwrapWETH9', [amountOut, recipient]));
        }
        if (input.token.isNative && tradeType === core.TradeType.exactOut) {
            datas.push(iface.encodeFunctionData('refundETH'));
        }
        const to = constants_1.SWAP_ROUTER_ADDRESS;
        const data = datas.length === 1 ? datas[0] : iface.encodeFunctionData('multicall', [datas]);
        const inputs = [core.newLogicInput({ input })];
        return core.newLogic({ to, data, inputs });
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