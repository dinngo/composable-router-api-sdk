import { Declasifying, LogicFormData } from 'src/types';
import * as logics from '@furucombo/composable-router-logics';
import { v4 as uuidv4 } from 'uuid';

export type WrappedNativeTokenParams = Declasifying<logics.utility.WrappedNativeTokenLogicParams>;

export type WrappedNativeTokenFields = Declasifying<logics.utility.WrappedNativeTokenLogicFields>;

export type WrappedNativeTokenFormData = LogicFormData<WrappedNativeTokenFields>;

export function newWrappedNativeTokenFormData(fields: WrappedNativeTokenFields): WrappedNativeTokenFormData {
  return { id: uuidv4(), rid: logics.utility.WrappedNativeTokenLogic.rid, fields };
}
