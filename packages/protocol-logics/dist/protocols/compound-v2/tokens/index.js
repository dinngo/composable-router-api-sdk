"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCToken = exports.toCToken = exports.toUnderlyingToken = exports.cTokenToUnderlyingMap = exports.underlyingToCTokenMap = exports.tokenPairs = exports.underlyingTokens = exports.cTokens = exports.COMP = void 0;
const tslib_1 = require("tslib");
const cTokens_json_1 = tslib_1.__importDefault(require("./data/cTokens.json"));
const common = tslib_1.__importStar(require("@composable-router/common"));
const underlyingTokens_json_1 = tslib_1.__importDefault(require("./data/underlyingTokens.json"));
exports.COMP = new common.Token(1, '0xc00e94Cb662C3520282E6f5717214004A7f26888', 18, 'COMP', 'Compound');
exports.cTokens = common.toTokenMap(cTokens_json_1.default);
exports.underlyingTokens = common.toTokenMap(underlyingTokens_json_1.default);
_a = Object.keys(underlyingTokens_json_1.default).reduce((accumulator, underlyingTokenSymbol) => {
    const underlyingToken = exports.underlyingTokens[underlyingTokenSymbol];
    const cToken = exports.cTokens[`c${underlyingTokenSymbol}`];
    accumulator[0].push({ cToken, underlyingToken });
    accumulator[1][underlyingToken.address] = cToken;
    accumulator[2][cToken.address] = underlyingToken;
    return accumulator;
}, [
    [],
    {},
    {},
]), exports.tokenPairs = _a[0], exports.underlyingToCTokenMap = _a[1], exports.cTokenToUnderlyingMap = _a[2];
function toUnderlyingToken(cTokenOrAddress) {
    return exports.cTokenToUnderlyingMap[common.Token.getAddress(cTokenOrAddress)];
}
exports.toUnderlyingToken = toUnderlyingToken;
function toCToken(underlyingTokenOrAddress) {
    return exports.underlyingToCTokenMap[common.Token.getAddress(underlyingTokenOrAddress)];
}
exports.toCToken = toCToken;
function isCToken(token) {
    return token.symbol.startsWith('c') && token.name.startsWith('Compound');
}
exports.isCToken = isCToken;
//# sourceMappingURL=index.js.map