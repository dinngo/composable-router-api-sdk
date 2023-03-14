import { FlashLoanFields, FlashLoanFormData } from 'src/types';
import { protocols } from '@composable-router/protocol-logics';

export function newFlashLoanFormData(fields: FlashLoanFields): FlashLoanFormData {
  return { rid: protocols.aavev2.FlashLoanLogic.rid, fields };
}
