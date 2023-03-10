import { InterestRateMode } from './types';
import * as common from '@composable-router/common';
import * as core from '@composable-router/core';
export type BorrowLogicFields = core.TokenOutFields<{
    interestRateMode: InterestRateMode;
}>;
export declare class BorrowLogic extends core.Logic implements core.LogicInterfaceGetSupportedTokens {
    static readonly supportedChainIds: common.ChainId[];
    getSupportedTokens(): Promise<common.Token[]>;
    getLogic(fields: BorrowLogicFields): Promise<{
        to: string;
        data: string;
        inputs: core.IParam.InputStruct[];
        approveTo: string;
        callback: string;
    }>;
}
