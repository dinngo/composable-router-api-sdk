import * as common from '@composable-router/common';
import * as core from '@composable-router/core';
export type FlashLoanLogicFields = core.FlashLoanFields<{
    referralCode?: number;
}>;
export declare class FlashLoanLogic extends core.Logic implements core.LogicTokenListInterface {
    static readonly supportedChainIds: common.ChainId[];
    getTokenList(): Promise<common.Token[]>;
    getLogic(fields: FlashLoanLogicFields): Promise<{
        to: string;
        data: string;
        inputs: core.IParam.InputStruct[];
        wrapMode: number;
        approveTo: string;
        callback: string;
    }>;
}
