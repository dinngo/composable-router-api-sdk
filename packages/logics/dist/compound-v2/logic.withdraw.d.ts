import * as common from '@composable-router/common';
import * as core from '@composable-router/core';
export type WithdrawLogicParams = core.TokenToTokenExactInParams;
export type WithdrawLogicFields = core.TokenToTokenExactInFields;
export declare class WithdrawLogic extends core.Logic implements core.LogicTokenListInterface, core.LogicOracleInterface {
    static readonly supportedChainIds: common.ChainId[];
    getTokenList(): common.Token[][];
    quote(params: WithdrawLogicParams): Promise<{
        input: common.TokenAmount;
        output: common.TokenAmount;
    }>;
    build(fields: WithdrawLogicFields): Promise<{
        to: string;
        data: string;
        inputs: core.IParam.InputStruct[];
        wrapMode: number;
        approveTo: string;
        callback: string;
    }>;
}
