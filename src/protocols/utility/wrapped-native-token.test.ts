import * as common from '@furucombo/composable-router-common';
import { expect } from 'chai';
import { getWrappedNativeTokenQuotation, getWrappedNativeTokenTokenList } from './wrapped-native-token';
import * as logics from '@furucombo/composable-router-logics';
import { mainnetTokens } from '@furucombo/composable-router-test-helpers';

describe('Utility WrappedNativeTokenLogic', function () {
  context('Test getTokenList', async function () {
    logics.utility.WrappedNativeTokenLogic.supportedChainIds.forEach((chainId) => {
      it(`network: ${common.getNetworkId(chainId)}`, async function () {
        const tokenList = await getWrappedNativeTokenTokenList(chainId);
        expect(tokenList).to.have.lengthOf.above(0);
      });
    });
  });

  context('Test getQuotation', async function () {
    const chainId = common.ChainId.mainnet;

    const testCases: logics.utility.WrappedNativeTokenLogicParams[] = [
      { input: new common.TokenAmount(mainnetTokens.ETH, '1'), tokenOut: mainnetTokens.WETH },
      { input: new common.TokenAmount(mainnetTokens.WETH, '1'), tokenOut: mainnetTokens.ETH },
    ];

    testCases.forEach((params, i) => {
      it(`case ${i + 1}`, async function () {
        const quotation = await getWrappedNativeTokenQuotation(chainId, params);
        expect(quotation).to.include.all.keys('input', 'output');
      });
    });
  });
});
