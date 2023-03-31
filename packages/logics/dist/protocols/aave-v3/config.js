"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setContractAddress = exports.getContractAddress = exports.contractAddressMap = void 0;
const tslib_1 = require("tslib");
const common = tslib_1.__importStar(require("@composable-router/common"));
// TODO: update after FlashLoanCallbackAaveV3 deployed
exports.contractAddressMap = {
    [common.ChainId.mainnet]: {
        PoolDataProvider: '0x7B4EB56E7CD4b454BA8ff71E4518426369a138a3',
        FlashLoanCallbackAaveV3: '0xcfaa4D5C152Ac3DAc3e2feAAC9Cd70709f350982',
    },
    [common.ChainId.polygon]: {
        PoolDataProvider: '0x69FA688f1Dc47d4B5d8029D5a35FB7a548310654',
        FlashLoanCallbackAaveV3: '',
    },
    [common.ChainId.arbitrum]: {
        PoolDataProvider: '0x69FA688f1Dc47d4B5d8029D5a35FB7a548310654',
        FlashLoanCallbackAaveV3: '',
    },
    [common.ChainId.optimism]: {
        PoolDataProvider: '0x69FA688f1Dc47d4B5d8029D5a35FB7a548310654',
        FlashLoanCallbackAaveV3: '',
    },
    [common.ChainId.avalanche]: {
        PoolDataProvider: '0x69FA688f1Dc47d4B5d8029D5a35FB7a548310654',
        FlashLoanCallbackAaveV3: '',
    },
};
function getContractAddress(chainId, name) {
    return exports.contractAddressMap[chainId][name];
}
exports.getContractAddress = getContractAddress;
function setContractAddress(chainId, name, address) {
    exports.contractAddressMap[chainId][name] = address;
}
exports.setContractAddress = setContractAddress;
//# sourceMappingURL=config.js.map