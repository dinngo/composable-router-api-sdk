"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplyBaseLogic = void 0;
const tslib_1 = require("tslib");
const contracts_1 = require("./contracts");
const service_1 = require("./service");
const common = tslib_1.__importStar(require("@composable-router/common"));
const core = tslib_1.__importStar(require("@composable-router/core"));
const config_1 = require("./config");
let SupplyBaseLogic = class SupplyBaseLogic extends core.Logic {
    async getTokenList() {
        const tokenList = {};
        const markets = (0, config_1.getMarkets)(this.chainId);
        const service = new service_1.Service(this.chainId, this.provider);
        for (const market of markets) {
            const { cToken, baseToken } = await service.getCometTokens(market.id);
            tokenList[market.id] = [];
            if (baseToken.isWrapped) {
                tokenList[market.id].push([baseToken.unwrapped, cToken]);
            }
            tokenList[market.id].push([baseToken, cToken]);
        }
        return tokenList;
    }
    async quote(params) {
        const { marketId, input, tokenOut } = params;
        const output = new common.TokenAmount(tokenOut, input.amount);
        return { marketId, input, output };
    }
    async getLogic(fields) {
        const { marketId, input, amountBps } = fields;
        const market = (0, config_1.getMarket)(this.chainId, marketId);
        const tokenIn = input.token.wrapped;
        const to = market.cometAddress;
        const data = contracts_1.Comet__factory.createInterface().encodeFunctionData('supply', [tokenIn.address, input.amountWei]);
        const amountOffset = amountBps ? common.getParamOffset(1) : undefined;
        const inputs = [
            core.newLogicInput({ input: new common.TokenAmount(tokenIn, input.amount), amountBps, amountOffset }),
        ];
        const wrapMode = input.token.isNative ? core.WrapMode.wrapBefore : core.WrapMode.none;
        return core.newLogic({ to, data, inputs, wrapMode });
    }
};
SupplyBaseLogic.supportedChainIds = [common.ChainId.mainnet, common.ChainId.polygon];
SupplyBaseLogic = tslib_1.__decorate([
    core.LogicDefinitionDecorator()
], SupplyBaseLogic);
exports.SupplyBaseLogic = SupplyBaseLogic;
//# sourceMappingURL=logic.supply-base.js.map