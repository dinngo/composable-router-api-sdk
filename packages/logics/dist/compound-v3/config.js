"use strict";
/* eslint-disable max-len */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMarket = exports.getMarkets = exports.marketMap = exports.marketsMap = exports.MarketId = exports.getContractAddress = exports.contractAddressMap = void 0;
const tslib_1 = require("tslib");
const common = tslib_1.__importStar(require("@composable-router/common"));
exports.contractAddressMap = {
    [common.ChainId.mainnet]: {
        CometRewards: '0x1B0e765F6224C21223AeA2af16c1C46E38885a40',
    },
    [common.ChainId.polygon]: {
        CometRewards: '0x45939657d1CA34A8FA39A924B71D28Fe8431e581',
    },
};
function getContractAddress(chainId, name) {
    return exports.contractAddressMap[chainId][name];
}
exports.getContractAddress = getContractAddress;
var MarketId;
(function (MarketId) {
    MarketId["USDC"] = "USDC";
    MarketId["ETH"] = "ETH";
})(MarketId = exports.MarketId || (exports.MarketId = {}));
exports.marketsMap = {
    [common.ChainId.mainnet]: [
        {
            id: MarketId.USDC,
            cometAddress: '0xc3d688B66703497DAA19211EEdff47f25384cdc3',
            baseTokenAddress: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
        },
        {
            id: MarketId.ETH,
            cometAddress: '0xA17581A9E3356d9A858b789D68B4d866e593aE94',
            baseTokenAddress: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
        },
    ],
    [common.ChainId.polygon]: [
        {
            id: MarketId.USDC,
            cometAddress: '0xF25212E676D1F7F89Cd72fFEe66158f541246445',
            baseTokenAddress: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
        },
    ],
};
exports.marketMap = Object.keys(exports.marketsMap).reduce((accumulator, key) => {
    const chainId = Number(key);
    const markets = exports.marketsMap[chainId];
    if (!accumulator[chainId])
        accumulator[chainId] = {};
    for (const market of markets) {
        accumulator[chainId][market.id] = market;
    }
    return accumulator;
}, {});
function getMarkets(chainId) {
    return exports.marketsMap[chainId];
}
exports.getMarkets = getMarkets;
function getMarket(chainId, id) {
    return exports.marketMap[chainId][id];
}
exports.getMarket = getMarket;
//# sourceMappingURL=config.js.map