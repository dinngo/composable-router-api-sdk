import * as common from '@composable-router/common';
import * as core from '@composable-router/core';
export type WithdrawLogicParams = core.TokenToTokenExactInParams;
export type WithdrawLogicFields = core.TokenToTokenFields;
export type WithdrawLogicOptions = Pick<core.GlobalOptions, 'account'>;
export declare class WithdrawLogic extends core.Logic implements core.LogicInterfaceGetSupportedTokens, core.LogicInterfaceGetPrice {
    static readonly supportedChainIds: common.ChainId[];
    getSupportedTokens(): Promise<common.Token[][]>;
    getPrice(params: WithdrawLogicParams): Promise<common.TokenAmount>;
    getLogic(fields: WithdrawLogicFields, options: WithdrawLogicOptions): Promise<{
        to: string;
        data: string;
        inputs: core.IParam.InputStruct[];
        approveTo: string;
        callback: string;
    }>;
}
