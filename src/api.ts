import { RouterFormData, RouterFormDataEstimateResult } from './types';
import axios from 'axios';
import axiosRetry from 'axios-retry';
import { classifying } from './utils';
import * as common from '@furucombo/composable-router-common';

const client = axios.create({ baseURL: 'https://ethtaipei-router-api.furucombo.app' });

axiosRetry(client, { retries: 3, retryDelay: axiosRetry.exponentialDelay });

export { client };

export async function getProtocolTokenList(chainId: number, rid: string) {
  const resp = await client.get(`/v1/protocols/${chainId}/${rid.replace(/:/, '/')}/tokens`);
  return classifying(resp.data.tokens);
}

export async function quote(chainId: number, rid: string, data: any) {
  const resp = await client.post(`/v1/protocols/${chainId}/${rid.replace(/:/, '/')}/quote`, data);
  return classifying(resp.data);
}

export async function estimateRouterFormData(routerFormData: RouterFormData): Promise<RouterFormDataEstimateResult> {
  const resp = await client.post('/v1/transactions?isEstimate=true', routerFormData);
  return classifying(resp.data);
}

export async function buildRouterTransactionRequest(
  routerFormData: RouterFormData
): Promise<common.TransactionRequest> {
  const resp = await client.post('/v1/transactions', routerFormData);
  return resp.data;
}
