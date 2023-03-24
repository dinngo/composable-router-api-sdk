import * as common from '@composable-router/common';
import * as core from '@composable-router/core';
export type SupplyCollateralLogicFields = core.TokenInFields<{
    marketId: string;
}>;
export type SupplyCollateralLogicOptions = Pick<core.GlobalOptions, 'account'>;
export declare class SupplyCollateralLogic extends core.Logic implements core.LogicTokenListInterface {
    static readonly supportedChainIds: common.ChainId[];
    getTokenList(): Promise<Record<string, common.Token[]>>;
    getLogic(fields: SupplyCollateralLogicFields, options: SupplyCollateralLogicOptions): Promise<{
        to: string;
        data: string;
        inputs: core.IParam.InputStruct[];
        approveTo: string;
        callback: string;
    }>;
}
