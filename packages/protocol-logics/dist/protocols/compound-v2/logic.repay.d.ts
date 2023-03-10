import * as common from '@composable-router/common';
import * as core from '@composable-router/core';
export type RepayLogicFields = core.TokenInFields<{
    borrower: string;
}>;
export declare class RepayLogic extends core.Logic implements core.LogicInterfaceGetSupportedTokens {
    static readonly supportedChainIds: common.ChainId[];
    getSupportedTokens(): common.Token[];
    getDebt(borrower: string, underlyingToken: common.Token): Promise<common.TokenAmount>;
    getLogic(fields: RepayLogicFields): Promise<{
        to: string;
        data: string;
        inputs: core.IParam.InputStruct[];
        approveTo: string;
        callback: string;
    }>;
}
