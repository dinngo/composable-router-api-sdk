"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplyCollateralLogic = void 0;
const tslib_1 = require("tslib");
const contracts_1 = require("./contracts");
const service_1 = require("./service");
const common = tslib_1.__importStar(require("@composable-router/common"));
const core = tslib_1.__importStar(require("@composable-router/core"));
const config_1 = require("./config");
let SupplyCollateralLogic = class SupplyCollateralLogic extends core.Logic {
    async getTokenList() {
        const tokenList = {};
        const service = new service_1.Service(this.chainId, this.provider);
        const markets = (0, config_1.getMarkets)(this.chainId);
        for (const market of markets) {
            const collaterals = await service.getCollaterals(market.id);
            tokenList[market.id] = collaterals;
        }
        return tokenList;
    }
    async build(fields, options) {
        const { marketId, input, amountBps } = fields;
        const { account } = options;
        const market = (0, config_1.getMarket)(this.chainId, marketId);
        const tokenIn = input.token.wrapped;
        const to = market.cometAddress;
        const data = contracts_1.Comet__factory.createInterface().encodeFunctionData('supplyTo', [
            account,
            tokenIn.address,
            input.amountWei,
        ]);
        const amountOffset = amountBps ? common.getParamOffset(2) : undefined;
        const inputs = [
            core.newLogicInput({ input: new common.TokenAmount(tokenIn, input.amount), amountBps, amountOffset }),
        ];
        const wrapMode = input.token.isNative ? core.WrapMode.wrapBefore : core.WrapMode.none;
        return core.newLogic({ to, data, inputs, wrapMode });
    }
};
SupplyCollateralLogic.supportedChainIds = [common.ChainId.mainnet, common.ChainId.polygon];
SupplyCollateralLogic = tslib_1.__decorate([
    core.LogicDefinitionDecorator()
], SupplyCollateralLogic);
exports.SupplyCollateralLogic = SupplyCollateralLogic;
//# sourceMappingURL=logic.supply-collateral.js.map