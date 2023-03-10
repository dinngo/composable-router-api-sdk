import { PermitBatch, PermitBatchData, PermitDetails } from '@uniswap/permit2-sdk';
import * as common from '@composable-router/common';
import * as core from '@composable-router/core';
export interface PermitTokenLogicFields {
    permit: PermitBatch;
    sig: string;
}
export type PermitTokenLogicOptions = Pick<core.GlobalOptions, 'account'>;
export declare class PermitTokenLogic extends core.Logic {
    static readonly supportedChainIds: common.ChainId[];
    getPermitDetails(account: string, erc20Funds: common.TokenAmounts, spender: string): Promise<PermitDetails[]>;
    getPermit(details: PermitDetails[], spender: string): PermitBatch;
    getPermitData(permit: PermitBatch): PermitBatchData;
    getLogic(fields: PermitTokenLogicFields, options: PermitTokenLogicOptions): Promise<{
        to: string;
        data: string;
        inputs: core.IParam.InputStruct[];
        approveTo: string;
        callback: string;
    }>;
}
