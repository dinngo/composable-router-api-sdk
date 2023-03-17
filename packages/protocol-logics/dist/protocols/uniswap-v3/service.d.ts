import { Currency, CurrencyAmount, TradeType } from '@uniswap/sdk-core';
import { Route } from '@uniswap/v3-sdk';
import * as common from '@composable-router/common';
export declare class Service extends common.Web3Toolkit {
    getBestTrade(tradeType: TradeType, amountSpecified: CurrencyAmount<Currency>, otherCurrency: Currency): Promise<{
        route: Route<Currency, Currency>;
        inputAmount: CurrencyAmount<Currency>;
        outputAmount: CurrencyAmount<Currency>;
    }>;
    private getAllRoutes;
    private getPools;
}
