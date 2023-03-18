import { InterestRateMode } from './types';
import * as common from '@composable-router/common';
import * as core from '@composable-router/core';
export type BorrowLogicFields = core.TokenOutFields<{
    interestRateMode: InterestRateMode;
    referralCode?: number;
}>;
export type BorrowLogicOptions = Pick<core.GlobalOptions, 'account'>;
export declare class BorrowLogic extends core.Logic implements core.LogicTokenListInterface {
    static readonly supportedChainIds: common.ChainId[];
    getTokenList(): Promise<common.Token[]>;
    getLogic(fields: BorrowLogicFields, options: BorrowLogicOptions): Promise<{
        to: string;
        data: string;
        inputs: core.IParam.InputStruct[];
        approveTo: string;
        callback: string;
    }>;
}
