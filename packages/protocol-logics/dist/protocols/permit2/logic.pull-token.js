"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PullTokenLogic = void 0;
const tslib_1 = require("tslib");
const contracts_1 = require("./contracts");
const common = tslib_1.__importStar(require("@composable-router/common"));
const core = tslib_1.__importStar(require("@composable-router/core"));
const config_1 = require("./config");
let PullTokenLogic = class PullTokenLogic extends core.Logic {
    async getLogic(fields, options) {
        const { inputs } = fields;
        const { account } = options;
        const userAgent = core.calcAccountAgent(this.chainId, account);
        const to = (0, config_1.getContractAddress)(this.chainId, 'Permit2');
        const iface = contracts_1.Permit2__factory.createInterface();
        let data;
        if (inputs.length === 1) {
            const input = inputs.at(0);
            data = iface.encodeFunctionData('transferFrom(address,address,uint160,address)', [
                account,
                userAgent,
                input.amountWei,
                input.token.address,
            ]);
        }
        else {
            const details = inputs.map((input) => ({
                from: account,
                to: userAgent,
                amount: input.amountWei,
                token: input.token.address,
            }));
            data = iface.encodeFunctionData('transferFrom((address,address,uint160,address)[])', [details]);
        }
        return core.newLogic({ to, data });
    }
};
PullTokenLogic.supportedChainIds = [
    common.ChainId.mainnet,
    common.ChainId.polygon,
    common.ChainId.arbitrum,
    common.ChainId.optimism,
    common.ChainId.avalanche,
];
PullTokenLogic = tslib_1.__decorate([
    core.LogicDefinitionDecorator()
], PullTokenLogic);
exports.PullTokenLogic = PullTokenLogic;
//# sourceMappingURL=logic.pull-token.js.map