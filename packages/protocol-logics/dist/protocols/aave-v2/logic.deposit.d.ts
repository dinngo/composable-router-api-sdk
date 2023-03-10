import * as common from '@composable-router/common';
import * as core from '@composable-router/core';
export type DepositLogicParams = core.TokenToTokenExactInParams;
export type DepositLogicFields = core.TokenToTokenFields<{
    referralCode?: number;
}>;
export type DepositLogicOptions = Pick<core.GlobalOptions, 'account'>;
export declare class DepositLogic extends core.Logic implements core.LogicInterfaceGetSupportedTokens, core.LogicInterfaceGetPrice {
    static readonly supportedChainIds: common.ChainId[];
    getSupportedTokens(): Promise<common.Token[][]>;
    getPrice(params: DepositLogicParams): Promise<common.TokenAmount>;
    getLogic(fields: DepositLogicFields, options: DepositLogicOptions): Promise<{
        to: string;
        data: string;
        inputs: core.IParam.InputStruct[];
        approveTo: string;
        callback: string;
    }>;
}
