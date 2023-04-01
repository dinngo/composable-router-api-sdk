"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithdrawLogic = void 0;
const tslib_1 = require("tslib");
const contracts_1 = require("./contracts");
const service_1 = require("./service");
const common = tslib_1.__importStar(require("@composable-router/common"));
const core = tslib_1.__importStar(require("@composable-router/core"));
let WithdrawLogic = class WithdrawLogic extends core.Logic {
    async getTokenList() {
        const service = new service_1.Service(this.chainId, this.provider);
        const reserveTokens = await service.getReserveTokens();
        const tokenList = [];
        for (const reserveToken of reserveTokens) {
            if (reserveToken.asset.isWrapped) {
                tokenList.push([reserveToken.aToken, reserveToken.asset.unwrapped]);
            }
            tokenList.push([reserveToken.aToken, reserveToken.asset]);
        }
        return tokenList;
    }
    async quote(params) {
        const { input, tokenOut } = params;
        const output = new common.TokenAmount(tokenOut, input.amount);
        return { input, output };
    }
    async build(fields, options) {
        const { input, output, amountBps } = fields;
        const { account } = options;
        const tokenOut = output.token.wrapped;
        const service = new service_1.Service(this.chainId, this.provider);
        const to = await service.getPoolAddress();
        const data = contracts_1.Pool__factory.createInterface().encodeFunctionData('withdraw', [
            tokenOut.address,
            input.amountWei,
            core.calcAccountAgent(this.chainId, account),
        ]);
        const amountOffset = amountBps ? common.getParamOffset(1) : undefined;
        const inputs = [core.newLogicInput({ input, amountBps, amountOffset })];
        const wrapMode = output.token.isNative ? core.WrapMode.unwrapAfter : core.WrapMode.none;
        return core.newLogic({ to, data, inputs, wrapMode });
    }
};
WithdrawLogic.supportedChainIds = [
    common.ChainId.mainnet,
    common.ChainId.polygon,
    common.ChainId.arbitrum,
    common.ChainId.optimism,
    common.ChainId.avalanche,
];
WithdrawLogic = tslib_1.__decorate([
    core.LogicDefinitionDecorator()
], WithdrawLogic);
exports.WithdrawLogic = WithdrawLogic;
//# sourceMappingURL=logic.withdraw.js.map