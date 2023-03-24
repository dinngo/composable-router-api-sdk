"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encodeWithdrawNativeTokenAction = exports.encodeSupplyNativeTokenAction = void 0;
const ethers_1 = require("ethers");
function encodeSupplyNativeTokenAction(comet, to, amount) {
    return ethers_1.utils.defaultAbiCoder.encode(['address', 'address', 'uint'], [comet, to, amount]);
}
exports.encodeSupplyNativeTokenAction = encodeSupplyNativeTokenAction;
function encodeWithdrawNativeTokenAction(comet, to, amount) {
    return ethers_1.utils.defaultAbiCoder.encode(['address', 'address', 'uint'], [comet, to, amount]);
}
exports.encodeWithdrawNativeTokenAction = encodeWithdrawNativeTokenAction;
//# sourceMappingURL=utils.js.map