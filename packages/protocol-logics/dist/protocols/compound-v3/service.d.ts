import * as common from '@composable-router/common';
export declare class Service extends common.Web3Toolkit {
    getCToken(marketId: string): Promise<common.Token>;
    getBaseToken(marketId: string): Promise<common.Token>;
    getCometTokens(marketId: string): Promise<{
        cToken: common.Token;
        baseToken: common.Token;
    }>;
    getCollaterals(marketId: string): Promise<common.Token[]>;
    isAllowed(marketId: string, owner: string, manager: string): Promise<boolean>;
    buildAllowTransactionRequest(marketId: string, manager: string, isAllowed: boolean): common.TransactionRequest;
    getCollateralBalance(account: string, marketId: string, asset: common.Token): Promise<common.TokenAmount>;
    getBorrowBalance(account: string, marketId: string): Promise<common.TokenAmount>;
    getUserPrincipal(account: string, marketId: string): Promise<common.TokenAmount>;
    getRewardOwed(marketId: string, owner: string): Promise<common.TokenAmount>;
    canSupply(marketId: string, supply: common.TokenAmount): Promise<any>;
}
