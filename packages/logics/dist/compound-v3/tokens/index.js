"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COMP = exports.COMPMap = exports.polygonTokens = exports.mainnetTokens = void 0;
const tslib_1 = require("tslib");
const common = tslib_1.__importStar(require("@composable-router/common"));
const mainnet_json_1 = tslib_1.__importDefault(require("./data/mainnet.json"));
const polygon_json_1 = tslib_1.__importDefault(require("./data/polygon.json"));
exports.mainnetTokens = common.toTokenMap(mainnet_json_1.default);
exports.polygonTokens = common.toTokenMap(polygon_json_1.default);
exports.COMPMap = {
    [common.ChainId.mainnet]: new common.Token(1, '0xc00e94Cb662C3520282E6f5717214004A7f26888', 18, 'COMP', 'Compound'),
    [common.ChainId.polygon]: new common.Token(137, '0x8505b9d2254A7Ae468c0E9dd10Ccea3A837aef5c', 18, 'COMP', '(PoS) Compound'),
};
function COMP(chainId) {
    return exports.COMPMap[chainId];
}
exports.COMP = COMP;
//# sourceMappingURL=index.js.map