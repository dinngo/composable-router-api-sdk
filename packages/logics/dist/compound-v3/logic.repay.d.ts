import * as common from '@composable-router/common';
import * as core from '@composable-router/core';
export type RepayLogicParams = core.RepayParams<{
    marketId: string;
}>;
export type RepayLogicFields = core.RepayFields<{
    marketId: string;
}>;
export declare class RepayLogic extends core.Logic implements core.LogicTokenListInterface {
    static readonly supportedChainIds: common.ChainId[];
    getTokenList(): Promise<Record<string, common.Token[]>>;
    quote(params: RepayLogicParams): Promise<{
        marketId: string;
        borrower: string;
        input: common.TokenAmount;
    }>;
    build(fields: RepayLogicFields): Promise<{
        to: string;
        data: string;
        inputs: core.IParam.InputStruct[];
        wrapMode: number;
        approveTo: string;
        callback: string;
    }>;
}
