import * as common from '@composable-router/common';
import * as core from '@composable-router/core';
export type ClaimLogicParams = core.ClaimParams<{
    marketId: string;
}>;
export type ClaimLogicFields = core.ClaimFields<{
    marketId: string;
}>;
export type ClaimLogicOptions = Pick<core.GlobalOptions, 'account'>;
export declare class ClaimLogic extends core.Logic implements core.LogicTokenListInterface, core.LogicOracleInterface {
    static readonly supportedChainIds: common.ChainId[];
    getTokenList(): Promise<common.Token[]>;
    quote(params: ClaimLogicParams): Promise<{
        marketId: string;
        owner: string;
        output: common.TokenAmount;
    }>;
    getLogic(fields: ClaimLogicFields, options: ClaimLogicOptions): Promise<{
        to: string;
        data: string;
        inputs: core.IParam.InputStruct[];
        wrapMode: number;
        approveTo: string;
        callback: string;
    }>;
}
