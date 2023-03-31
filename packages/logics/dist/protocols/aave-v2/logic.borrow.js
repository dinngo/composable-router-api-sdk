"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowLogic = void 0;
const tslib_1 = require("tslib");
const contracts_1 = require("./contracts");
const service_1 = require("./service");
const common = tslib_1.__importStar(require("@composable-router/common"));
const core = tslib_1.__importStar(require("@composable-router/core"));
let BorrowLogic = class BorrowLogic extends core.Logic {
    async getTokenList() {
        const service = new service_1.Service(this.chainId, this.provider);
        const tokens = await service.getAssets();
        const tokenList = [];
        for (const token of tokens) {
            if (token.isWrapped) {
                tokenList.push(token.unwrapped);
            }
            tokenList.push(token);
        }
        return tokenList;
    }
    async getLogic(fields, options) {
        const { output, interestRateMode, referralCode = 0 } = fields;
        const { account } = options;
        const tokenOut = output.token.wrapped;
        const service = new service_1.Service(this.chainId, this.provider);
        const to = await service.getLendingPoolAddress();
        const data = contracts_1.LendingPool__factory.createInterface().encodeFunctionData('borrow', [
            tokenOut.address,
            output.amountWei,
            interestRateMode,
            referralCode,
            account,
        ]);
        const wrapMode = output.token.isNative ? core.WrapMode.unwrapAfter : core.WrapMode.none;
        return core.newLogic({ to, data, wrapMode });
    }
};
BorrowLogic.supportedChainIds = [common.ChainId.mainnet, common.ChainId.polygon, common.ChainId.avalanche];
BorrowLogic = tslib_1.__decorate([
    core.LogicDefinitionDecorator()
], BorrowLogic);
exports.BorrowLogic = BorrowLogic;
//# sourceMappingURL=logic.borrow.js.map