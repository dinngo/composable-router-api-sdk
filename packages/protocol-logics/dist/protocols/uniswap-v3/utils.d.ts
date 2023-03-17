import { Currency, Token } from '@uniswap/sdk-core';
import { FeeAmount, Pool, Route } from '@uniswap/v3-sdk';
export declare function getAllCurrencyCombinations(chainId: number, currencyA: Currency, currencyB: Currency): [Token, Token][];
export declare function getAllCurrencyCombinationsWithAllFees(chainId: number, currencyIn: Currency, currencyOut: Currency): [Token, Token, FeeAmount][];
export declare function computeAllRoutes(currencyIn: Currency, currencyOut: Currency, pools: Pool[], chainId: number, currentPath?: Pool[], allPaths?: Route<Currency, Currency>[], startCurrencyIn?: Currency, maxHops?: number): Route<Currency, Currency>[];
export declare function getDeadline(chainId: number): number;
