import { PermitBatch, PermitSingle } from '@uniswap/permit2-sdk';
export declare function getDeadline(expiration: number): number;
export declare function isPermitSingle(permit: PermitSingle | PermitBatch): permit is PermitSingle;
