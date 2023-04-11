import * as common from '@furucombo/composable-router-common';
import { expect } from 'chai';
import { getSendTokenTokenList } from './send-token';
import * as logics from '@furucombo/composable-router-logics';

describe('Utility SendTokenLogic', function () {
  context('Test getTokenList', async function () {
    logics.utility.SendTokenLogic.supportedChainIds.forEach((chainId) => {
      it(`network: ${common.getNetworkId(chainId)}`, async function () {
        const tokenList = await getSendTokenTokenList(chainId);
        expect(tokenList).to.have.lengthOf.above(0);
      });
    });
  });
});
