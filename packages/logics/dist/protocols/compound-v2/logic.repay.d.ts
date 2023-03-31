import * as common from '@composable-router/common';
import * as core from '@composable-router/core';
export type RepayLogicParams = core.RepayParams;
export type RepayLogicFields = core.RepayFields;
export declare class RepayLogic extends core.Logic implements core.LogicTokenListInterface, core.LogicOracleInterface {
    static readonly supportedChainIds: common.ChainId[];
    getTokenList(): common.Token[];
    quote(params: RepayLogicParams): Promise<{
        borrower: string;
        input: common.TokenAmount;
    }>;
    getLogic(fields: RepayLogicFields): Promise<{
        to: string;
        data: string;
        inputs: core.IParam.InputStruct[];
        wrapMode: number;
        approveTo: string;
        callback: string;
    }>;
}
