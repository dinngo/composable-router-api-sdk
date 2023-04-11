import * as common from '@furucombo/composable-router-common';
import { expect } from 'chai';
import { getBorrowTokenList } from './borrow';
import * as logics from '@furucombo/composable-router-logics';

describe('AaveV2 BorrowLogic', function () {
  context('Test getTokenList', async function () {
    logics.aavev2.BorrowLogic.supportedChainIds.forEach((chainId) => {
      it(`network: ${common.getNetworkId(chainId)}`, async function () {
        const tokenList = await getBorrowTokenList(chainId);
        expect(tokenList).to.have.lengthOf.above(0);
      });
    });
  });
});
