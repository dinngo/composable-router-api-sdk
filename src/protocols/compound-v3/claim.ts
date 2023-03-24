import { LogicFormData, ToObjectFields } from 'src/types';
import { protocols } from '@composable-router/protocol-logics';
import { v4 as uuidv4 } from 'uuid';

export type ClaimFields = ToObjectFields<protocols.compoundv3.ClaimLogicFields>;

export type ClaimFormData = LogicFormData<ClaimFields>;

export function newClaimFormData(fields: ClaimFields): ClaimFormData {
  return { id: uuidv4(), rid: protocols.compoundv3.ClaimLogic.rid, fields };
}
