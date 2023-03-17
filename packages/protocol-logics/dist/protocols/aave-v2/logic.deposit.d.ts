import * as common from '@composable-router/common';
import * as core from '@composable-router/core';
export type DepositLogicParams = core.TokenToTokenExactInParams;
export type DepositLogicFields = core.TokenToTokenExactInFields<{
    referralCode?: number;
}>;
export type DepositLogicOptions = Pick<core.GlobalOptions, 'account'>;
export declare class DepositLogic extends core.Logic implements core.LogicTokenListInterface, core.LogicOracleInterface {
    static readonly supportedChainIds: common.ChainId[];
    getTokenList(): Promise<common.Token[][]>;
    quote(params: DepositLogicParams): Promise<common.TokenAmount>;
    getLogic(fields: DepositLogicFields, options: DepositLogicOptions): Promise<{
        to: string;
        data: string;
        inputs: core.IParam.InputStruct[];
        approveTo: string;
        callback: string;
    }>;
}
