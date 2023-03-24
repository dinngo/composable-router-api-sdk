import * as common from '@composable-router/common';
import * as core from '@composable-router/core';
export type WithdrawBaseLogicParams = core.TokenToTokenExactInParams<{
    marketId: string;
}>;
export type WithdrawBaseLogicFields = core.TokenToTokenExactInFields<{
    marketId: string;
}>;
export type WithdrawBaseLogicOptions = Pick<core.GlobalOptions, 'account'>;
export declare class WithdrawBaseLogic extends core.Logic implements core.LogicTokenListInterface, core.LogicOracleInterface {
    static readonly supportedChainIds: common.ChainId[];
    getTokenList(): Promise<Record<string, [common.Token, common.Token]>>;
    quote(params: WithdrawBaseLogicParams): Promise<{
        marketId: string;
        input: common.TokenAmount;
        output: common.TokenAmount;
    }>;
    getLogic(fields: WithdrawBaseLogicFields, options: WithdrawBaseLogicOptions): Promise<{
        to: string;
        data: string;
        inputs: core.IParam.InputStruct[];
        approveTo: string;
        callback: string;
    }>;
}
