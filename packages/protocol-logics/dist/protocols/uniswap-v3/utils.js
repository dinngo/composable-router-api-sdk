"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDeadline = exports.computeAllRoutes = exports.getAllCurrencyCombinationsWithAllFees = exports.getAllCurrencyCombinations = void 0;
const tslib_1 = require("tslib");
const constants_1 = require("./constants");
const v3_sdk_1 = require("@uniswap/v3-sdk");
const common = tslib_1.__importStar(require("@composable-router/common"));
// https://github.com/Uniswap/interface/blob/v4.204.5/src/hooks/useAllCurrencyCombinations.ts#L6
function getAllCurrencyCombinations(chainId, currencyA, currencyB) {
    var _a, _b, _c, _d, _e;
    const [tokenA, tokenB] = [currencyA.wrapped, currencyB.wrapped];
    const common = (_a = constants_1.BASES_TO_CHECK_TRADES_AGAINST[chainId]) !== null && _a !== void 0 ? _a : [];
    const additionalA = tokenA ? (_c = (_b = constants_1.ADDITIONAL_BASES[chainId]) === null || _b === void 0 ? void 0 : _b[tokenA.address]) !== null && _c !== void 0 ? _c : [] : [];
    const additionalB = tokenB ? (_e = (_d = constants_1.ADDITIONAL_BASES[chainId]) === null || _d === void 0 ? void 0 : _d[tokenB.address]) !== null && _e !== void 0 ? _e : [] : [];
    const bases = [...common, ...additionalA, ...additionalB];
    const basePairs = bases
        .flatMap((base) => bases.map((otherBase) => [base, otherBase]))
        .filter(([t0, t1]) => !t0.equals(t1));
    const allCurrencyCombinations = [
        // the direct pair
        [tokenA, tokenB],
        // token A against all bases
        ...bases.map((base) => [tokenA, base]),
        // token B against all bases
        ...bases.map((base) => [tokenB, base]),
        // each base against all bases
        ...basePairs,
    ]
        .filter(([t0, t1]) => !t0.equals(t1))
        // filter out duplicate pairs
        .filter(([t0, t1], i, otherPairs) => {
        // find the first index in the array at which there are the same 2 tokens as the current
        const firstIndexInOtherPairs = otherPairs.findIndex(([t0Other, t1Other]) => {
            return (t0.equals(t0Other) && t1.equals(t1Other)) || (t0.equals(t1Other) && t1.equals(t0Other));
        });
        // only accept the first occurrence of the same 2 tokens
        return firstIndexInOtherPairs === i;
    }) // optionally filter out some pairs for tokens with custom bases defined
        .filter(([tokenA, tokenB]) => {
        if (!chainId)
            return true;
        const customBases = constants_1.CUSTOM_BASES[chainId];
        const customBasesA = customBases === null || customBases === void 0 ? void 0 : customBases[tokenA.address];
        const customBasesB = customBases === null || customBases === void 0 ? void 0 : customBases[tokenB.address];
        if (!customBasesA && !customBasesB)
            return true;
        if (customBasesA && !customBasesA.find((base) => tokenB.equals(base)))
            return false;
        if (customBasesB && !customBasesB.find((base) => tokenA.equals(base)))
            return false;
        return true;
    });
    return allCurrencyCombinations;
}
exports.getAllCurrencyCombinations = getAllCurrencyCombinations;
// https://github.com/Uniswap/interface/blob/v4.204.5/src/hooks/useV3SwapPools.ts#L26
function getAllCurrencyCombinationsWithAllFees(chainId, currencyIn, currencyOut) {
    const allCurrencyCombinations = getAllCurrencyCombinations(chainId, currencyIn, currencyOut);
    const allCurrencyCombinationsWithAllFees = allCurrencyCombinations.reduce((list, [tokenA, tokenB]) => {
        return chainId === common.ChainId.mainnet
            ? list.concat([
                [tokenA, tokenB, v3_sdk_1.FeeAmount.LOW],
                [tokenA, tokenB, v3_sdk_1.FeeAmount.MEDIUM],
                [tokenA, tokenB, v3_sdk_1.FeeAmount.HIGH],
            ])
            : list.concat([
                [tokenA, tokenB, v3_sdk_1.FeeAmount.LOWEST],
                [tokenA, tokenB, v3_sdk_1.FeeAmount.LOW],
                [tokenA, tokenB, v3_sdk_1.FeeAmount.MEDIUM],
                [tokenA, tokenB, v3_sdk_1.FeeAmount.HIGH],
            ]);
    }, []);
    return allCurrencyCombinationsWithAllFees;
}
exports.getAllCurrencyCombinationsWithAllFees = getAllCurrencyCombinationsWithAllFees;
// https://github.com/Uniswap/interface/blob/v4.204.5/src/hooks/useAllV3Routes.ts#L13
function poolEquals(poolA, poolB) {
    return (poolA === poolB ||
        (poolA.token0.equals(poolB.token0) && poolA.token1.equals(poolB.token1) && poolA.fee === poolB.fee));
}
// https://github.com/Uniswap/interface/blob/v4.204.5/src/hooks/useAllV3Routes.ts#L20
function computeAllRoutes(currencyIn, currencyOut, pools, chainId, currentPath = [], allPaths = [], startCurrencyIn = currencyIn, maxHops = 2) {
    const tokenIn = currencyIn.wrapped;
    const tokenOut = currencyOut.wrapped;
    for (const pool of pools) {
        if (!pool.involvesToken(tokenIn) || currentPath.find((pathPool) => poolEquals(pool, pathPool)))
            continue;
        const outputToken = pool.token0.equals(tokenIn) ? pool.token1 : pool.token0;
        if (outputToken.equals(tokenOut)) {
            allPaths.push(new v3_sdk_1.Route([...currentPath, pool], startCurrencyIn, currencyOut));
        }
        else if (maxHops > 1) {
            computeAllRoutes(outputToken, currencyOut, pools, chainId, [...currentPath, pool], allPaths, startCurrencyIn, maxHops - 1);
        }
    }
    return allPaths;
}
exports.computeAllRoutes = computeAllRoutes;
function getDeadline(chainId) {
    const fromNow = chainId === common.ChainId.mainnet ? constants_1.DEFAULT_DEADLINE_FROM_NOW : constants_1.L2_DEADLINE_FROM_NOW;
    return Math.floor(Date.now() / 1000) + fromNow;
}
exports.getDeadline = getDeadline;
//# sourceMappingURL=utils.js.map