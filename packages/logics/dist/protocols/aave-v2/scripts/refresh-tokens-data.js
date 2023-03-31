"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const service_1 = require("../service");
const common = tslib_1.__importStar(require("@composable-router/common"));
const fs_extra_1 = tslib_1.__importDefault(require("fs-extra"));
const path_1 = require("path");
async function default_1() {
    const chainIds = [common.ChainId.mainnet];
    for (const chainId of chainIds) {
        const service = new service_1.Service(chainId);
        const reserveTokens = await service.getReserveTokens();
        const tokenMap = reserveTokens.reduce((accumulator, reserveToken) => {
            if (reserveToken.asset.isWrapped) {
                const unwrapped = reserveToken.asset.unwrapped;
                accumulator[unwrapped.symbol] = unwrapped;
            }
            accumulator[reserveToken.asset.symbol] = reserveToken.asset;
            accumulator[reserveToken.aToken.symbol] = reserveToken.aToken;
            return accumulator;
        }, {});
        const tokenDataPath = (0, path_1.resolve)(__dirname, '..', 'tokens', 'data', `${common.getNetworkId(chainId)}.json`);
        fs_extra_1.default.outputJSONSync(tokenDataPath, tokenMap, { spaces: 2 });
    }
}
exports.default = default_1;
//# sourceMappingURL=refresh-tokens-data.js.map