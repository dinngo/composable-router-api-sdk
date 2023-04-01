"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwapTokenLogic = void 0;
const tslib_1 = require("tslib");
const sdk_1 = require("@paraswap/sdk");
const axios_1 = tslib_1.__importDefault(require("axios"));
const axios_retry_1 = tslib_1.__importDefault(require("axios-retry"));
const common = tslib_1.__importStar(require("@composable-router/common"));
const core = tslib_1.__importStar(require("@composable-router/core"));
const config_1 = require("./config");
(0, axios_retry_1.default)(axios_1.default, { retries: 5, retryDelay: axios_retry_1.default.exponentialDelay });
let SwapTokenLogic = class SwapTokenLogic extends core.Logic {
    get sdk() {
        return (0, sdk_1.constructSimpleSDK)({ chainId: this.chainId, axios: axios_1.default });
    }
    async quote(params) {
        const { input, tokenOut } = params;
        const { destAmount } = await this.sdk.swap.getRate({
            srcToken: input.token.elasticAddress,
            srcDecimals: input.token.decimals,
            amount: input.amountWei.toString(),
            destToken: tokenOut.elasticAddress,
            destDecimals: tokenOut.decimals,
        });
        const output = new common.TokenAmount(tokenOut).setWei(destAmount);
        return { input, output };
    }
    async build(fields, options) {
        const { input, output, partner, partnerAddress } = fields;
        const { account, slippage } = options;
        const priceRoute = await this.sdk.swap.getRate({
            srcToken: input.token.elasticAddress,
            amount: input.amountWei.toString(),
            destToken: output.token.elasticAddress,
        });
        const { srcToken, srcDecimals, srcAmount, destToken, destDecimals, destAmount } = priceRoute;
        output.setWei(destAmount);
        const { to, data } = await this.sdk.swap.buildTx({
            srcToken,
            srcDecimals,
            destToken,
            destDecimals,
            srcAmount,
            userAddress: account,
            partner,
            partnerAddress,
            slippage,
            deadline: (Math.floor(Date.now() / 1000) + 1200).toString(),
            priceRoute,
        }, { ignoreChecks: true, ignoreGasEstimate: true });
        const inputs = [core.newLogicInput({ input })];
        const approveTo = (0, config_1.getContractAddress)(this.chainId, 'TokenTransferProxy');
        return core.newLogic({ to, data, inputs, approveTo });
    }
};
SwapTokenLogic.supportedChainIds = [
    common.ChainId.mainnet,
    common.ChainId.polygon,
    common.ChainId.arbitrum,
    common.ChainId.optimism,
    common.ChainId.avalanche,
];
SwapTokenLogic = tslib_1.__decorate([
    core.LogicDefinitionDecorator()
], SwapTokenLogic);
exports.SwapTokenLogic = SwapTokenLogic;
//# sourceMappingURL=logic.swap-token.js.map