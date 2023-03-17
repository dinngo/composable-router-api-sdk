import * as common from '@composable-router/common';
import * as core from '@composable-router/core';
export type SupplyLogicParams = core.TokenToTokenExactInParams;
export type SupplyLogicFields = core.TokenToTokenExactInFields;
export declare class SupplyLogic extends core.Logic implements core.LogicTokenListInterface, core.LogicOracleInterface {
    static readonly supportedChainIds: common.ChainId[];
    getTokenList(): common.Token[][];
    quote(params: SupplyLogicParams): Promise<common.TokenAmount>;
    getLogic(fields: SupplyLogicFields): Promise<{
        to: string;
        data: string;
        inputs: core.IParam.InputStruct[];
        approveTo: string;
        callback: string;
    }>;
}
