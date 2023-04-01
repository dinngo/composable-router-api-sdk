import { Declasifying, LogicFormData } from 'src/types';
import * as logics from '@composable-router/logics';
import { v4 as uuidv4 } from 'uuid';

export type SendTokenFields = Declasifying<logics.utility.SendTokenLogicFields>;

export type SendTokenFormData = LogicFormData<SendTokenFields>;

export function newSendTokenFormData(fields: SendTokenFields): SendTokenFormData {
  return { id: uuidv4(), rid: logics.utility.SendTokenLogic.rid, fields };
}
