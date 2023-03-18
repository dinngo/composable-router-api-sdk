import * as common from '@composable-router/common';
import * as core from '@composable-router/core';
export type WithdrawLogicParams = core.TokenToTokenExactInParams;
export type WithdrawLogicFields = core.TokenToTokenExactInFields;
export type WithdrawLogicOptions = Pick<core.GlobalOptions, 'account'>;
export declare class WithdrawLogic extends core.Logic implements core.LogicTokenListInterface, core.LogicOracleInterface {
    static readonly supportedChainIds: common.ChainId[];
    getTokenList(): Promise<common.Token[][]>;
    quote(params: WithdrawLogicParams): Promise<{
        input: common.TokenAmount;
        output: common.TokenAmount;
    }>;
    getLogic(fields: WithdrawLogicFields, options: WithdrawLogicOptions): Promise<{
        to: string;
        data: string;
        inputs: core.IParam.InputStruct[];
        approveTo: string;
        callback: string;
    }>;
}
