"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepayLogic = void 0;
const tslib_1 = require("tslib");
const types_1 = require("./types");
const contracts_1 = require("./contracts");
const service_1 = require("./service");
const common = tslib_1.__importStar(require("@composable-router/common"));
const core = tslib_1.__importStar(require("@composable-router/core"));
const tiny_invariant_1 = tslib_1.__importDefault(require("tiny-invariant"));
let RepayLogic = class RepayLogic extends core.Logic {
    async getTokenList() {
        const service = new service_1.Service(this.chainId, this.provider);
        const tokens = await service.getAssets();
        return tokens;
    }
    async quote(params) {
        const { borrower, tokenIn, interestRateMode } = params;
        const service = new service_1.Service(this.chainId, this.provider);
        const { currentStableDebt, currentVariableDebt } = await service.protocolDataProvider.getUserReserveData(tokenIn.address, borrower);
        const currentDebt = interestRateMode === types_1.InterestRateMode.variable ? currentVariableDebt : currentStableDebt;
        const amountWei = common.calcSlippage(currentDebt, -100); // slightly higher than the current borrowed amount
        const input = new common.TokenAmount(tokenIn).setWei(amountWei);
        return { borrower, interestRateMode, input };
    }
    async getLogic(fields) {
        const { input, interestRateMode, borrower, amountBps } = fields;
        (0, tiny_invariant_1.default)(!input.token.isNative, 'tokenIn should not be native token');
        const service = new service_1.Service(this.chainId, this.provider);
        const to = await service.getLendingPoolAddress();
        const data = contracts_1.LendingPool__factory.createInterface().encodeFunctionData('repay', [
            input.token.address,
            input.amountWei,
            interestRateMode,
            borrower,
        ]);
        let amountOffset;
        if (amountBps)
            amountOffset = common.getParamOffset(1);
        const inputs = [core.newLogicInput({ input, amountBps, amountOffset })];
        return core.newLogic({ to, data, inputs });
    }
};
RepayLogic.supportedChainIds = [common.ChainId.mainnet, common.ChainId.polygon, common.ChainId.avalanche];
RepayLogic = tslib_1.__decorate([
    core.LogicDefinitionDecorator()
], RepayLogic);
exports.RepayLogic = RepayLogic;
//# sourceMappingURL=logic.repay.js.map