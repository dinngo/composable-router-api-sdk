import { FlashLoanFields, FlashLoanLogic } from 'src/types';
import { getProtocolTokenList } from 'src/api';
import * as logics from '@furucombo/composable-router-logics';

export async function getFlashLoanTokenList(chainId: number): Promise<logics.balancerv2.FlashLoanLogicTokenList> {
  return getProtocolTokenList(chainId, logics.balancerv2.FlashLoanLogic.rid);
}

export function newFlashLoanLogic(fields: FlashLoanFields): FlashLoanLogic {
  return { rid: logics.balancerv2.FlashLoanLogic.rid, fields };
}
