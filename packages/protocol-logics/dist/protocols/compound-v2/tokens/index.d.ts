import * as common from '@composable-router/common';
export declare const COMP: common.Token;
export declare const cTokens: Record<"cAAVE" | "cBAT" | "cCOMP" | "cDAI" | "cETH" | "cFEI" | "cLINK" | "cMKR" | "cREP" | "cSUSHI" | "cTUSD" | "cUNI" | "cUSDC" | "cUSDP" | "cUSDT" | "cWBTC" | "cYFI" | "cZRX", common.Token>;
export declare const underlyingTokens: Record<"USDT" | "WBTC" | "ETH" | "UNI" | "AAVE" | "DAI" | "LINK" | "MKR" | "TUSD" | "USDC" | "USDP" | "BAT" | "COMP" | "FEI" | "REP" | "SUSHI" | "YFI" | "ZRX", common.Token>;
export declare const tokenPairs: {
    cToken: common.Token;
    underlyingToken: common.Token;
}[], underlyingToCTokenMap: Record<string, common.Token>, cTokenToUnderlyingMap: Record<string, common.Token>;
export declare function toUnderlyingToken(cTokenOrAddress: common.TokenOrAddress): common.Token;
export declare function toCToken(underlyingTokenOrAddress: common.TokenOrAddress): common.Token;
export declare function isCToken(token: common.TokenTypes): boolean;
