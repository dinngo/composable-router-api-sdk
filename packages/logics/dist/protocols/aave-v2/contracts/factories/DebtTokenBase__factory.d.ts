import { Signer } from 'ethers';
import type { Provider } from '@ethersproject/providers';
import type { DebtTokenBase, DebtTokenBaseInterface } from '../DebtTokenBase';
export declare class DebtTokenBase__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "delegatee";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "approveDelegation";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "fromUser";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "toUser";
            readonly type: "address";
        }];
        readonly name: "borrowAllowance";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): DebtTokenBaseInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): DebtTokenBase;
}
