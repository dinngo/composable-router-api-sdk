import { LogicFormData, ToObjectFields } from 'src/types';
import { protocols } from '@composable-router/protocol-logics';
import { v4 as uuidv4 } from 'uuid';

export type WrappedNativeTokenFields = ToObjectFields<protocols.utility.WrappedNativeTokenLogicFields>;

export type WrappedNativeTokenFormData = LogicFormData<WrappedNativeTokenFields>;

export function newWrappedNativeTokenFormData(fields: WrappedNativeTokenFields): WrappedNativeTokenFormData {
  return { id: uuidv4(), rid: protocols.utility.WrappedNativeTokenLogic.rid, fields };
}
