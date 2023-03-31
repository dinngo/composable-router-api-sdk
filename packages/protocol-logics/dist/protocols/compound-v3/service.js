"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
const tslib_1 = require("tslib");
const tokens_1 = require("./tokens");
const contracts_1 = require("./contracts");
const common = tslib_1.__importStar(require("@composable-router/common"));
const config_1 = require("./config");
class Service extends common.Web3Toolkit {
    async getCToken(marketId) {
        const market = (0, config_1.getMarket)(this.chainId, marketId);
        const cToken = await this.getToken(market.cometAddress);
        return cToken;
    }
    async getBaseToken(marketId) {
        const market = (0, config_1.getMarket)(this.chainId, marketId);
        const baseToken = await this.getToken(market.baseTokenAddress);
        return baseToken;
    }
    async getCometTokens(marketId) {
        const market = (0, config_1.getMarket)(this.chainId, marketId);
        const tokens = await this.getTokens([market.cometAddress, market.baseTokenAddress]);
        return { cToken: tokens[0], baseToken: tokens[1] };
    }
    async getCollaterals(marketId) {
        const market = (0, config_1.getMarket)(this.chainId, marketId);
        const contractComet = contracts_1.Comet__factory.connect(market.cometAddress, this.provider);
        const numAssets = await contractComet.numAssets();
        const ifaceComet = contracts_1.Comet__factory.createInterface();
        const calls = [];
        for (let i = 0; i < numAssets; i++) {
            calls.push({ target: market.cometAddress, callData: ifaceComet.encodeFunctionData('getAssetInfo', [i]) });
        }
        const { returnData } = await this.multicall2.callStatic.aggregate(calls);
        const collateralAddresses = [];
        for (let i = 0; i < numAssets; i++) {
            const [{ asset }] = ifaceComet.decodeFunctionResult('getAssetInfo', returnData[i]);
            if (asset === this.wrappedNativeToken.address) {
                collateralAddresses.push(this.nativeToken.address);
            }
            collateralAddresses.push(asset);
        }
        const collaterals = await this.getTokens(collateralAddresses);
        return collaterals;
    }
    async isAllowed(marketId, owner, manager) {
        const market = (0, config_1.getMarket)(this.chainId, marketId);
        const contractComet = contracts_1.Comet__factory.connect(market.cometAddress, this.provider);
        const isAllowed = await contractComet.isAllowed(owner, manager);
        return isAllowed;
    }
    buildAllowTransactionRequest(marketId, manager, isAllowed) {
        const market = (0, config_1.getMarket)(this.chainId, marketId);
        const to = market.cometAddress;
        const iface = contracts_1.Comet__factory.createInterface();
        const data = iface.encodeFunctionData('allow', [manager, isAllowed]);
        return { to, data };
    }
    async getCollateralBalance(account, marketId, asset) {
        const market = (0, config_1.getMarket)(this.chainId, marketId);
        const contractComet = contracts_1.Comet__factory.connect(market.cometAddress, this.provider);
        const collateralBalance = await contractComet.collateralBalanceOf(account, asset.wrapped.address);
        return new common.TokenAmount(asset).setWei(collateralBalance);
    }
    async getBorrowBalance(account, marketId) {
        const market = (0, config_1.getMarket)(this.chainId, marketId);
        const baseToken = await this.getBaseToken(market.id);
        const contractComet = contracts_1.Comet__factory.connect(market.cometAddress, this.provider);
        const collateralBalance = await contractComet.borrowBalanceOf(account);
        return new common.TokenAmount(baseToken).setWei(collateralBalance);
    }
    async getUserPrincipal(account, marketId) {
        const market = (0, config_1.getMarket)(this.chainId, marketId);
        const baseToken = await this.getBaseToken(market.id);
        const contractComet = contracts_1.Comet__factory.connect(market.cometAddress, this.provider);
        const userBasic = await contractComet.userBasic(account);
        return new common.TokenAmount(baseToken).setWei(userBasic.principal);
    }
    async getRewardOwed(marketId, owner) {
        const market = (0, config_1.getMarket)(this.chainId, marketId);
        const contractCometRewards = contracts_1.CometRewards__factory.connect((0, config_1.getContractAddress)(this.chainId, 'CometRewards'), this.provider);
        const { owed } = await contractCometRewards.callStatic.getRewardOwed(market.cometAddress, owner);
        return new common.TokenAmount((0, tokens_1.COMP)(this.chainId)).setWei(owed);
    }
    async canSupply(marketId, supply) {
        const market = (0, config_1.getMarket)(this.chainId, marketId);
        const asset = supply.token.wrapped.address;
        const ifaceComet = contracts_1.Comet__factory.createInterface();
        const calls = [
            {
                target: market.cometAddress,
                callData: ifaceComet.encodeFunctionData('getAssetInfoByAddress', [asset]),
            },
            {
                target: market.cometAddress,
                callData: ifaceComet.encodeFunctionData('totalsCollateral', [asset]),
            },
        ];
        const { returnData } = await this.multicall2.callStatic.aggregate(calls);
        const [{ supplyCap }] = ifaceComet.decodeFunctionResult('getAssetInfoByAddress', returnData[0]);
        const [totalSupplyAsset] = ifaceComet.decodeFunctionResult('totalsCollateral', returnData[1]);
        return supplyCap.gt(totalSupplyAsset.add(supply.amountWei));
    }
}
exports.Service = Service;
//# sourceMappingURL=service.js.map