import { InterestRateMode } from './types';
import * as common from '@composable-router/common';
import * as core from '@composable-router/core';
export type RepayLogicFields = core.TokenInFields<{
    interestRateMode: InterestRateMode;
    address: string;
}>;
export declare class RepayLogic extends core.Logic implements core.LogicTokenListInterface {
    static readonly supportedChainIds: common.ChainId[];
    getTokenList(): Promise<common.Token[]>;
    getDebt(user: string, asset: common.Token, interestRateMode: InterestRateMode): Promise<common.TokenAmount>;
    getLogic(fields: RepayLogicFields): Promise<{
        to: string;
        data: string;
        inputs: core.IParam.InputStruct[];
        approveTo: string;
        callback: string;
    }>;
}
