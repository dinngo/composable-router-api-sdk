"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepayLogic = void 0;
const tslib_1 = require("tslib");
const types_1 = require("./types");
const contracts_1 = require("./contracts");
const service_1 = require("./service");
const common = tslib_1.__importStar(require("@composable-router/common"));
const core = tslib_1.__importStar(require("@composable-router/core"));
let RepayLogic = class RepayLogic extends core.Logic {
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
    async quote(params) {
        const { borrower, tokenIn, interestRateMode } = params;
        const service = new service_1.Service(this.chainId, this.provider);
        const { currentStableDebt, currentVariableDebt } = await service.poolDataProvider.getUserReserveData(tokenIn.wrapped.address, borrower);
        const currentDebt = interestRateMode === types_1.InterestRateMode.variable ? currentVariableDebt : currentStableDebt;
        const amountWei = common.calcSlippage(currentDebt, -100); // slightly higher than the current borrowed amount
        const input = new common.TokenAmount(tokenIn).setWei(amountWei);
        return { borrower, interestRateMode, input };
    }
    async getLogic(fields) {
        const { input, interestRateMode, borrower, amountBps } = fields;
        const tokenIn = input.token.wrapped;
        const service = new service_1.Service(this.chainId, this.provider);
        const to = await service.getPoolAddress();
        const data = contracts_1.Pool__factory.createInterface().encodeFunctionData('repay', [
            tokenIn.address,
            input.amountWei,
            interestRateMode,
            borrower,
        ]);
        const amountOffset = amountBps ? common.getParamOffset(1) : undefined;
        const inputs = [
            core.newLogicInput({ input: new common.TokenAmount(tokenIn, input.amount), amountBps, amountOffset }),
        ];
        const wrapMode = input.token.isNative ? core.WrapMode.wrapBefore : core.WrapMode.none;
        return core.newLogic({ to, data, inputs, wrapMode });
    }
};
RepayLogic.supportedChainIds = [
    common.ChainId.mainnet,
    common.ChainId.polygon,
    common.ChainId.arbitrum,
    common.ChainId.optimism,
    common.ChainId.avalanche,
];
RepayLogic = tslib_1.__decorate([
    core.LogicDefinitionDecorator()
], RepayLogic);
exports.RepayLogic = RepayLogic;
//# sourceMappingURL=logic.repay.js.map