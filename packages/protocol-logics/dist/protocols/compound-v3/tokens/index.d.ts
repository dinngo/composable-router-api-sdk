import * as common from '@composable-router/common';
export declare const mainnetTokens: Record<"WBTC" | "UNI" | "LINK" | "USDC" | "COMP" | "ETH" | "cUSDCv3" | "cWETHv3" | "cbETH" | "wstETH", common.Token>;
export declare const polygonTokens: Record<"WBTC" | "WETH" | "USDC" | "cUSDCv3" | "MATIC", common.Token>;
export declare const COMPMap: Record<number, common.Token>;
export declare function COMP(chainId: number): common.Token;
