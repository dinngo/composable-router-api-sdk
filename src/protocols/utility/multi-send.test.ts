import * as common from '@furucombo/composable-router-common';
import { expect } from 'chai';
import { getMultiSendTokenList } from './multi-send';
import * as logics from '@furucombo/composable-router-logics';

describe('Utility MultiSendLogic', function () {
  context('Test getTokenList', async function () {
    logics.utility.MultiSendLogic.supportedChainIds.forEach((chainId) => {
      it(`network: ${common.getNetworkId(chainId)}`, async function () {
        const tokenList = await getMultiSendTokenList(chainId);
        expect(tokenList).to.have.lengthOf.above(0);
      });
    });
  });
});
