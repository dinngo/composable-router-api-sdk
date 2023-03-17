"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithdrawLogic = void 0;
const tslib_1 = require("tslib");
const contracts_1 = require("./contracts");
const service_1 = require("./service");
const common = tslib_1.__importStar(require("@composable-router/common"));
const core = tslib_1.__importStar(require("@composable-router/core"));
const tiny_invariant_1 = tslib_1.__importDefault(require("tiny-invariant"));
let WithdrawLogic = class WithdrawLogic extends core.Logic {
    async getTokenList() {
        const service = new service_1.Service(this.chainId, this.provider);
        const reserveTokens = await service.getReserveTokens();
        return reserveTokens.map((reserveToken) => [reserveToken.aToken, reserveToken.asset]);
    }
    async quote(params) {
        const { input, tokenOut } = params;
        (0, tiny_invariant_1.default)(!tokenOut.isNative, 'tokenOut should not be native token');
        const output = new common.TokenAmount(tokenOut, input.amount);
        return output;
    }
    async getLogic(fields, options) {
        const { input, output, amountBps } = fields;
        (0, tiny_invariant_1.default)(!output.token.isNative, 'tokenOut should not be native token');
        const { account } = options;
        const service = new service_1.Service(this.chainId, this.provider);
        const to = await service.getLendingPoolAddress();
        const data = contracts_1.LendingPool__factory.createInterface().encodeFunctionData('withdraw', [
            output.token.address,
            input.amountWei,
            core.calcAccountAgent(this.chainId, account),
        ]);
        let amountOffset;
        if (amountBps)
            amountOffset = common.getParamOffset(1);
        const inputs = [core.newLogicInput({ input, amountBps, amountOffset })];
        return core.newLogic({ to, data, inputs });
    }
};
WithdrawLogic.supportedChainIds = [common.ChainId.mainnet, common.ChainId.polygon, common.ChainId.avalanche];
WithdrawLogic = tslib_1.__decorate([
    core.LogicDefinitionDecorator()
], WithdrawLogic);
exports.WithdrawLogic = WithdrawLogic;
//# sourceMappingURL=logic.withdraw.js.map