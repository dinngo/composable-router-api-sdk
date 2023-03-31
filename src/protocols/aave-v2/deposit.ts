import { LogicFormData, ToObjectFields } from 'src/types';
import { protocols } from '@composable-router/logics';
import { v4 as uuidv4 } from 'uuid';

export type DepositFields = ToObjectFields<protocols.aavev2.DepositLogicFields>;

export type DepositFormData = LogicFormData<DepositFields>;

export function newDepositFormData(fields: DepositFields): DepositFormData {
  return { id: uuidv4(), rid: protocols.aavev2.DepositLogic.rid, fields };
}
