"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContractAddress = exports.contractAddressMap = void 0;
const tslib_1 = require("tslib");
const common = tslib_1.__importStar(require("@composable-router/common"));
exports.contractAddressMap = {
    [common.ChainId.mainnet]: {
        TokenTransferProxy: '0x216B4B4Ba9F3e719726886d34a177484278Bfcae',
    },
    [common.ChainId.polygon]: {
        TokenTransferProxy: '0x216B4B4Ba9F3e719726886d34a177484278Bfcae',
    },
    [common.ChainId.arbitrum]: {
        TokenTransferProxy: '0x216B4B4Ba9F3e719726886d34a177484278Bfcae',
    },
    [common.ChainId.optimism]: {
        TokenTransferProxy: '0x216B4B4Ba9F3e719726886d34a177484278Bfcae',
    },
    [common.ChainId.avalanche]: {
        TokenTransferProxy: '0x216B4B4Ba9F3e719726886d34a177484278Bfcae',
    },
};
function getContractAddress(chainId, name) {
    return exports.contractAddressMap[chainId][name];
}
exports.getContractAddress = getContractAddress;
//# sourceMappingURL=config.js.map