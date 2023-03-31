import * as common from '@composable-router/common';
export declare const mainnetTokens: Record<"WBTC" | "ETH" | "WETH" | "UNI" | "LINK" | "USDC" | "wstETH" | "cbETH" | "COMP" | "cUSDCv3" | "cWETHv3", common.Token>;
export declare const polygonTokens: Record<"WBTC" | "WETH" | "USDC" | "cUSDCv3" | "WMATIC" | "MATIC", common.Token>;
export declare const COMPMap: Record<number, common.Token>;
export declare function COMP(chainId: number): common.Token;
