import { Token } from '@uniswap/sdk-core';
import * as common from '@composable-router/common';
export declare const WRAPPED_NATIVE_CURRENCY: Record<number, Token>;
export declare function toTokenMap<T extends string>(tokenObjectMap: Record<string, common.TokenObject>): Record<T, Token>;
export declare const mainnetTokens: Record<"USDT" | "WBTC" | "DAI" | "USDC" | "FRAX" | "FEI" | "AMPL" | "sETH2" | "rETH2" | "SWISE" | "TRIBE" | "FXS" | "renBTC" | "ETH2X_FLI", Token>;
export declare const polygonTokens: Record<"USDT" | "WETH" | "DAI" | "USDC", Token>;
export declare const arbitrumTokens: Record<"USDT" | "WBTC" | "DAI", Token>;
export declare const optimismTokens: Record<"USDT" | "WBTC" | "DAI", Token>;
