"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContractAddress = exports.contractAddressMap = void 0;
exports.contractAddressMap = {
    Comptroller: '0x3d9819210A31b4961b30EF54bE2aeD79B9c9Cd3B',
    CompoundLens: '0xdCbDb7306c6Ff46f77B349188dC18cEd9DF30299',
};
function getContractAddress(name) {
    return exports.contractAddressMap[name];
}
exports.getContractAddress = getContractAddress;
//# sourceMappingURL=config.js.map