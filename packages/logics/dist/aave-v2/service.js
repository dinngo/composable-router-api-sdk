"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
const tslib_1 = require("tslib");
const contracts_1 = require("./contracts");
const types_1 = require("./types");
const common = tslib_1.__importStar(require("@composable-router/common"));
const ethers_1 = require("ethers");
const config_1 = require("./config");
class Service extends common.Web3Toolkit {
    get protocolDataProvider() {
        return contracts_1.ProtocolDataProvider__factory.connect((0, config_1.getContractAddress)(this.chainId, 'ProtocolDataProvider'), this.provider);
    }
    async getLendingPoolAddress() {
        if (!this.lendingPoolAddress) {
            const addressProviderAddress = await this.protocolDataProvider.ADDRESSES_PROVIDER();
            this.lendingPoolAddress = await contracts_1.LendingPoolAddressesProvider__factory.connect(addressProviderAddress, this.provider).getLendingPool();
        }
        return this.lendingPoolAddress;
    }
    async getAssetAddresses() {
        if (!this.assetAddresses) {
            const lendingPoolAddress = await this.getLendingPoolAddress();
            const assetAddresses = await contracts_1.LendingPool__factory.connect(lendingPoolAddress, this.provider).getReservesList();
            const iface = contracts_1.ProtocolDataProvider__factory.createInterface();
            const calls = assetAddresses.map((assetAddress) => ({
                target: (0, config_1.getContractAddress)(this.chainId, 'ProtocolDataProvider'),
                callData: iface.encodeFunctionData('getReserveConfigurationData', [assetAddress]),
            }));
            const { returnData } = await this.multicall2.callStatic.aggregate(calls);
            this.assetAddresses = [];
            for (let i = 0; i < assetAddresses.length; i++) {
                const assetAddress = assetAddresses[i];
                const { isActive, isFrozen } = iface.decodeFunctionResult('getReserveConfigurationData', returnData[i]);
                if (isActive && !isFrozen)
                    this.assetAddresses.push(assetAddress);
            }
        }
        return this.assetAddresses;
    }
    async getReserveTokensAddresses() {
        if (!this.reserveTokensAddresses) {
            const assetAddresses = await this.getAssetAddresses();
            const iface = contracts_1.ProtocolDataProvider__factory.createInterface();
            const calls = assetAddresses.map((asset) => ({
                target: (0, config_1.getContractAddress)(this.chainId, 'ProtocolDataProvider'),
                callData: iface.encodeFunctionData('getReserveTokensAddresses', [asset]),
            }));
            const { returnData } = await this.multicall2.callStatic.aggregate(calls);
            this.reserveTokensAddresses = [];
            for (let i = 0; i < assetAddresses.length; i++) {
                const assetAddress = assetAddresses[i];
                const { aTokenAddress, stableDebtTokenAddress, variableDebtTokenAddress } = iface.decodeFunctionResult('getReserveTokensAddresses', returnData[i]);
                this.reserveTokensAddresses.push({
                    assetAddress,
                    aTokenAddress,
                    stableDebtTokenAddress,
                    variableDebtTokenAddress,
                });
            }
        }
        return this.reserveTokensAddresses;
    }
    async getAssets() {
        if (!this.assets) {
            const assetAddresses = await this.getAssetAddresses();
            this.assets = await this.getTokens(assetAddresses);
        }
        return this.assets;
    }
    async getATokens() {
        if (!this.aTokens) {
            const reserveTokensAddresses = await this.getReserveTokensAddresses();
            const aTokenAddresses = reserveTokensAddresses.map((reserveTokensAddress) => reserveTokensAddress.aTokenAddress);
            this.aTokens = await this.getTokens(aTokenAddresses);
        }
        return this.aTokens;
    }
    async getReserveTokens() {
        if (!this.reserveTokens) {
            const reserveTokensAddresses = await this.getReserveTokensAddresses();
            const tokenAddresses = reserveTokensAddresses.reduce((accumulator, reserveTokensAddress) => {
                accumulator.push(reserveTokensAddress.assetAddress);
                accumulator.push(reserveTokensAddress.aTokenAddress);
                accumulator.push(reserveTokensAddress.stableDebtTokenAddress);
                accumulator.push(reserveTokensAddress.variableDebtTokenAddress);
                return accumulator;
            }, []);
            const tokens = await this.getTokens(tokenAddresses);
            this.reserveTokens = [];
            let j = 0;
            for (let i = 0; i < reserveTokensAddresses.length; i++) {
                const asset = tokens[j];
                j++;
                const aToken = tokens[j];
                j++;
                const stableDebtToken = tokens[j];
                j++;
                const variableDebtToken = tokens[j];
                j++;
                this.reserveTokens.push({ asset, aToken, stableDebtToken, variableDebtToken });
            }
        }
        return this.reserveTokens;
    }
    async toAToken(asset) {
        const { aTokenAddress } = await this.protocolDataProvider.getReserveTokensAddresses(asset.wrapped.address);
        return this.getToken(aTokenAddress);
    }
    async toAsset(aToken) {
        const assetAddress = await contracts_1.AToken__factory.connect(aToken.address, this.provider).UNDERLYING_ASSET_ADDRESS();
        return this.getToken(assetAddress);
    }
    async getDebtTokenAddress(asset, interestRateMode) {
        const { stableDebtTokenAddress, variableDebtTokenAddress } = await this.protocolDataProvider.getReserveTokensAddresses(asset.wrapped.address);
        return interestRateMode === types_1.InterestRateMode.variable ? variableDebtTokenAddress : stableDebtTokenAddress;
    }
    async getFlashLoanPremiumTotal() {
        const lendingPoolAddress = await this.getLendingPoolAddress();
        const premium = await contracts_1.LendingPool__factory.connect(lendingPoolAddress, this.provider).FLASHLOAN_PREMIUM_TOTAL();
        return premium.toNumber();
    }
    async isDelegationApproved(account, delegateeAddress, assetAmount, interestRateMode) {
        const debtTokenAddress = await this.getDebtTokenAddress(assetAmount.token, interestRateMode);
        const borrowAllowance = await contracts_1.DebtTokenBase__factory.connect(debtTokenAddress, this.provider).borrowAllowance(account, delegateeAddress);
        return borrowAllowance.gte(assetAmount.amountWei);
    }
    async buildApproveDelegationTransactionRequest(delegateeAddress, assetAmount, interestRateMode) {
        const to = await this.getDebtTokenAddress(assetAmount.token, interestRateMode);
        const iface = contracts_1.DebtTokenBase__factory.createInterface();
        const data = iface.encodeFunctionData('approveDelegation', [delegateeAddress, ethers_1.constants.MaxUint256]);
        return { to, data };
    }
}
exports.Service = Service;
//# sourceMappingURL=service.js.map