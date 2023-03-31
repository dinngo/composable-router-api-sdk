import * as common from '@composable-router/common';
import * as core from '@composable-router/core';
export type BorrowLogicFields = core.TokenOutFields<{
    marketId: string;
}>;
export type BorrowLogicOptions = Pick<core.GlobalOptions, 'account'>;
export declare class BorrowLogic extends core.Logic implements core.LogicTokenListInterface {
    static readonly supportedChainIds: common.ChainId[];
    getTokenList(): Promise<Record<string, common.Token[]>>;
    getLogic(fields: BorrowLogicFields, options: BorrowLogicOptions): Promise<{
        to: string;
        data: string;
        inputs: core.IParam.InputStruct[];
        wrapMode: number;
        approveTo: string;
        callback: string;
    }>;
}
