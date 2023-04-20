import { FlashLoanFields, FlashLoanLogic } from 'src/types';
import { getProtocolTokenList } from 'src/api';
import * as logics from '@furucombo/composable-router-logics';
import { v4 as uuid } from 'uuid';

export async function getFlashLoanTokenList(chainId: number): Promise<logics.balancerv2.FlashLoanLogicTokenList> {
  return getProtocolTokenList(chainId, logics.balancerv2.FlashLoanLogic.rid);
}

export function newFlashLoanLogic(fields: FlashLoanFields): FlashLoanLogic {
  return { rid: logics.balancerv2.FlashLoanLogic.rid, fields };
}

export function newFlashLoanLogicPair(outputs: FlashLoanFields['outputs']): [FlashLoanLogic, FlashLoanLogic] {
  const id = uuid();
  return [newFlashLoanLogic({ id, outputs, isLoan: true }), newFlashLoanLogic({ id, outputs, isLoan: false })];
}
