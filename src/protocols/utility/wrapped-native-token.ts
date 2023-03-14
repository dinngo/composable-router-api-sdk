import { LogicFormData } from '../../types';
import * as common from '@composable-router/common';
import { protocols } from '@composable-router/protocol-logics';

export type WrappedNativeTokenFormData = LogicFormData<protocols.utility.WrappedNativeTokenLogicFields>;

export function newWrappedNativeTokenFormData(
  input: common.TokenAmountObject,
  output: common.TokenAmountObject
): WrappedNativeTokenFormData {
  return { rid: protocols.utility.WrappedNativeTokenLogic.rid, fields: { input, output } };
}
