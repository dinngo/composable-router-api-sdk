"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const service_1 = require("../service");
const common = tslib_1.__importStar(require("@composable-router/common"));
const fs_extra_1 = tslib_1.__importDefault(require("fs-extra"));
const config_1 = require("../config");
const path_1 = require("path");
async function default_1() {
    const chainIds = [common.ChainId.mainnet, common.ChainId.polygon];
    for (const chainId of chainIds) {
        const markets = (0, config_1.getMarkets)(chainId);
        const service = new service_1.Service(chainId);
        const tokenMap = {};
        for (const market of markets) {
            const { cToken, baseToken } = await service.getCometTokens(market.id);
            tokenMap[cToken.symbol] = cToken;
            const unwrappedBaseToken = baseToken.unwrapped;
            tokenMap[unwrappedBaseToken.symbol] = unwrappedBaseToken;
            const collaterals = await service.getCollaterals(market.id);
            for (const collateral of collaterals) {
                tokenMap[collateral.symbol] = collateral;
            }
        }
        const tokenDataPath = (0, path_1.resolve)(__dirname, '..', 'tokens', 'data', `${common.getNetworkId(chainId)}.json`);
        fs_extra_1.default.outputJSONSync(tokenDataPath, tokenMap, { spaces: 2 });
    }
}
exports.default = default_1;
//# sourceMappingURL=refresh-tokens-data.js.map