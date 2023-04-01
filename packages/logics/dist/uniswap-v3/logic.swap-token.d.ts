import { CurrencyAmount } from '@uniswap/sdk-core';
import { SetOptional } from 'type-fest';
import * as common from '@composable-router/common';
import * as core from '@composable-router/core';
export type SwapTokenLogicParams = core.TokenToTokenParams;
export type SwapTokenLogicSingleHopFields = core.TokenToTokenFields<{
    fee: number;
}>;
export type SwapTokenLogicMultiHopFields = core.TokenToTokenFields<{
    path: string;
}>;
export type SwapTokenLogicFields = SwapTokenLogicSingleHopFields | SwapTokenLogicMultiHopFields;
export type SwapTokenLogicOptions = SetOptional<Pick<core.GlobalOptions, 'account' | 'slippage'>, 'slippage'>;
export declare function isSwapTokenLogicSingleHopFields(v: any): v is SwapTokenLogicSingleHopFields;
export declare class SwapTokenLogic extends core.Logic implements core.LogicTokenListInterface, core.LogicOracleInterface {
    static readonly supportedChainIds: common.ChainId[];
    getTokenList(): Promise<common.TokenTypes[]>;
    getExactInBestTrade(input: common.TokenAmount, tokenOut: common.Token): Promise<{
        route: import("@uniswap/v3-sdk").Route<import("@uniswap/sdk-core").Currency, import("@uniswap/sdk-core").Currency>;
        inputAmount: CurrencyAmount<import("@uniswap/sdk-core").Currency>;
        outputAmount: CurrencyAmount<import("@uniswap/sdk-core").Currency>;
    }>;
    getExactOutBestTrade(tokenIn: common.Token, output: common.TokenAmount): Promise<{
        route: import("@uniswap/v3-sdk").Route<import("@uniswap/sdk-core").Currency, import("@uniswap/sdk-core").Currency>;
        inputAmount: CurrencyAmount<import("@uniswap/sdk-core").Currency>;
        outputAmount: CurrencyAmount<import("@uniswap/sdk-core").Currency>;
    }>;
    quote(params: SwapTokenLogicParams): Promise<{
        tradeType: core.TradeType;
        input: common.TokenAmount;
        output: common.TokenAmount;
        fee: import("@uniswap/v3-sdk").FeeAmount;
        path?: undefined;
    } | {
        tradeType: core.TradeType;
        input: common.TokenAmount;
        output: common.TokenAmount;
        path: string;
        fee?: undefined;
    }>;
    build(fields: SwapTokenLogicFields, options: SwapTokenLogicOptions): Promise<{
        to: string;
        data: string;
        inputs: core.IParam.InputStruct[];
        wrapMode: number;
        approveTo: string;
        callback: string;
    }>;
}
