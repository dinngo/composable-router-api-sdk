"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setContractAddress = exports.getContractAddress = exports.contractAddressMap = void 0;
const tslib_1 = require("tslib");
const common = tslib_1.__importStar(require("@composable-router/common"));
// TODO: update after FlashLoanCallbackBalancerV2 deployed
exports.contractAddressMap = {
    [common.ChainId.mainnet]: {
        Vault: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
        FlashLoanCallbackBalancerV2: '0x3AC9d552Dab7b2FF2980F59C6735CAB9F1fF4136',
    },
    [common.ChainId.polygon]: {
        Vault: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
        FlashLoanCallbackBalancerV2: '',
    },
    [common.ChainId.arbitrum]: {
        Vault: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
        FlashLoanCallbackBalancerV2: '',
    },
    [common.ChainId.optimism]: {
        Vault: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
        FlashLoanCallbackBalancerV2: '',
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