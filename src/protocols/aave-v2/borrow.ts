import { LogicFormData, ToObjectFields } from 'src/types';
import { protocols } from '@composable-router/logics';
import { v4 as uuidv4 } from 'uuid';

export type BorrowFields = ToObjectFields<protocols.aavev2.BorrowLogicFields>;

export type BorrowFormData = LogicFormData<BorrowFields>;

export function newBorrowFormData(fields: BorrowFields): BorrowFormData {
  return { id: uuidv4(), rid: protocols.aavev2.BorrowLogic.rid, fields };
}
