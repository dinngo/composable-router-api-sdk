"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithdrawBaseLogic = void 0;
const tslib_1 = require("tslib");
const contracts_1 = require("./contracts");
const service_1 = require("./service");
const common = tslib_1.__importStar(require("@composable-router/common"));
const ethers_1 = require("ethers");
const core = tslib_1.__importStar(require("@composable-router/core"));
const config_1 = require("./config");
let WithdrawBaseLogic = class WithdrawBaseLogic extends core.Logic {
    async getTokenList() {
        const tokenList = {};
        const markets = (0, config_1.getMarkets)(this.chainId);
        const service = new service_1.Service(this.chainId, this.provider);
        for (const market of markets) {
            const { cToken, baseToken } = await service.getCometTokens(market.id);
            tokenList[market.id] = [];
            if (baseToken.isWrapped) {
                tokenList[market.id].push([cToken, baseToken.unwrapped]);
            }
            tokenList[market.id].push([cToken, baseToken]);
        }
        return tokenList;
    }
    async quote(params) {
        const { marketId, input, tokenOut } = params;
        const output = new common.TokenAmount(tokenOut, input.amount);
        return { marketId, input, output };
    }
    async build(fields) {
        const { marketId, input, output, amountBps } = fields;
        const market = (0, config_1.getMarket)(this.chainId, marketId);
        const tokenOut = output.token.wrapped;
        const amountWei = amountBps ? input.amountWei : ethers_1.constants.MaxUint256;
        const to = market.cometAddress;
        const data = contracts_1.Comet__factory.createInterface().encodeFunctionData('withdraw', [tokenOut.address, amountWei]);
        const amountOffset = amountBps ? common.getParamOffset(1) : undefined;
        const inputs = [core.newLogicInput({ input, amountBps, amountOffset })];
        const wrapMode = output.token.isNative ? core.WrapMode.unwrapAfter : core.WrapMode.none;
        return core.newLogic({ to, data, inputs, wrapMode });
    }
};
WithdrawBaseLogic.supportedChainIds = [common.ChainId.mainnet, common.ChainId.polygon];
WithdrawBaseLogic = tslib_1.__decorate([
    core.LogicDefinitionDecorator()
], WithdrawBaseLogic);
exports.WithdrawBaseLogic = WithdrawBaseLogic;
//# sourceMappingURL=logic.withdraw-base.js.map