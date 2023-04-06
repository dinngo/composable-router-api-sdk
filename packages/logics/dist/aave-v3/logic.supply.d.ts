import * as common from '@composable-router/common';
import * as core from '@composable-router/core';
export type SupplyLogicParams = core.TokenToTokenExactInParams;
export type SupplyLogicFields = core.TokenToTokenExactInFields<{
    referralCode?: number;
}>;
export type SupplyLogicOptions = Pick<core.GlobalOptions, 'account'>;
export declare class SupplyLogic extends core.Logic implements core.LogicTokenListInterface, core.LogicOracleInterface {
    static readonly supportedChainIds: common.ChainId[];
    getTokenList(): Promise<[common.Token, common.Token][]>;
    quote(params: SupplyLogicParams): Promise<{
        input: common.TokenAmount;
        output: common.TokenAmount;
    }>;
    build(fields: SupplyLogicFields, options: SupplyLogicOptions): Promise<{
        to: string;
        data: string;
        inputs: core.IParam.InputStruct[];
        wrapMode: number;
        approveTo: string;
        callback: string;
    }>;
}