"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendTokenLogic = void 0;
const tslib_1 = require("tslib");
const ethers_1 = require("ethers");
const axios_1 = tslib_1.__importDefault(require("axios"));
const axios_retry_1 = tslib_1.__importDefault(require("axios-retry"));
const common = tslib_1.__importStar(require("@composable-router/common"));
const core = tslib_1.__importStar(require("@composable-router/core"));
(0, axios_retry_1.default)(axios_1.default, { retries: 5, retryDelay: axios_retry_1.default.exponentialDelay });
let SendTokenLogic = class SendTokenLogic extends core.Logic {
    async getTokenList() {
        const { data } = await axios_1.default.get(`https://api.1inch.io/v5.0/${this.chainId}/tokens`);
        const tokens = Object.keys(data.tokens).map((key) => {
            const token = data.tokens[key];
            const address = ethers_1.utils.getAddress(token.address);
            if (address === common.ELASTIC_ADDRESS)
                return this.nativeToken;
            return address === common.ELASTIC_ADDRESS
                ? this.nativeToken
                : new common.Token(this.chainId, address, token.decimals, token.symbol, token.name);
        });
        return tokens;
    }
    async build(fields) {
        const { input, recipient, amountBps } = fields;
        let to;
        let data;
        let amountOffset;
        if (input.token.isNative) {
            to = recipient;
            data = '0x';
            if (amountBps)
                amountOffset = ethers_1.constants.MaxUint256;
        }
        else {
            to = input.token.address;
            data = common.ERC20__factory.createInterface().encodeFunctionData('transfer', [recipient, input.amountWei]);
            if (amountBps)
                amountOffset = common.getParamOffset(1);
        }
        const inputs = [core.newLogicInput({ input, amountBps, amountOffset })];
        return core.newLogic({ to, data, inputs });
    }
};
SendTokenLogic.supportedChainIds = [
    common.ChainId.mainnet,
    common.ChainId.polygon,
    common.ChainId.arbitrum,
    common.ChainId.optimism,
    common.ChainId.avalanche,
    common.ChainId.fantom,
];
SendTokenLogic = tslib_1.__decorate([
    core.LogicDefinitionDecorator()
], SendTokenLogic);
exports.SendTokenLogic = SendTokenLogic;
//# sourceMappingURL=logic.send-token.js.map