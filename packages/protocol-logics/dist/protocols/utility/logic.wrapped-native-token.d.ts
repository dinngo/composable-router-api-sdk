import * as common from '@composable-router/common';
import * as core from '@composable-router/core';
export type WrappedNativeTokenLogicParams = core.TokenToTokenExactInParams;
export type WrappedNativeTokenLogicFields = core.TokenToTokenFields;
export declare class WrappedNativeTokenLogic extends core.Logic implements core.LogicInterfaceGetSupportedTokens, core.LogicInterfaceGetPrice {
    static readonly supportedChainIds: common.ChainId[];
    getSupportedTokens(): common.Token[][];
    getPrice(params: WrappedNativeTokenLogicParams): common.TokenAmount;
    getLogic(fields: WrappedNativeTokenLogicFields): Promise<{
        to: string;
        data: string;
        inputs: core.IParam.InputStruct[];
        approveTo: string;
        callback: string;
    }>;
}
