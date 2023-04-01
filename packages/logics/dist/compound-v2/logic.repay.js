"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepayLogic = void 0;
const tslib_1 = require("tslib");
const ethers_1 = require("ethers");
const contracts_1 = require("./contracts");
const common = tslib_1.__importStar(require("@composable-router/common"));
const core = tslib_1.__importStar(require("@composable-router/core"));
const tokens_1 = require("./tokens");
let RepayLogic = class RepayLogic extends core.Logic {
    getTokenList() {
        return Object.values(tokens_1.underlyingTokens);
    }
    async quote(params) {
        const { borrower, tokenIn } = params;
        const cToken = (0, tokens_1.toCToken)(tokenIn);
        const borrowBalanceWei = await contracts_1.CErc20__factory.connect(cToken.address, this.provider).callStatic.borrowBalanceCurrent(borrower);
        const input = new common.TokenAmount(tokenIn).setWei(borrowBalanceWei);
        return { borrower, input };
    }
    async build(fields) {
        const { borrower, input, amountBps } = fields;
        const cToken = (0, tokens_1.toCToken)(input.token);
        const to = cToken.address;
        let data;
        let amountOffset;
        if (input.token.isNative) {
            data = contracts_1.CEther__factory.createInterface().encodeFunctionData('repayBorrowBehalf', [borrower]);
            if (amountBps)
                amountOffset = ethers_1.constants.MaxUint256;
        }
        else {
            data = contracts_1.CErc20__factory.createInterface().encodeFunctionData('repayBorrowBehalf', [borrower, input.amountWei]);
            if (amountBps)
                amountOffset = common.getParamOffset(1);
        }
        const inputs = [core.newLogicInput({ input, amountBps, amountOffset })];
        return core.newLogic({ to, data, inputs });
    }
};
RepayLogic.supportedChainIds = [common.ChainId.mainnet];
RepayLogic = tslib_1.__decorate([
    core.LogicDefinitionDecorator()
], RepayLogic);
exports.RepayLogic = RepayLogic;
//# sourceMappingURL=logic.repay.js.map