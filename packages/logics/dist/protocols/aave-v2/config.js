"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setContractAddress = exports.getContractAddress = exports.contractAddressMap = void 0;
const tslib_1 = require("tslib");
const common = tslib_1.__importStar(require("@composable-router/common"));
// TODO: update after FlashLoanCallbackAaveV2 deployed
exports.contractAddressMap = {
    [common.ChainId.mainnet]: {
        ProtocolDataProvider: '0x057835Ad21a177dbdd3090bB1CAE03EaCF78Fc6d',
        FlashLoanCallbackAaveV2: '0xcfaa4D5C152Ac3DAc3e2feAAC9Cd70709f350982',
    },
    [common.ChainId.polygon]: {
        ProtocolDataProvider: '0x7551b5D2763519d4e37e8B81929D336De671d46d',
        FlashLoanCallbackAaveV2: '',
    },
    [common.ChainId.avalanche]: {
        ProtocolDataProvider: '0x65285E9dfab318f57051ab2b139ccCf232945451',
        FlashLoanCallbackAaveV2: '',
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