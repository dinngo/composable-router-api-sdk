"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowLogic = void 0;
const tslib_1 = require("tslib");
const contracts_1 = require("./contracts");
const service_1 = require("./service");
const common = tslib_1.__importStar(require("@composable-router/common"));
const core = tslib_1.__importStar(require("@composable-router/core"));
const config_1 = require("./config");
let BorrowLogic = class BorrowLogic extends core.Logic {
    async getTokenList() {
        const tokenList = {};
        const markets = (0, config_1.getMarkets)(this.chainId);
        const service = new service_1.Service(this.chainId, this.provider);
        for (const market of markets) {
            const baseToken = await service.getBaseToken(market.id);
            tokenList[market.id] = baseToken;
        }
        return tokenList;
    }
    async getLogic(fields, options) {
        const { marketId, output } = fields;
        const { account } = options;
        const market = (0, config_1.getMarket)(this.chainId, marketId);
        const userAgent = core.calcAccountAgent(this.chainId, account);
        const to = market.cometAddress;
        const data = contracts_1.Comet__factory.createInterface().encodeFunctionData('withdrawFrom', [
            account,
            userAgent,
            output.token.address,
            output.amountWei,
        ]);
        return core.newLogic({ to, data });
    }
};
BorrowLogic.supportedChainIds = [common.ChainId.mainnet, common.ChainId.polygon];
BorrowLogic = tslib_1.__decorate([
    core.LogicDefinitionDecorator()
], BorrowLogic);
exports.BorrowLogic = BorrowLogic;
//# sourceMappingURL=logic.borrow.js.map