"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithdrawBaseLogic = void 0;
const tslib_1 = require("tslib");
const ethers_1 = require("ethers");
const contracts_1 = require("./contracts");
const service_1 = require("./service");
const common = tslib_1.__importStar(require("@composable-router/common"));
const core = tslib_1.__importStar(require("@composable-router/core"));
const utils_1 = require("./utils");
const config_1 = require("./config");
let WithdrawBaseLogic = class WithdrawBaseLogic extends core.Logic {
    async getTokenList() {
        const tokenList = {};
        const markets = (0, config_1.getMarkets)(this.chainId);
        const service = new service_1.Service(this.chainId, this.provider);
        for (const market of markets) {
            const { cToken, baseToken } = await service.getCometTokens(market.id);
            tokenList[market.id] = [cToken, baseToken.unwrapped];
        }
        return tokenList;
    }
    async quote(params) {
        const { marketId, input, tokenOut } = params;
        const output = new common.TokenAmount(tokenOut, input.amount);
        return { marketId, input, output };
    }
    async getLogic(fields, options) {
        const { marketId, input, output, amountBps } = fields;
        const market = (0, config_1.getMarket)(this.chainId, marketId);
        const amountWei = amountBps ? input.amountWei : ethers_1.constants.MaxUint256;
        let to;
        let data;
        let amountOffset;
        if (output.token.isNative) {
            const userAgent = core.calcAccountAgent(this.chainId, options.account);
            to = market.bulker.address;
            data = new ethers_1.utils.Interface(market.bulker.abi).encodeFunctionData('invoke', [
                [market.bulker.actions.withdrawNativeToken],
                [(0, utils_1.encodeWithdrawNativeTokenAction)(market.cometAddress, userAgent, amountWei)],
            ]);
            if (amountBps)
                amountOffset = common.getParamOffset(9);
        }
        else {
            to = market.cometAddress;
            data = contracts_1.Comet__factory.createInterface().encodeFunctionData('withdraw', [output.token.address, amountWei]);
            if (amountBps)
                amountOffset = common.getParamOffset(1);
        }
        const inputs = [core.newLogicInput({ input, amountBps, amountOffset })];
        return core.newLogic({ to, data, inputs });
    }
};
WithdrawBaseLogic.supportedChainIds = [common.ChainId.mainnet, common.ChainId.polygon];
WithdrawBaseLogic = tslib_1.__decorate([
    core.LogicDefinitionDecorator()
], WithdrawBaseLogic);
exports.WithdrawBaseLogic = WithdrawBaseLogic;
//# sourceMappingURL=logic.withdraw-base.js.map