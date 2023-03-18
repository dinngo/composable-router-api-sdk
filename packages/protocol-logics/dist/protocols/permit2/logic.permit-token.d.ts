import { PermitBatch, PermitSingle } from '@uniswap/permit2-sdk';
import * as common from '@composable-router/common';
import * as core from '@composable-router/core';
export interface PermitTokenLogicFields {
    permit: PermitSingle | PermitBatch;
    sig: string;
}
export type PermitTokenLogicOptions = Pick<core.GlobalOptions, 'account'>;
export declare class PermitTokenLogic extends core.Logic {
    static readonly supportedChainIds: common.ChainId[];
    getPermitData(account: string, erc20Funds: common.TokenAmounts): Promise<import("@uniswap/permit2-sdk").PermitSingleData | import("@uniswap/permit2-sdk").PermitBatchData | undefined>;
    getLogic(fields: PermitTokenLogicFields, options: PermitTokenLogicOptions): Promise<{
        to: string;
        data: string;
        inputs: core.IParam.InputStruct[];
        approveTo: string;
        callback: string;
    }>;
}
