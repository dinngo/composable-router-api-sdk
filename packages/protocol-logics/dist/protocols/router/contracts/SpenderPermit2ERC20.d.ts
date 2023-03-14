import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from 'ethers';
import type { FunctionFragment, Result } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from './common';
export declare namespace ISignatureTransfer {
    type TokenPermissionsStruct = {
        token: PromiseOrValue<string>;
        amount: PromiseOrValue<BigNumberish>;
    };
    type TokenPermissionsStructOutput = [string, BigNumber] & {
        token: string;
        amount: BigNumber;
    };
    type PermitTransferFromStruct = {
        permitted: ISignatureTransfer.TokenPermissionsStruct;
        nonce: PromiseOrValue<BigNumberish>;
        deadline: PromiseOrValue<BigNumberish>;
    };
    type PermitTransferFromStructOutput = [
        ISignatureTransfer.TokenPermissionsStructOutput,
        BigNumber,
        BigNumber
    ] & {
        permitted: ISignatureTransfer.TokenPermissionsStructOutput;
        nonce: BigNumber;
        deadline: BigNumber;
    };
    type SignatureTransferDetailsStruct = {
        to: PromiseOrValue<string>;
        requestedAmount: PromiseOrValue<BigNumberish>;
    };
    type SignatureTransferDetailsStructOutput = [string, BigNumber] & {
        to: string;
        requestedAmount: BigNumber;
    };
    type PermitBatchTransferFromStruct = {
        permitted: ISignatureTransfer.TokenPermissionsStruct[];
        nonce: PromiseOrValue<BigNumberish>;
        deadline: PromiseOrValue<BigNumberish>;
    };
    type PermitBatchTransferFromStructOutput = [
        ISignatureTransfer.TokenPermissionsStructOutput[],
        BigNumber,
        BigNumber
    ] & {
        permitted: ISignatureTransfer.TokenPermissionsStructOutput[];
        nonce: BigNumber;
        deadline: BigNumber;
    };
}
export declare namespace IAllowanceTransfer {
    type AllowanceTransferDetailsStruct = {
        from: PromiseOrValue<string>;
        to: PromiseOrValue<string>;
        amount: PromiseOrValue<BigNumberish>;
        token: PromiseOrValue<string>;
    };
    type AllowanceTransferDetailsStructOutput = [string, string, BigNumber, string] & {
        from: string;
        to: string;
        amount: BigNumber;
        token: string;
    };
}
export interface SpenderPermit2ERC20Interface extends utils.Interface {
    functions: {
        'permit2()': FunctionFragment;
        'permitPullToken(((address,uint256),uint256,uint256),(address,uint256),bytes)': FunctionFragment;
        'permitPullTokens(((address,uint256)[],uint256,uint256),(address,uint256)[],bytes)': FunctionFragment;
        'pullToken(address,uint160)': FunctionFragment;
        'pullTokens((address,address,uint160,address)[])': FunctionFragment;
        'router()': FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: 'permit2' | 'permitPullToken' | 'permitPullTokens' | 'pullToken' | 'pullTokens' | 'router'): FunctionFragment;
    encodeFunctionData(functionFragment: 'permit2', values?: undefined): string;
    encodeFunctionData(functionFragment: 'permitPullToken', values: [
        ISignatureTransfer.PermitTransferFromStruct,
        ISignatureTransfer.SignatureTransferDetailsStruct,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: 'permitPullTokens', values: [
        ISignatureTransfer.PermitBatchTransferFromStruct,
        ISignatureTransfer.SignatureTransferDetailsStruct[],
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: 'pullToken', values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: 'pullTokens', values: [IAllowanceTransfer.AllowanceTransferDetailsStruct[]]): string;
    encodeFunctionData(functionFragment: 'router', values?: undefined): string;
    decodeFunctionResult(functionFragment: 'permit2', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'permitPullToken', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'permitPullTokens', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'pullToken', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'pullTokens', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'router', data: BytesLike): Result;
    events: {};
}
export interface SpenderPermit2ERC20 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SpenderPermit2ERC20Interface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        permit2(overrides?: CallOverrides): Promise<[string]>;
        permitPullToken(permit: ISignatureTransfer.PermitTransferFromStruct, transferDetails: ISignatureTransfer.SignatureTransferDetailsStruct, signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        permitPullTokens(permit: ISignatureTransfer.PermitBatchTransferFromStruct, transferDetails: ISignatureTransfer.SignatureTransferDetailsStruct[], signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        pullToken(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        pullTokens(transferDetails: IAllowanceTransfer.AllowanceTransferDetailsStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        router(overrides?: CallOverrides): Promise<[string]>;
    };
    permit2(overrides?: CallOverrides): Promise<string>;
    permitPullToken(permit: ISignatureTransfer.PermitTransferFromStruct, transferDetails: ISignatureTransfer.SignatureTransferDetailsStruct, signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    permitPullTokens(permit: ISignatureTransfer.PermitBatchTransferFromStruct, transferDetails: ISignatureTransfer.SignatureTransferDetailsStruct[], signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    pullToken(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    pullTokens(transferDetails: IAllowanceTransfer.AllowanceTransferDetailsStruct[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    router(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        permit2(overrides?: CallOverrides): Promise<string>;
        permitPullToken(permit: ISignatureTransfer.PermitTransferFromStruct, transferDetails: ISignatureTransfer.SignatureTransferDetailsStruct, signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        permitPullTokens(permit: ISignatureTransfer.PermitBatchTransferFromStruct, transferDetails: ISignatureTransfer.SignatureTransferDetailsStruct[], signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        pullToken(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        pullTokens(transferDetails: IAllowanceTransfer.AllowanceTransferDetailsStruct[], overrides?: CallOverrides): Promise<void>;
        router(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        permit2(overrides?: CallOverrides): Promise<BigNumber>;
        permitPullToken(permit: ISignatureTransfer.PermitTransferFromStruct, transferDetails: ISignatureTransfer.SignatureTransferDetailsStruct, signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        permitPullTokens(permit: ISignatureTransfer.PermitBatchTransferFromStruct, transferDetails: ISignatureTransfer.SignatureTransferDetailsStruct[], signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        pullToken(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        pullTokens(transferDetails: IAllowanceTransfer.AllowanceTransferDetailsStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        router(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        permit2(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        permitPullToken(permit: ISignatureTransfer.PermitTransferFromStruct, transferDetails: ISignatureTransfer.SignatureTransferDetailsStruct, signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        permitPullTokens(permit: ISignatureTransfer.PermitBatchTransferFromStruct, transferDetails: ISignatureTransfer.SignatureTransferDetailsStruct[], signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        pullToken(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        pullTokens(transferDetails: IAllowanceTransfer.AllowanceTransferDetailsStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        router(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
