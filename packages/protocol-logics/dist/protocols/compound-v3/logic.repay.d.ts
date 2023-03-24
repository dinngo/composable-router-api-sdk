import * as common from '@composable-router/common';
import * as core from '@composable-router/core';
export type RepayLogicFields = Omit<core.TokenInFields<{
    marketId: string;
    repayAll?: boolean;
}>, 'amountBps'>;
export type RepayLogicOptions = Pick<core.GlobalOptions, 'account'>;
export declare class RepayLogic extends core.Logic implements core.LogicTokenListInterface {
    static readonly supportedChainIds: common.ChainId[];
    getTokenList(): Promise<Record<string, common.Token>>;
    getLogic(fields: RepayLogicFields, options: RepayLogicOptions): Promise<{
        to: string;
        data: string;
        inputs: core.IParam.InputStruct[];
        approveTo: string;
        callback: string;
    }>;
}
