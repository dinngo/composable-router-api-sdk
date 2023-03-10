import * as common from '@composable-router/common';
import * as core from '@composable-router/core';
export type FlashLoanLogicFields = core.FlashLoanFields<{
    referralCode?: number;
}>;
export declare class FlashLoanLogic extends core.Logic implements core.LogicInterfaceGetSupportedTokens {
    static readonly supportedChainIds: common.ChainId[];
    getSupportedTokens(): Promise<common.Token[]>;
    getLogic(fields: FlashLoanLogicFields): Promise<{
        to: string;
        data: string;
        inputs: core.IParam.InputStruct[];
        approveTo: string;
        callback: string;
    }>;
}
