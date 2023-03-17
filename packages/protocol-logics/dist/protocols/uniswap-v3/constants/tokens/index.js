"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.optimismTokens = exports.arbitrumTokens = exports.polygonTokens = exports.mainnetTokens = exports.toTokenMap = exports.WRAPPED_NATIVE_CURRENCY = void 0;
const tslib_1 = require("tslib");
const sdk_core_1 = require("@uniswap/sdk-core");
const arbitrum_json_1 = tslib_1.__importDefault(require("./data/arbitrum.json"));
const common = tslib_1.__importStar(require("@composable-router/common"));
const mainnet_json_1 = tslib_1.__importDefault(require("./data/mainnet.json"));
const optimism_json_1 = tslib_1.__importDefault(require("./data/optimism.json"));
const polygon_json_1 = tslib_1.__importDefault(require("./data/polygon.json"));
exports.WRAPPED_NATIVE_CURRENCY = {
    [common.ChainId.mainnet]: sdk_core_1.WETH9[common.ChainId.mainnet],
    [common.ChainId.polygon]: new sdk_core_1.Token(common.ChainId.polygon, '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270', 18, 'WMATIC', 'Wrapped MATIC'),
    [common.ChainId.arbitrum]: new sdk_core_1.Token(common.ChainId.arbitrum, '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1', 18, 'WETH', 'Wrapped Ether'),
    [common.ChainId.optimism]: new sdk_core_1.Token(common.ChainId.optimism, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapped Ether'),
};
function toTokenMap(tokenObjectMap) {
    return Object.keys(tokenObjectMap).reduce((accumulator, symbol) => {
        const token = tokenObjectMap[symbol];
        accumulator[symbol] = new sdk_core_1.Token(token.chainId, token.address, token.decimals, token.symbol, token.name);
        return accumulator;
    }, {});
}
exports.toTokenMap = toTokenMap;
exports.mainnetTokens = toTokenMap(mainnet_json_1.default);
exports.polygonTokens = toTokenMap(polygon_json_1.default);
exports.arbitrumTokens = toTokenMap(arbitrum_json_1.default);
exports.optimismTokens = toTokenMap(optimism_json_1.default);
//# sourceMappingURL=index.js.map