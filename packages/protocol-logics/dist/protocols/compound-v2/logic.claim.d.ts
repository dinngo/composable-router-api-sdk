import * as common from '@composable-router/common';
import * as core from '@composable-router/core';
export type ClaimLogicParams = core.ClaimParams;
export type ClaimLogicFields = core.ClaimFields;
export declare class ClaimLogic extends core.Logic implements core.LogicTokenListInterface, core.LogicOracleInterface {
    static readonly supportedChainIds: common.ChainId[];
    getTokenList(): common.Token[];
    quote(params: ClaimLogicParams): Promise<{
        output: common.TokenAmount;
    }>;
    getLogic(fields: ClaimLogicFields): Promise<{
        to: string;
        data: string;
        inputs: core.IParam.InputStruct[];
        approveTo: string;
        callback: string;
    }>;
}
