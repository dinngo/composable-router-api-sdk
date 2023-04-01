import * as common from '@composable-router/common';
import * as core from '@composable-router/core';
export type SupplyBaseLogicParams = core.TokenToTokenExactInParams<{
    marketId: string;
}>;
export type SupplyBaseLogicFields = core.TokenToTokenExactInFields<{
    marketId: string;
}>;
export declare class SupplyBaseLogic extends core.Logic implements core.LogicTokenListInterface, core.LogicOracleInterface {
    static readonly supportedChainIds: common.ChainId[];
    getTokenList(): Promise<Record<string, [common.Token, common.Token][]>>;
    quote(params: SupplyBaseLogicParams): Promise<{
        marketId: string;
        input: common.TokenAmount;
        output: common.TokenAmount;
    }>;
    build(fields: SupplyBaseLogicFields): Promise<{
        to: string;
        data: string;
        inputs: core.IParam.InputStruct[];
        wrapMode: number;
        approveTo: string;
        callback: string;
    }>;
}
