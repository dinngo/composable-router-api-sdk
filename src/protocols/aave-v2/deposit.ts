import { Declasifying, LogicFormData } from 'src/types';
import * as logics from '@composable-router/logics';
import { v4 as uuidv4 } from 'uuid';

export type DepositParams = Declasifying<logics.aavev2.DepositLogicParams>;

export type DepositFields = Declasifying<logics.aavev2.DepositLogicFields>;

export type DepositFormData = LogicFormData<DepositFields>;

export function newDepositFormData(fields: DepositFields): DepositFormData {
  return { id: uuidv4(), rid: logics.aavev2.DepositLogic.rid, fields };
}
