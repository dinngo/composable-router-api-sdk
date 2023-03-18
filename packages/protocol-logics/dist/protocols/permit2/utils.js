"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPermitSingle = exports.getDeadline = void 0;
function getDeadline(expiration) {
    return Math.floor(Date.now() / 1000) + expiration;
}
exports.getDeadline = getDeadline;
function isPermitSingle(permit) {
    return !Array.isArray(permit.details);
}
exports.isPermitSingle = isPermitSingle;
//# sourceMappingURL=utils.js.map