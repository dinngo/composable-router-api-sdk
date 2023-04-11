import { RouterFormData } from './types';
import { buildRouterTransactionRequest, estimateRouterFormData, getProtocolTokenList, quote } from './api';
import * as common from '@furucombo/composable-router-common';
import { expect } from 'chai';
import * as logics from '@furucombo/composable-router-logics';
import { mainnetTokens } from '@furucombo/composable-router-test-helpers';
import * as utility from 'src/protocols/utility';

describe('API client', function () {
  it('Test getProtocolTokenList', async function () {
    const tokenList = await getProtocolTokenList(common.ChainId.mainnet, logics.uniswapv3.SwapTokenLogic.rid);
    expect(tokenList).to.have.lengthOf.above(0);
  });

  it('Test quote', async function () {
    const params = { input: new common.TokenAmount(mainnetTokens.ETH, '1'), tokenOut: mainnetTokens.USDC };
    const quotation = await quote(common.ChainId.mainnet, logics.uniswapv3.SwapTokenLogic.rid, params);
    expect(quotation).to.include.all.keys('tradeType', 'input', 'output');
    expect(quotation).to.have.any.keys('path', 'fee');
  });

  const routerFormData: RouterFormData = {
    chainId: common.ChainId.mainnet,
    account: '0xaAaAaAaaAaAaAaaAaAAAAAAAAaaaAaAaAaaAaaAa',
    logics: [
      utility.newSendTokenFormData({
        input: { token: mainnetTokens.ETH, amount: '1' },
        recipient: '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB',
      }),
      utility.newSendTokenFormData({
        input: { token: mainnetTokens.USDC, amount: '1' },
        recipient: '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB',
      }),
    ],
    slippage: 100,
  };

  it('Test estimateRouterFormData', async function () {
    const estimateResult = await estimateRouterFormData(routerFormData);
    expect(estimateResult).to.include.all.keys('funds', 'balances', 'approvals', 'permitData');
  });

  it('Test buildRouterTransactionRequest', async function () {
    const transactionRequest = await buildRouterTransactionRequest(routerFormData);
    expect(transactionRequest).to.include.all.keys('to', 'data', 'value');
  });
});
