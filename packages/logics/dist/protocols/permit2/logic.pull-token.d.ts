import * as common from '@composable-router/common';
import * as core from '@composable-router/core';
export type PullTokenLogicFields = core.TokensInFields;
export type PullTokenLogicOptions = Pick<core.GlobalOptions, 'account'>;
export declare class PullTokenLogic extends core.Logic {
    static readonly supportedChainIds: common.ChainId[];
    getLogic(fields: PullTokenLogicFields, options: PullTokenLogicOptions): Promise<{
        to: string;
        data: string;
        inputs: core.IParam.InputStruct[];
        wrapMode: number;
        approveTo: string;
        callback: string;
    }>;
}
