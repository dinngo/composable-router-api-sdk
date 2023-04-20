import * as api from '@furucombo/composable-router-api';

// interface SwapTokenParams {
//   input: {
//     token: {
//       chainId: number;
//       address: string;
//       decimals: number;
//       symbol: string;
//       name: string;
//     };
//     amount: string;
//   };
//   tokenOut: {
//     chainId: number;
//     address: string;
//     decimals: number;
//     symbol: string;
//     name: string;
//   };
// }

// interface SwapTokenFields {
//   input: {
//     token: {
//       chainId: number;
//       address: string;
//       decimals: number;
//       symbol: string;
//       name: string;
//     };
//     amount: string;
//   };
//   output: {
//     token: {
//       chainId: number;
//       address: string;
//       decimals: number;
//       symbol: string;
//       name: string;
//     };
//     amount: string;
//   };
// }

// interface SwapTokenLogic {
//   rid: string;
//   fields: SwapTokenFields;
// }

(async () => {
  const chainId = 1;

  const tokenList = await api.protocols.paraswapv5.getSwapTokenTokenList(chainId);
  const tokenIn = tokenList[0];
  const tokenOut = tokenList[2];
  console.log('tokenIn :>> ', JSON.stringify(tokenIn, null, 2));
  console.log('tokenOut :>> ', JSON.stringify(tokenOut, null, 2));

  const swapTokenQuotation = await api.protocols.paraswapv5.getSwapTokenQuotation(chainId, {
    input: {
      token: tokenIn,
      amount: '10',
    },
    tokenOut,
  });
  console.log('swapTokenQuotation :>> ', JSON.stringify(swapTokenQuotation, null, 2));

  const swapTokenLogic = await api.protocols.paraswapv5.newSwapTokenLogic(swapTokenQuotation);
  console.log('swapTokenLogic :>> ', JSON.stringify(swapTokenLogic, null, 2));
})();
