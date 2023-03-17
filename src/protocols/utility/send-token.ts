import { LogicFormData, ToObjectFields } from 'src/types';
import { protocols } from '@composable-router/protocol-logics';
import { v4 as uuidv4 } from 'uuid';

export type SendTokenFields = ToObjectFields<protocols.utility.SendTokenLogicFields>;

export type SendTokenFormData = LogicFormData<SendTokenFields>;

export function newSendTokenFormData(fields: SendTokenFields): SendTokenFormData {
  return { id: uuidv4(), rid: protocols.utility.SendTokenLogic.rid, fields };
}
