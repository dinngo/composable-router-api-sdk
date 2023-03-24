"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplyCollateralLogic = void 0;
const tslib_1 = require("tslib");
const ethers_1 = require("ethers");
const contracts_1 = require("./contracts");
const service_1 = require("./service");
const common = tslib_1.__importStar(require("@composable-router/common"));
const core = tslib_1.__importStar(require("@composable-router/core"));
const utils_1 = require("./utils");
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
    async getLogic(fields, options) {
        const { marketId, input, amountBps } = fields;
        const { account } = options;
        const market = (0, config_1.getMarket)(this.chainId, marketId);
        let to;
        let data;
        let amountOffset;
        if (input.token.isNative) {
            to = market.bulker.address;
            data = new ethers_1.utils.Interface(market.bulker.abi).encodeFunctionData('invoke', [
                [market.bulker.actions.supplyNativeToken],
                [(0, utils_1.encodeSupplyNativeTokenAction)(market.cometAddress, account, input.amountWei)],
            ]);
            if (amountBps)
                amountOffset = ethers_1.constants.MaxUint256;
        }
        else {
            to = market.cometAddress;
            data = contracts_1.Comet__factory.createInterface().encodeFunctionData('supplyTo', [
                account,
                input.token.address,
                input.amountWei,
            ]);
            if (amountBps)
                amountOffset = common.getParamOffset(2);
        }
        const inputs = [core.newLogicInput({ input, amountBps, amountOffset })];
        return core.newLogic({ to, data, inputs });
    }
};
SupplyCollateralLogic.supportedChainIds = [common.ChainId.mainnet, common.ChainId.polygon];
SupplyCollateralLogic = tslib_1.__decorate([
    core.LogicDefinitionDecorator()
], SupplyCollateralLogic);
exports.SupplyCollateralLogic = SupplyCollateralLogic;
//# sourceMappingURL=logic.supply-collateral.js.map