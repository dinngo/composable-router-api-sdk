"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepayLogic = void 0;
const tslib_1 = require("tslib");
const contracts_1 = require("./contracts");
const service_1 = require("./service");
const common = tslib_1.__importStar(require("@composable-router/common"));
const ethers_1 = require("ethers");
const core = tslib_1.__importStar(require("@composable-router/core"));
const config_1 = require("./config");
let RepayLogic = class RepayLogic extends core.Logic {
    async getTokenList() {
        const tokenList = {};
        const markets = (0, config_1.getMarkets)(this.chainId);
        const service = new service_1.Service(this.chainId, this.provider);
        for (const market of markets) {
            const baseToken = await service.getBaseToken(market.id);
            tokenList[market.id] = [];
            if (baseToken.isWrapped) {
                tokenList[market.id].push(baseToken.unwrapped);
            }
            tokenList[market.id].push(baseToken);
        }
        return tokenList;
    }
    async quote(params) {
        const { marketId, borrower, tokenIn } = params;
        const service = new service_1.Service(this.chainId, this.provider);
        const borrowBalance = await service.getBorrowBalance(marketId, borrower, tokenIn);
        borrowBalance.setWei(common.calcSlippage(borrowBalance.amountWei, -100)); // slightly higher than borrowed amount
        return { marketId, borrower, input: borrowBalance };
    }
    async build(fields) {
        const { marketId, borrower, input, amountBps } = fields;
        const market = (0, config_1.getMarket)(this.chainId, marketId);
        const tokenIn = input.token.wrapped;
        const quotation = await this.quote({ marketId, borrower, tokenIn: input.token });
        const repayAll = amountBps === common.BPS_BASE || input.amountWei.gte(quotation.input.amountWei);
        const to = market.cometAddress;
        const data = contracts_1.Comet__factory.createInterface().encodeFunctionData('supplyTo', [
            borrower,
            tokenIn.address,
            repayAll ? ethers_1.constants.MaxUint256 : input.amountWei,
        ]);
        const options = { input: new common.TokenAmount(tokenIn, input.amount) };
        if (amountBps && !repayAll) {
            options.amountBps = amountBps;
            options.amountOffset = common.getParamOffset(2);
        }
        const inputs = [core.newLogicInput(options)];
        const wrapMode = input.token.isNative ? core.WrapMode.wrapBefore : core.WrapMode.none;
        return core.newLogic({ to, data, inputs, wrapMode });
    }
};
RepayLogic.supportedChainIds = [common.ChainId.mainnet, common.ChainId.polygon];
RepayLogic = tslib_1.__decorate([
    core.LogicDefinitionDecorator()
], RepayLogic);
exports.RepayLogic = RepayLogic;
//# sourceMappingURL=logic.repay.js.map