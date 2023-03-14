import { LogicFormData, ToObjectFields } from 'src/types';
import { protocols } from '@composable-router/protocol-logics';

export type DepositFields = ToObjectFields<protocols.aavev2.DepositLogicFields>;

export type DepositFormData = LogicFormData<DepositFields>;

export function newDepositFormData(fields: DepositFields): DepositFormData {
  return { rid: protocols.aavev2.DepositLogic.rid, fields };
}
