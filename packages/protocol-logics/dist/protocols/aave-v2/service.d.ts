import { InterestRateMode, ReserveTokens, ReserveTokensAddress } from './types';
import * as common from '@composable-router/common';
export declare class Service extends common.Web3Toolkit {
    get protocolDataProvider(): import("./contracts").ProtocolDataProvider;
    private lendingPoolAddress?;
    getLendingPoolAddress(): Promise<string>;
    private assetAddresses?;
    getAssetAddresses(): Promise<string[]>;
    private reserveTokensAddresses?;
    getReserveTokensAddresses(): Promise<ReserveTokensAddress[]>;
    private assets?;
    getAssets(): Promise<common.Token[]>;
    private aTokens?;
    getATokens(): Promise<common.Token[]>;
    private reserveTokens?;
    getReserveTokens(): Promise<ReserveTokens[]>;
    toAToken(asset: common.Token): Promise<common.Token>;
    toAsset(aToken: common.Token): Promise<common.Token>;
    getDebtTokenAddress(asset: common.Token, interestRateMode: InterestRateMode): Promise<string>;
    getFlashLoanPremiumTotal(): Promise<number>;
    isDelegationApproved(account: string, delegateeAddress: string, assetAmount: common.TokenAmount, interestRateMode: InterestRateMode): Promise<boolean>;
    buildApproveDelegationTransactionRequest(delegateeAddress: string, assetAmount: common.TokenAmount, interestRateMode: InterestRateMode): Promise<common.TransactionRequest>;
}
