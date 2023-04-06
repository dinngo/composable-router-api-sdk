import { Declasifying, LogicFormData } from 'src/types';
import * as core from '@composable-router/core';
import { v4 as uuidv4 } from 'uuid';

export const MULTI_SEND_RID = 'utility:multi-send';

export type MultiSendLogicFields = core.TokenToUserFields[];

export type MultiSendFields = Declasifying<MultiSendLogicFields>;

export type MultiSendFormData = LogicFormData<MultiSendFields>;

export function newMultiSendFormData(fields: MultiSendFields): MultiSendFormData {
  return { id: uuidv4(), rid: MULTI_SEND_RID, fields };
}
