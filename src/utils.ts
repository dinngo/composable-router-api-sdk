import { Classifying } from './types';
import * as common from '@composable-router/common';

export function classifying<T extends Record<string, any> = any>(fields: T): Classifying<T> {
  const transformed: Record<string, any> = {};
  Object.keys(fields).forEach((key) => {
    const value = fields[key];
    transformed[key] = common.isTokenObject(value)
      ? common.Token.from(value)
      : common.isTokenAmountObject(value)
      ? common.TokenAmount.from(value)
      : common.isTokenAmountObjects(value)
      ? common.TokenAmounts.from(value)
      : value;
  });

  return transformed as Classifying<T>;
}
