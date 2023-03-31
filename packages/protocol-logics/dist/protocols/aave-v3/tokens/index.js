"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainnetTokens = void 0;
const tslib_1 = require("tslib");
const common = tslib_1.__importStar(require("@composable-router/common"));
const mainnet_json_1 = tslib_1.__importDefault(require("./data/mainnet.json"));
exports.mainnetTokens = common.toTokenMap(mainnet_json_1.default);
//# sourceMappingURL=index.js.map