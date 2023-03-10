"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlashLoanLogic = void 0;
const tslib_1 = require("tslib");
const contracts_1 = require("./contracts");
const common = tslib_1.__importStar(require("@composable-router/common"));
const core = tslib_1.__importStar(require("@composable-router/core"));
const config_1 = require("./config");
let FlashLoanLogic = class FlashLoanLogic extends core.Logic {
    async getLogic(fields) {
        const { outputs, params } = fields;
        const to = (0, config_1.getContractAddress)(this.chainId, 'Vault');
        const assets = [];
        const amounts = [];
        for (const output of common.sortByAddress(outputs.toArray())) {
            assets.push(output.token.address);
            amounts.push(output.amountWei);
        }
        const data = contracts_1.Vault__factory.createInterface().encodeFunctionData('flashLoan', [
            (0, config_1.getContractAddress)(this.chainId, 'FlashLoanCallbackBalancerV2'),
            assets,
            amounts,
            params,
        ]);
        const callback = (0, config_1.getContractAddress)(this.chainId, 'FlashLoanCallbackBalancerV2');
        return core.newLogic({ to, data, callback });
    }
};
FlashLoanLogic.supportedChainIds = [common.ChainId.mainnet];
FlashLoanLogic = tslib_1.__decorate([
    core.LogicDefinitionDecorator()
], FlashLoanLogic);
exports.FlashLoanLogic = FlashLoanLogic;
//# sourceMappingURL=logic.flash-loan.js.map