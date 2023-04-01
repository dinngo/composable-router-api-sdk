import { Declasifying } from './types';
import { classifying } from './utils';
import * as common from '@composable-router/common';
import * as core from '@composable-router/core';
import { expect } from 'chai';
import { mainnetTokens } from '@composable-router/test-helpers';

describe('Test classifying', function () {
  it('TokenToTokenExactInFields', function () {
    const fieldsObject: Declasifying<core.TokenToTokenExactInFields> = {
      input: { token: mainnetTokens.ETH, amount: '1' },
      output: { token: mainnetTokens.USDC, amount: '1' },
    };
    const fields = classifying(fieldsObject);
    expect(common.isTokenAmount(fields.input)).to.be.true;
    expect(common.isTokenAmount(fields.output)).to.be.true;
  });

  it('TokenToTokenExactInParams', function () {
    const fieldsObject: Declasifying<core.TokenToTokenExactInParams> = {
      input: { token: mainnetTokens.ETH, amount: '1' },
      tokenOut: mainnetTokens.USDC,
    };
    const fields = classifying(fieldsObject);
    expect(common.isTokenAmount(fields.input)).to.be.true;
    expect(common.isToken(fields.tokenOut)).to.be.true;
  });

  it('TokensInFields', function () {
    const fieldsObject: Declasifying<core.TokensInFields> = {
      inputs: [
        { token: mainnetTokens.ETH, amount: '1' },
        { token: mainnetTokens.ETH, amount: '1' },
      ],
    };
    const fields = classifying(fieldsObject);
    expect(common.isTokenAmounts(fields.inputs)).to.be.true;
  });
});
