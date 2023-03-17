"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowLogic = void 0;
const tslib_1 = require("tslib");
const service_1 = require("./service");
const contracts_1 = require("./contracts");
const common = tslib_1.__importStar(require("@composable-router/common"));
const core = tslib_1.__importStar(require("@composable-router/core"));
const config_1 = require("./config");
const tiny_invariant_1 = tslib_1.__importDefault(require("tiny-invariant"));
let BorrowLogic = class BorrowLogic extends core.Logic {
    async getTokenList() {
        const service = new service_1.Service(this.chainId, this.provider);
        const tokens = await service.getAssets();
        return tokens;
    }
    async getLogic(fields) {
        const { output, interestRateMode } = fields;
        (0, tiny_invariant_1.default)(!output.token.isNative, 'tokenOut should not be native token');
        const to = (0, config_1.getContractAddress)(this.chainId, 'SpenderAaveV2Delegation');
        const data = contracts_1.SpenderAaveV2Delegation__factory.createInterface().encodeFunctionData('borrow', [
            output.token.address,
            output.amountWei,
            interestRateMode,
        ]);
        return core.newLogic({ to, data });
    }
};
BorrowLogic.supportedChainIds = [common.ChainId.mainnet, common.ChainId.polygon, common.ChainId.avalanche];
BorrowLogic = tslib_1.__decorate([
    core.LogicDefinitionDecorator()
], BorrowLogic);
exports.BorrowLogic = BorrowLogic;
//# sourceMappingURL=logic.borrow.js.map