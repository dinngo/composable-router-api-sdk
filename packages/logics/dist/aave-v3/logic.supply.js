"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplyLogic = void 0;
const tslib_1 = require("tslib");
const contracts_1 = require("./contracts");
const service_1 = require("./service");
const common = tslib_1.__importStar(require("@composable-router/common"));
const core = tslib_1.__importStar(require("@composable-router/core"));
let SupplyLogic = class SupplyLogic extends core.Logic {
    async getTokenList() {
        const service = new service_1.Service(this.chainId, this.provider);
        const reserveTokens = await service.getReserveTokens();
        const tokenList = [];
        for (const reserveToken of reserveTokens) {
            if (reserveToken.asset.isWrapped) {
                tokenList.push([reserveToken.asset.unwrapped, reserveToken.aToken]);
            }
            tokenList.push([reserveToken.asset, reserveToken.aToken]);
        }
        return tokenList;
    }
    async quote(params) {
        const { input, tokenOut } = params;
        const output = new common.TokenAmount(tokenOut, input.amount);
        return { input, output };
    }
    async build(fields, options) {
        const { input, amountBps, referralCode = 0 } = fields;
        const { account } = options;
        const tokenIn = input.token.wrapped;
        const service = new service_1.Service(this.chainId, this.provider);
        const to = await service.getPoolAddress();
        const data = contracts_1.Pool__factory.createInterface().encodeFunctionData('supply', [
            tokenIn.address,
            input.amountWei,
            core.calcAccountAgent(this.chainId, account),
            referralCode,
        ]);
        const amountOffset = amountBps ? common.getParamOffset(1) : undefined;
        const inputs = [
            core.newLogicInput({ input: new common.TokenAmount(tokenIn, input.amount), amountBps, amountOffset }),
        ];
        const wrapMode = input.token.isNative ? core.WrapMode.wrapBefore : core.WrapMode.none;
        return core.newLogic({ to, data, inputs, wrapMode });
    }
};
SupplyLogic.supportedChainIds = [
    common.ChainId.mainnet,
    common.ChainId.polygon,
    common.ChainId.arbitrum,
    common.ChainId.optimism,
    common.ChainId.avalanche,
];
SupplyLogic = tslib_1.__decorate([
    core.LogicDefinitionDecorator()
], SupplyLogic);
exports.SupplyLogic = SupplyLogic;
//# sourceMappingURL=logic.supply.js.map