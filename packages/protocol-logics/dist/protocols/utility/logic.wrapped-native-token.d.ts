import * as common from '@composable-router/common';
import * as core from '@composable-router/core';
export type WrappedNativeTokenLogicParams = core.TokenToTokenExactInParams;
export type WrappedNativeTokenLogicFields = core.TokenToTokenExactInFields;
export declare class WrappedNativeTokenLogic extends core.Logic implements core.LogicTokenListInterface, core.LogicOracleInterface {
    static readonly supportedChainIds: common.ChainId[];
    getTokenList(): common.Token[][];
    quote(params: WrappedNativeTokenLogicParams): common.TokenAmount;
    getLogic(fields: WrappedNativeTokenLogicFields): Promise<{
        to: string;
        data: string;
        inputs: core.IParam.InputStruct[];
        approveTo: string;
        callback: string;
    }>;
}
