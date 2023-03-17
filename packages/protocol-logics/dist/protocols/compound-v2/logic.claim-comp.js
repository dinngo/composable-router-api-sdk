"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClaimCOMPLogic = void 0;
const tslib_1 = require("tslib");
const tokens_1 = require("./tokens");
const contracts_1 = require("./contracts");
const common = tslib_1.__importStar(require("@composable-router/common"));
const core = tslib_1.__importStar(require("@composable-router/core"));
const config_1 = require("./config");
let ClaimCOMPLogic = class ClaimCOMPLogic extends core.Logic {
    getTokenList() {
        return [tokens_1.COMP];
    }
    async getReward(owner) {
        const compoundLens = contracts_1.CompoundLens__factory.connect((0, config_1.getContractAddress)('CompoundLens'), this.provider);
        const metadata = await compoundLens.callStatic.getCompBalanceMetadataExt(tokens_1.COMP.address, (0, config_1.getContractAddress)('Comptroller'), owner);
        const output = new common.TokenAmount(tokens_1.COMP).setWei(metadata.allocated);
        return output;
    }
    async getLogic(fields) {
        const { owner } = fields;
        const to = (0, config_1.getContractAddress)('Comptroller');
        const data = contracts_1.Comptroller__factory.createInterface().encodeFunctionData('claimComp(address)', [owner]);
        return core.newLogic({ to, data });
    }
};
ClaimCOMPLogic.supportedChainIds = [common.ChainId.mainnet];
ClaimCOMPLogic = tslib_1.__decorate([
    core.LogicDefinitionDecorator()
], ClaimCOMPLogic);
exports.ClaimCOMPLogic = ClaimCOMPLogic;
//# sourceMappingURL=logic.claim-comp.js.map