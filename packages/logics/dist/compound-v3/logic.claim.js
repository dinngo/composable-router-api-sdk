"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClaimLogic = void 0;
const tslib_1 = require("tslib");
const tokens_1 = require("./tokens");
const contracts_1 = require("./contracts");
const service_1 = require("./service");
const common = tslib_1.__importStar(require("@composable-router/common"));
const core = tslib_1.__importStar(require("@composable-router/core"));
const config_1 = require("./config");
let ClaimLogic = class ClaimLogic extends core.Logic {
    async getTokenList() {
        return [(0, tokens_1.COMP)(this.chainId)];
    }
    async quote(params) {
        const { marketId, owner } = params;
        const service = new service_1.Service(this.chainId, this.provider);
        const output = await service.getRewardOwed(marketId, owner);
        return { marketId, owner, output };
    }
    async build(fields, options) {
        const { marketId, owner } = fields;
        const { account } = options;
        const market = (0, config_1.getMarket)(this.chainId, marketId);
        const to = (0, config_1.getContractAddress)(this.chainId, 'CometRewards');
        let data;
        if (owner === account) {
            const userAgent = core.calcAccountAgent(this.chainId, account);
            data = contracts_1.CometRewards__factory.createInterface().encodeFunctionData('claimTo', [
                market.cometAddress,
                owner,
                userAgent,
                true,
            ]);
        }
        else {
            data = contracts_1.CometRewards__factory.createInterface().encodeFunctionData('claim', [market.cometAddress, owner, true]);
        }
        return core.newLogic({ to, data });
    }
};
ClaimLogic.supportedChainIds = [common.ChainId.mainnet, common.ChainId.polygon];
ClaimLogic = tslib_1.__decorate([
    core.LogicDefinitionDecorator()
], ClaimLogic);
exports.ClaimLogic = ClaimLogic;
//# sourceMappingURL=logic.claim.js.map