import { BuildSwapTxInput } from '@paraswap/sdk';
import * as common from '@composable-router/common';
import * as core from '@composable-router/core';
export type SwapTokenLogicParams = core.TokenToTokenExactInParams;
export type SwapTokenLogicFields = core.TokenToTokenExactInFields<Pick<BuildSwapTxInput, 'partner' | 'partnerAddress'>>;
export type SwapTokenLogicOptions = Pick<core.GlobalOptions, 'account' | 'slippage'>;
export declare class SwapTokenLogic extends core.Logic implements core.LogicOracleInterface {
    static readonly supportedChainIds: common.ChainId[];
    get sdk(): import("@paraswap/sdk").SimpleFetchSDK;
    getTokenList(): Promise<common.TokenTypes[]>;
    quote(params: SwapTokenLogicParams): Promise<{
        input: common.TokenAmount;
        output: common.TokenAmount;
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
