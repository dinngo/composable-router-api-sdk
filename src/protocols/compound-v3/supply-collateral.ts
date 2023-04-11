import { Declasifying, LogicFormData } from 'src/types';
import { getProtocolTokenList } from 'src/api';
import * as logics from '@furucombo/composable-router-logics';
import { v4 as uuidv4 } from 'uuid';

export type SupplyCollateralFields = Declasifying<logics.compoundv3.SupplyCollateralLogicFields>;

export type SupplyCollateralFormData = LogicFormData<SupplyCollateralFields>;

export function newSupplyCollateralFormData(fields: SupplyCollateralFields): SupplyCollateralFormData {
  return { id: uuidv4(), rid: logics.compoundv3.SupplyCollateralLogic.rid, fields };
}

export async function getSupplyCollateralTokenList(
  chainId: number
): Promise<logics.compoundv3.SupplyCollateralLogicTokenList> {
  return getProtocolTokenList(chainId, logics.compoundv3.SupplyCollateralLogic.rid);
}
