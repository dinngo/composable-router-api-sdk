import { LogicFormData, ToObjectFields } from 'src/types';
import { protocols } from '@composable-router/protocol-logics';

export type WrappedNativeTokenFields = ToObjectFields<protocols.utility.WrappedNativeTokenLogicFields>;

export type WrappedNativeTokenFormData = LogicFormData<WrappedNativeTokenFields>;

export function newWrappedNativeTokenFormData(fields: WrappedNativeTokenFields): WrappedNativeTokenFormData {
  return { rid: protocols.utility.WrappedNativeTokenLogic.rid, fields };
}
