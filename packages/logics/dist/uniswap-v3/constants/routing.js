"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CUSTOM_BASES = exports.ADDITIONAL_BASES = exports.BASES_TO_CHECK_TRADES_AGAINST = void 0;
const tslib_1 = require("tslib");
const sdk_core_1 = require("@uniswap/sdk-core");
const tokens_1 = require("./tokens");
const common = tslib_1.__importStar(require("@composable-router/common"));
// https://github.com/Uniswap/interface/blob/v4.204.5/src/constants/routing.ts#L61
exports.BASES_TO_CHECK_TRADES_AGAINST = {
    [common.ChainId.mainnet]: [
        tokens_1.WRAPPED_NATIVE_CURRENCY[common.ChainId.mainnet],
        tokens_1.mainnetTokens.DAI,
        tokens_1.mainnetTokens.USDC,
        tokens_1.mainnetTokens.USDT,
        tokens_1.mainnetTokens.WBTC,
    ],
    [common.ChainId.optimism]: [
        tokens_1.WRAPPED_NATIVE_CURRENCY[common.ChainId.optimism],
        tokens_1.optimismTokens.DAI,
        tokens_1.optimismTokens.USDT,
        tokens_1.optimismTokens.WBTC,
    ],
    [common.ChainId.arbitrum]: [
        tokens_1.WRAPPED_NATIVE_CURRENCY[common.ChainId.arbitrum],
        tokens_1.arbitrumTokens.DAI,
        tokens_1.arbitrumTokens.USDT,
        tokens_1.arbitrumTokens.WBTC,
    ],
    [common.ChainId.polygon]: [
        tokens_1.WRAPPED_NATIVE_CURRENCY[common.ChainId.polygon],
        tokens_1.polygonTokens.DAI,
        tokens_1.polygonTokens.USDC,
        tokens_1.polygonTokens.USDT,
        tokens_1.polygonTokens.WETH,
    ],
};
// https://github.com/Uniswap/interface/blob/v4.204.5/src/constants/routing.ts#L91
exports.ADDITIONAL_BASES = {
    [common.ChainId.mainnet]: {
        '0xF16E4d813f4DcfDe4c5b44f305c908742De84eF0': [tokens_1.mainnetTokens.ETH2X_FLI],
        [tokens_1.mainnetTokens.rETH2.address]: [tokens_1.mainnetTokens.sETH2],
        [tokens_1.mainnetTokens.SWISE.address]: [tokens_1.mainnetTokens.sETH2],
        [tokens_1.mainnetTokens.FEI.address]: [tokens_1.mainnetTokens.TRIBE],
        [tokens_1.mainnetTokens.TRIBE.address]: [tokens_1.mainnetTokens.FEI],
        [tokens_1.mainnetTokens.FRAX.address]: [tokens_1.mainnetTokens.FXS],
        [tokens_1.mainnetTokens.FXS.address]: [tokens_1.mainnetTokens.FRAX],
        [tokens_1.mainnetTokens.WBTC.address]: [tokens_1.mainnetTokens.renBTC],
        [tokens_1.mainnetTokens.renBTC.address]: [tokens_1.mainnetTokens.WBTC],
    },
};
// https://github.com/Uniswap/interface/blob/v4.204.5/src/constants/routing.ts#L108
exports.CUSTOM_BASES = {
    [common.ChainId.mainnet]: { [tokens_1.mainnetTokens.AMPL.address]: [tokens_1.mainnetTokens.DAI, sdk_core_1.WETH9[1]] },
};
//# sourceMappingURL=routing.js.map