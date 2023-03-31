"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContractAddress = exports.contractAddressMap = void 0;
const tslib_1 = require("tslib");
const common = tslib_1.__importStar(require("@composable-router/common"));
exports.contractAddressMap = {
    [common.ChainId.mainnet]: {
        Permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
    },
    [common.ChainId.polygon]: {
        Permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
    },
    [common.ChainId.arbitrum]: {
        Permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
    },
    [common.ChainId.optimism]: {
        Permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
    },
    [common.ChainId.avalanche]: {
        // TODO: uniswap don't deploy permit2 in avalanche
        Permit2: '',
    },
};
function getContractAddress(chainId, name) {
    return exports.contractAddressMap[chainId][name];
}
exports.getContractAddress = getContractAddress;
//# sourceMappingURL=config.js.map