"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDeadline = void 0;
function getDeadline(expiration) {
    return Math.floor(Date.now() / 1000) + expiration;
}
exports.getDeadline = getDeadline;
//# sourceMappingURL=utils.js.map