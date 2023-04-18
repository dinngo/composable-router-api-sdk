import { Declasifying, Logic } from 'src/types';
import { getProtocolTokenList } from 'src/api';
import * as logics from '@furucombo/composable-router-logics';
import { v4 as uuidv4 } from 'uuid';

export type WithdrawCollateralFields = Declasifying<logics.compoundv3.WithdrawCollateralLogicFields>;

export type WithdrawCollateralLogic = Logic<WithdrawCollateralFields>;

export function newWithdrawCollateralLogic(fields: WithdrawCollateralFields): WithdrawCollateralLogic {
  return { id: uuidv4(), rid: logics.compoundv3.WithdrawCollateralLogic.rid, fields };
}

export async function getWithdrawCollateralTokenList(
  chainId: number
): Promise<logics.compoundv3.WithdrawCollateralLogicTokenList> {
  return getProtocolTokenList(chainId, logics.compoundv3.WithdrawCollateralLogic.rid);
}
