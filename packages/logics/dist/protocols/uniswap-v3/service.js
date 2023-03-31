"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
const tslib_1 = require("tslib");
const sdk_core_1 = require("@uniswap/sdk-core");
const v3_sdk_1 = require("@uniswap/v3-sdk");
const jsbi_1 = tslib_1.__importDefault(require("jsbi"));
const constants_1 = require("./constants");
const contracts_1 = require("./contracts");
const common = tslib_1.__importStar(require("@composable-router/common"));
const utils_1 = require("./utils");
const tiny_invariant_1 = tslib_1.__importDefault(require("tiny-invariant"));
class Service extends common.Web3Toolkit {
    // https://github.com/Uniswap/interface/blob/v4.204.5/src/pages/Swap/index.tsx#L203
    // https://github.com/Uniswap/interface/blob/v4.204.5/src/pages/Swap/index.tsx#L343
    // https://github.com/Uniswap/interface/blob/v4.204.5/src/hooks/useSwapCallback.tsx#L14
    // https://github.com/Uniswap/interface/blob/v4.204.5/src/state/swap/hooks.tsx#L116
    // https://github.com/Uniswap/interface/blob/v4.204.5/src/hooks/useBestTrade.ts#L21
    // https://github.com/Uniswap/interface/blob/v4.204.5/src/hooks/useBestTrade.ts#L61
    // https://github.com/Uniswap/interface/blob/v4.204.5/src/hooks/useClientSideV3Trade.ts#L31
    // https://github.com/Uniswap/interface/blob/v4.204.5/src/state/routing/types.ts#L71
    async getBestTrade(tradeType, amountSpecified, otherCurrency) {
        const [currencyIn, currencyOut] = tradeType === sdk_core_1.TradeType.EXACT_INPUT
            ? [amountSpecified.currency, otherCurrency]
            : [otherCurrency, amountSpecified.currency];
        const routes = await this.getAllRoutes(currencyIn, currencyOut);
        (0, tiny_invariant_1.default)(routes.length > 0, 'invalid swap');
        const calls = routes.map((route) => ({
            target: constants_1.QUOTER_ADDRESS,
            callData: v3_sdk_1.SwapQuoter.quoteCallParameters(route, amountSpecified, tradeType).calldata,
        }));
        const results = await this.multicall2.callStatic.tryAggregate(false, calls);
        const { route, inputAmount, outputAmount } = results.reduce((currentBest, [success, returnData], i) => {
            if (!success)
                return currentBest;
            // overwrite the current best if it's not defined or if this route is better
            if (tradeType === sdk_core_1.TradeType.EXACT_INPUT) {
                const amountOut = sdk_core_1.CurrencyAmount.fromRawAmount(currencyOut, returnData);
                if (currentBest.outputAmount === null ||
                    jsbi_1.default.lessThan(currentBest.outputAmount.quotient, amountOut.quotient)) {
                    return { route: routes[i], inputAmount: amountSpecified, outputAmount: amountOut };
                }
            }
            else {
                const amountIn = sdk_core_1.CurrencyAmount.fromRawAmount(currencyIn, returnData);
                if (currentBest.inputAmount === null ||
                    jsbi_1.default.greaterThan(currentBest.inputAmount.quotient, amountIn.quotient)) {
                    return { route: routes[i], inputAmount: amountIn, outputAmount: amountSpecified };
                }
            }
            return currentBest;
        }, { route: null, inputAmount: null, outputAmount: null });
        if (!route || !inputAmount || !outputAmount)
            throw new Error('no route found');
        return { route, inputAmount, outputAmount };
    }
    // https://github.com/Uniswap/interface/blob/v4.204.5/src/hooks/useAllV3Routes.ts#L62
    async getAllRoutes(currencyIn, currencyOut) {
        const pools = await this.getPools(currencyIn, currencyOut);
        const routes = (0, utils_1.computeAllRoutes)(currencyIn, currencyOut, pools, this.chainId, [], [], currencyIn, 2);
        return routes;
    }
    // https://github.com/Uniswap/interface/blob/v4.204.5/src/hooks/useV3SwapPools.ts#L15
    // https://github.com/Uniswap/interface/blob/v4.204.5/src/hooks/usePools.ts#L86
    async getPools(currencyIn, currencyOut) {
        const allCurrencyCombinationsWithAllFees = (0, utils_1.getAllCurrencyCombinationsWithAllFees)(this.chainId, currencyIn, currencyOut);
        const poolTokens = allCurrencyCombinationsWithAllFees.map(([tokenA, tokenB, fee]) => tokenA.sortsBefore(tokenB) ? [tokenA, tokenB, fee] : [tokenB, tokenA, fee]);
        const poolAddresses = poolTokens.map(([tokenA, tokenB, fee]) => (0, v3_sdk_1.computePoolAddress)({ factoryAddress: v3_sdk_1.FACTORY_ADDRESS, tokenA, tokenB, fee }));
        const iface = contracts_1.UniswapV3Pool__factory.createInterface();
        const callDataSlot0 = iface.encodeFunctionData('slot0');
        const callsSlot0 = poolAddresses.map((address) => ({
            target: address,
            callData: callDataSlot0,
        }));
        const resultsSlot0 = await this.multicall2.callStatic.tryAggregate(false, callsSlot0);
        const callDataLiquidity = iface.encodeFunctionData('liquidity');
        const callsLiquidity = poolAddresses.map((address) => ({
            target: address,
            callData: callDataLiquidity,
        }));
        const resultsLiquidity = await this.multicall2.callStatic.tryAggregate(false, callsLiquidity);
        const pools = poolTokens.reduce((accumulator, [tokenA, tokenB, fee], i) => {
            const resultSlot0 = resultsSlot0[i];
            const resultLiquidity = resultsLiquidity[i];
            if (resultSlot0.success &&
                resultSlot0.returnData !== '0x' &&
                resultLiquidity.success &&
                resultLiquidity.returnData !== '0x') {
                const slot0 = iface.decodeFunctionResult('slot0', resultSlot0.returnData);
                if (slot0.sqrtPriceX96 && !slot0.sqrtPriceX96.isZero()) {
                    const [liquidity] = iface.decodeFunctionResult('liquidity', resultLiquidity.returnData);
                    accumulator.push(new v3_sdk_1.Pool(tokenA, tokenB, fee, slot0.sqrtPriceX96, liquidity, slot0.tick));
                }
            }
            return accumulator;
        }, []);
        return pools;
    }
}
exports.Service = Service;
//# sourceMappingURL=service.js.map