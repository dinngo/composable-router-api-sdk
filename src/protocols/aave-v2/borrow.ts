import { LogicFormData, ToObjectFields } from 'src/types';
import { protocols } from '@composable-router/protocol-logics';

export type BorrowFields = ToObjectFields<protocols.aavev2.BorrowLogicFields>;

export type BorrowFormData = LogicFormData<BorrowFields>;

export function newBorrowFormData(fields: BorrowFields): BorrowFormData {
  return { rid: protocols.aavev2.BorrowLogic.rid, fields };
}
