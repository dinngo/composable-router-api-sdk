"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithdrawCollateralLogic = void 0;
const tslib_1 = require("tslib");
const contracts_1 = require("./contracts");
const service_1 = require("./service");
const common = tslib_1.__importStar(require("@composable-router/common"));
const core = tslib_1.__importStar(require("@composable-router/core"));
const config_1 = require("./config");
let WithdrawCollateralLogic = class WithdrawCollateralLogic extends core.Logic {
    async getTokenList() {
        const tokenList = {};
        const service = new service_1.Service(this.chainId, this.provider);
        const markets = (0, config_1.getMarkets)(this.chainId);
        for (const market of markets) {
            const collaterals = await service.getCollaterals(market.id);
            tokenList[market.id] = collaterals.map((collateral) => collateral.wrapped);
        }
        return tokenList;
    }
    async getLogic(fields, options) {
        const { marketId, output } = fields;
        const { account } = options;
        const market = (0, config_1.getMarket)(this.chainId, marketId);
        const userAgent = core.calcAccountAgent(this.chainId, account);
        const tokenOut = output.token.wrapped;
        const to = market.cometAddress;
        const data = contracts_1.Comet__factory.createInterface().encodeFunctionData('withdrawFrom', [
            account,
            userAgent,
            tokenOut.address,
            output.amountWei,
        ]);
        const wrapMode = output.token.isNative ? core.WrapMode.unwrapAfter : core.WrapMode.none;
        return core.newLogic({ to, data, wrapMode });
    }
};
WithdrawCollateralLogic.supportedChainIds = [common.ChainId.mainnet, common.ChainId.polygon];
WithdrawCollateralLogic = tslib_1.__decorate([
    core.LogicDefinitionDecorator()
], WithdrawCollateralLogic);
exports.WithdrawCollateralLogic = WithdrawCollateralLogic;
//# sourceMappingURL=logic.withdraw-collateral.js.map