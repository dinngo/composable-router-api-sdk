import * as common from '@composable-router/common';
import * as core from '@composable-router/core';
export type SendTokenLogicFields = core.TokenToUserFields;
export declare class SendTokenLogic extends core.Logic implements core.LogicTokenListInterface {
    static readonly supportedChainIds: common.ChainId[];
    getTokenList(): Promise<common.Token[]>;
    getLogic(fields: SendTokenLogicFields): Promise<{
        to: string;
        data: string;
        inputs: core.IParam.InputStruct[];
        approveTo: string;
        callback: string;
    }>;
}
