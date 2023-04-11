import * as common from '@furucombo/composable-router-common';
import { expect } from 'chai';
import { getFlashLoanTokenList } from './flash-loan';
import * as logics from '@furucombo/composable-router-logics';

describe('AaveV3 FlashLoanLogic', function () {
  context('Test getTokenList', async function () {
    logics.aavev3.FlashLoanLogic.supportedChainIds.forEach((chainId) => {
      it(`network: ${common.getNetworkId(chainId)}`, async function () {
        const tokenList = await getFlashLoanTokenList(chainId);
        expect(tokenList).to.have.lengthOf.above(0);
      });
    });
  });
});
