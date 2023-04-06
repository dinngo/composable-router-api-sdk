import { InterestRateMode } from './types';
import * as common from '@composable-router/common';
import * as core from '@composable-router/core';
export type RepayLogicParams = core.RepayParams<{
    interestRateMode: InterestRateMode;
}>;
export type RepayLogicFields = core.RepayFields<{
    interestRateMode: InterestRateMode;
}>;
export declare class RepayLogic extends core.Logic implements core.LogicTokenListInterface, core.LogicOracleInterface {
    static readonly supportedChainIds: common.ChainId[];
    getTokenList(): Promise<common.Token[]>;
    quote(params: RepayLogicParams): Promise<{
        borrower: string;
        interestRateMode: InterestRateMode;
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