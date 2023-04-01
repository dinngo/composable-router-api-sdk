import { FlashLoanFields, FlashLoanFormData } from 'src/types';
import * as logics from '@composable-router/logics';
import { v4 as uuidv4 } from 'uuid';

export function newFlashLoanFormData(fields: FlashLoanFields): FlashLoanFormData {
  return { id: uuidv4(), rid: logics.aavev2.FlashLoanLogic.rid, fields };
}
