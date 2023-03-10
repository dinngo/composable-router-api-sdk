"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermitTokenLogic = void 0;
const tslib_1 = require("tslib");
const permit2_sdk_1 = require("@uniswap/permit2-sdk");
const constants_1 = require("./constants");
const contracts_1 = require("./contracts");
const common = tslib_1.__importStar(require("@composable-router/common"));
const core = tslib_1.__importStar(require("@composable-router/core"));
const config_1 = require("./config");
const utils_1 = require("./utils");
let PermitTokenLogic = class PermitTokenLogic extends core.Logic {
    async getPermitDetails(account, erc20Funds, spender) {
        const details = [];
        if (!erc20Funds.isEmpty()) {
            const iface = contracts_1.Permit2__factory.createInterface();
            const calls = erc20Funds.map((fund) => ({
                target: (0, config_1.getContractAddress)(this.chainId, 'Permit2'),
                callData: iface.encodeFunctionData('allowance', [account, fund.token.address, spender]),
            }));
            const { returnData } = await this.multicall2.callStatic.aggregate(calls);
            erc20Funds.forEach((fund, i) => {
                const [amount, expiration, nonce] = iface.decodeFunctionResult('allowance', returnData[i]);
                if (amount.lt(fund.amountWei) || expiration <= (0, utils_1.getDeadline)(constants_1.PERMIT_SIG_DEADLINE)) {
                    details.push({
                        token: fund.token.address,
                        amount: permit2_sdk_1.MaxUint160,
                        expiration: (0, utils_1.getDeadline)(constants_1.PERMIT_EXPIRATION),
                        nonce,
                    });
                }
            });
        }
        return details;
    }
    getPermit(details, spender) {
        return { details, spender, sigDeadline: (0, utils_1.getDeadline)(constants_1.PERMIT_SIG_DEADLINE) };
    }
    getPermitData(permit) {
        return permit2_sdk_1.AllowanceTransfer.getPermitData(permit, (0, config_1.getContractAddress)(this.chainId, 'Permit2'), this.chainId);
    }
    async getLogic(fields, options) {
        const { permit, sig } = fields;
        const { account } = options;
        const to = (0, config_1.getContractAddress)(this.chainId, 'Permit2');
        const data = contracts_1.Permit2__factory.createInterface().encodeFunctionData('permit(address,((address,uint160,uint48,uint48)[],address,uint256),bytes)', [account, permit, sig]);
        return core.newLogic({ to, data });
    }
};
PermitTokenLogic.supportedChainIds = [
    common.ChainId.mainnet,
    common.ChainId.polygon,
    common.ChainId.arbitrum,
    common.ChainId.optimism,
    common.ChainId.avalanche,
];
PermitTokenLogic = tslib_1.__decorate([
    core.LogicDefinitionDecorator()
], PermitTokenLogic);
exports.PermitTokenLogic = PermitTokenLogic;
//# sourceMappingURL=logic.permit-token.js.map