"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlashLoanLogic = void 0;
const tslib_1 = require("tslib");
const contracts_1 = require("./contracts");
const axios_1 = tslib_1.__importDefault(require("axios"));
const axios_retry_1 = tslib_1.__importDefault(require("axios-retry"));
const common = tslib_1.__importStar(require("@composable-router/common"));
const core = tslib_1.__importStar(require("@composable-router/core"));
const config_1 = require("./config");
(0, axios_retry_1.default)(axios_1.default, { retries: 5, retryDelay: axios_retry_1.default.exponentialDelay });
let FlashLoanLogic = class FlashLoanLogic extends core.Logic {
    async getTokenList() {
        const { data } = await axios_1.default.get('https://raw.githubusercontent.com/balancer/tokenlists/main/generated/listed-old.tokenlist.json');
        const tmp = {};
        const tokenList = [];
        for (const token of data.tokens) {
            if (tmp[token.address] || token.chainId !== this.chainId || !token.name || !token.symbol || !token.decimals) {
                continue;
            }
            tokenList.push({
                chainId: token.chainId,
                address: token.address,
                decimals: token.decimals,
                symbol: token.symbol,
                name: token.name,
            });
            tmp[token.address] = true;
        }
        return tokenList;
    }
    async build(fields) {
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
FlashLoanLogic.supportedChainIds = [common.ChainId.mainnet, common.ChainId.polygon, common.ChainId.arbitrum];
FlashLoanLogic = tslib_1.__decorate([
    core.LogicDefinitionDecorator()
], FlashLoanLogic);
exports.FlashLoanLogic = FlashLoanLogic;
//# sourceMappingURL=logic.flash-loan.js.map