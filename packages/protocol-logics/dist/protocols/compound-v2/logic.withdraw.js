"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithdrawLogic = void 0;
const tslib_1 = require("tslib");
const ethers_1 = require("ethers");
const contracts_1 = require("./contracts");
const common = tslib_1.__importStar(require("@composable-router/common"));
const core = tslib_1.__importStar(require("@composable-router/core"));
const tokens_1 = require("./tokens");
let WithdrawLogic = class WithdrawLogic extends core.Logic {
    getSupportedTokens() {
        return tokens_1.tokenPairs.map((tokenPair) => [tokenPair.cToken, tokenPair.underlyingToken]);
    }
    async getPrice(params) {
        const { input, tokenOut } = params;
        const cToken = contracts_1.CErc20__factory.connect(input.token.address, this.provider);
        const exchangeRateCurrent = await cToken.callStatic.exchangeRateCurrent();
        const amountOutWei = input.amountWei.mul(exchangeRateCurrent).div(ethers_1.BigNumber.from(10).pow(18));
        const output = new common.TokenAmount(tokenOut).setWei(amountOutWei);
        return output;
    }
    async getLogic(fields) {
        const { input, amountBps } = fields;
        const to = input.token.address;
        const data = contracts_1.CErc20__factory.createInterface().encodeFunctionData('redeem', [input.amountWei]);
        let amountOffset;
        if (amountBps)
            amountOffset = common.getParamOffset(0);
        const inputs = [core.newLogicInput({ input, amountBps, amountOffset })];
        return core.newLogic({ to, data, inputs });
    }
};
WithdrawLogic.supportedChainIds = [common.ChainId.mainnet];
WithdrawLogic = tslib_1.__decorate([
    core.LogicDefinitionDecorator()
], WithdrawLogic);
exports.WithdrawLogic = WithdrawLogic;
//# sourceMappingURL=logic.withdraw.js.map