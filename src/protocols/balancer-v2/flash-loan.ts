import { FlashLoanFields, FlashLoanFormData } from 'src/types';
import { protocols } from '@composable-router/protocol-logics';
import { v4 as uuidv4 } from 'uuid';

export function newFlashLoanFormData(fields: FlashLoanFields): FlashLoanFormData {
  return { id: uuidv4(), rid: protocols.balancerv2.FlashLoanLogic.rid, fields };
}
