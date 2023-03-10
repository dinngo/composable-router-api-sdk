import * as common from '@composable-router/common';
import * as core from '@composable-router/core';
export type SupplyLogicParams = core.TokenToTokenExactInParams;
export type SupplyLogicFields = core.TokenToTokenFields;
export declare class SupplyLogic extends core.Logic implements core.LogicInterfaceGetSupportedTokens, core.LogicInterfaceGetPrice {
    static readonly supportedChainIds: common.ChainId[];
    getSupportedTokens(): common.Token[][];
    getPrice(params: SupplyLogicParams): Promise<common.TokenAmount>;
    getLogic(fields: SupplyLogicFields): Promise<{
        to: string;
        data: string;
        inputs: core.IParam.InputStruct[];
        approveTo: string;
        callback: string;
    }>;
}
