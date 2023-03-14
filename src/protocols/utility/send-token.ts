import { LogicFormData, ToObjectFields } from 'src/types';
import { protocols } from '@composable-router/protocol-logics';

export type SendTokenFields = ToObjectFields<protocols.utility.SendTokenLogicFields>;

export type SendTokenFormData = LogicFormData<SendTokenFields>;

export function newSendTokenFormData(fields: SendTokenFields): SendTokenFormData {
  return { rid: protocols.utility.SendTokenLogic.rid, fields };
}
