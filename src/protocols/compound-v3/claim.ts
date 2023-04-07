import { Declasifying, LogicFormData } from 'src/types';
import * as logics from '@furucombo/composable-router-logics';
import { v4 as uuidv4 } from 'uuid';

export type ClaimParams = Declasifying<logics.compoundv3.ClaimLogicParams>;

export type ClaimFields = Declasifying<logics.compoundv3.ClaimLogicFields>;

export type ClaimFormData = LogicFormData<ClaimFields>;

export function newClaimFormData(fields: ClaimFields): ClaimFormData {
  return { id: uuidv4(), rid: logics.compoundv3.ClaimLogic.rid, fields };
}
