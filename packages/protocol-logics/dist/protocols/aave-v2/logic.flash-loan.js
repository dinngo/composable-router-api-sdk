"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlashLoanLogic = void 0;
const tslib_1 = require("tslib");
const ethers_1 = require("ethers");
const types_1 = require("./types");
const contracts_1 = require("./contracts");
const service_1 = require("./service");
const common = tslib_1.__importStar(require("@composable-router/common"));
const core = tslib_1.__importStar(require("@composable-router/core"));
const config_1 = require("./config");
let FlashLoanLogic = class FlashLoanLogic extends core.Logic {
    async getSupportedTokens() {
        const service = new service_1.Service(this.chainId, this.provider);
        const tokens = await service.getAssets();
        return tokens;
    }
    async getLogic(fields) {
        const { outputs, params, referralCode = 0 } = fields;
        const service = new service_1.Service(this.chainId, this.provider);
        const to = await service.getLendingPoolAddress();
        const assets = [];
        const amounts = [];
        const modes = [];
        outputs.forEach((output) => {
            assets.push(output.token.address);
            amounts.push(output.amountWei);
            modes.push(types_1.InterestRateMode.none);
        });
        const data = contracts_1.LendingPool__factory.createInterface().encodeFunctionData('flashLoan', [
            (0, config_1.getContractAddress)(this.chainId, 'FlashLoanCallbackAaveV2'),
            assets,
            amounts,
            modes,
            ethers_1.constants.AddressZero,
            params,
            referralCode,
        ]);
        const callback = (0, config_1.getContractAddress)(this.chainId, 'FlashLoanCallbackAaveV2');
        return core.newLogic({ to, data, callback });
    }
};
FlashLoanLogic.supportedChainIds = [common.ChainId.mainnet, common.ChainId.polygon, common.ChainId.avalanche];
FlashLoanLogic = tslib_1.__decorate([
    core.LogicDefinitionDecorator()
], FlashLoanLogic);
exports.FlashLoanLogic = FlashLoanLogic;
//# sourceMappingURL=logic.flash-loan.js.map