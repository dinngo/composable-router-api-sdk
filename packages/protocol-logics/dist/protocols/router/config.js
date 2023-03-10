"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setContractAddress = exports.getContractAddress = exports.contractAddressMap = void 0;
const tslib_1 = require("tslib");
const common = tslib_1.__importStar(require("@composable-router/common"));
// TODO: update after SpenderPermit2ERC20 deployed
exports.contractAddressMap = {
    [common.ChainId.mainnet]: {
        Permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
        SpenderPermit2ERC20: '0x6a68033b6E03dB8E2bB970245c87E934d45E1Cd0',
    },
    [common.ChainId.polygon]: {
        Permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
        SpenderPermit2ERC20: '',
    },
    [common.ChainId.arbitrum]: {
        Permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
        SpenderPermit2ERC20: '',
    },
    [common.ChainId.optimism]: {
        Permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
        SpenderPermit2ERC20: '',
    },
    [common.ChainId.avalanche]: {
        // TODO: uniswap don't deploy permit2 in avalanche
        Permit2: '',
        SpenderPermit2ERC20: '',
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