import { FlashLoanFields, FlashLoanFormData } from 'src/types';
import { protocols } from '@composable-router/logics';
import { v4 as uuidv4 } from 'uuid';

export function newFlashLoanFormData(fields: FlashLoanFields): FlashLoanFormData {
  return { id: uuidv4(), rid: protocols.aavev2.FlashLoanLogic.rid, fields };
}
