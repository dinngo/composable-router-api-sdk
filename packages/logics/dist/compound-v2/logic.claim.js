"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClaimLogic = void 0;
const tslib_1 = require("tslib");
const tokens_1 = require("./tokens");
const contracts_1 = require("./contracts");
const common = tslib_1.__importStar(require("@composable-router/common"));
const core = tslib_1.__importStar(require("@composable-router/core"));
const config_1 = require("./config");
let ClaimLogic = class ClaimLogic extends core.Logic {
    getTokenList() {
        return [tokens_1.COMP];
    }
    async quote(params) {
        const metadata = await contracts_1.CompoundLens__factory.connect((0, config_1.getContractAddress)('CompoundLens'), this.provider).callStatic.getCompBalanceMetadataExt(tokens_1.COMP.address, (0, config_1.getContractAddress)('Comptroller'), params.owner);
        const output = new common.TokenAmount(tokens_1.COMP).setWei(metadata.allocated);
        return { output };
    }
    async build(fields) {
        const { owner } = fields;
        const to = (0, config_1.getContractAddress)('Comptroller');
        const data = contracts_1.Comptroller__factory.createInterface().encodeFunctionData('claimComp(address)', [owner]);
        return core.newLogic({ to, data });
    }
};
ClaimLogic.supportedChainIds = [common.ChainId.mainnet];
ClaimLogic = tslib_1.__decorate([
    core.LogicDefinitionDecorator()
], ClaimLogic);
exports.ClaimLogic = ClaimLogic;
//# sourceMappingURL=logic.claim.js.map