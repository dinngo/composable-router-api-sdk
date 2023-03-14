import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from './common';
export declare namespace IAllowanceTransfer {
    type TokenSpenderPairStruct = {
        token: PromiseOrValue<string>;
        spender: PromiseOrValue<string>;
    };
    type TokenSpenderPairStructOutput = [string, string] & {
        token: string;
        spender: string;
    };
    type PermitDetailsStruct = {
        token: PromiseOrValue<string>;
        amount: PromiseOrValue<BigNumberish>;
        expiration: PromiseOrValue<BigNumberish>;
        nonce: PromiseOrValue<BigNumberish>;
    };
    type PermitDetailsStructOutput = [string, BigNumber, number, number] & {
        token: string;
        amount: BigNumber;
        expiration: number;
        nonce: number;
    };
    type PermitBatchStruct = {
        details: IAllowanceTransfer.PermitDetailsStruct[];
        spender: PromiseOrValue<string>;
        sigDeadline: PromiseOrValue<BigNumberish>;
    };
    type PermitBatchStructOutput = [IAllowanceTransfer.PermitDetailsStructOutput[], string, BigNumber] & {
        details: IAllowanceTransfer.PermitDetailsStructOutput[];
        spender: string;
        sigDeadline: BigNumber;
    };
    type PermitSingleStruct = {
        details: IAllowanceTransfer.PermitDetailsStruct;
        spender: PromiseOrValue<string>;
        sigDeadline: PromiseOrValue<BigNumberish>;
    };
    type PermitSingleStructOutput = [IAllowanceTransfer.PermitDetailsStructOutput, string, BigNumber] & {
        details: IAllowanceTransfer.PermitDetailsStructOutput;
        spender: string;
        sigDeadline: BigNumber;
    };
    type AllowanceTransferDetailsStruct = {
        token: PromiseOrValue<string>;
        amount: PromiseOrValue<BigNumberish>;
        to: PromiseOrValue<string>;
    };
    type AllowanceTransferDetailsStructOutput = [string, BigNumber, string] & {
        token: string;
        amount: BigNumber;
        to: string;
    };
}
export declare namespace ISignatureTransfer {
    type TokenPermissionsStruct = {
        token: PromiseOrValue<string>;
        amount: PromiseOrValue<BigNumberish>;
    };
    type TokenPermissionsStructOutput = [string, BigNumber] & {
        token: string;
        amount: BigNumber;
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
    type SignatureTransferDetailsStruct = {
        to: PromiseOrValue<string>;
        requestedAmount: PromiseOrValue<BigNumberish>;
    };
    type SignatureTransferDetailsStructOutput = [string, BigNumber] & {
        to: string;
        requestedAmount: BigNumber;
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
}
export interface Permit2Interface extends utils.Interface {
    functions: {
        'DOMAIN_SEPARATOR()': FunctionFragment;
        'allowance(address,address,address)': FunctionFragment;
        'approve(address,address,uint160,uint48)': FunctionFragment;
        'invalidateNonces(address,address,uint48)': FunctionFragment;
        'invalidateUnorderedNonces(uint256,uint256)': FunctionFragment;
        'lockdown((address,address)[])': FunctionFragment;
        'nonceBitmap(address,uint256)': FunctionFragment;
        'permit(address,((address,uint160,uint48,uint48)[],address,uint256),bytes)': FunctionFragment;
        'permit(address,((address,uint160,uint48,uint48),address,uint256),bytes)': FunctionFragment;
        'permitTransferFrom(((address,uint256)[],uint256,uint256),address,(address,uint256)[],bytes)': FunctionFragment;
        'permitTransferFrom(((address,uint256),uint256,uint256),address,address,uint256,bytes)': FunctionFragment;
        'permitWitnessTransferFrom(((address,uint256),uint256,uint256),address,address,uint256,bytes32,string,string,bytes)': FunctionFragment;
        'permitWitnessTransferFrom(((address,uint256)[],uint256,uint256),address,(address,uint256)[],bytes32,string,string,bytes)': FunctionFragment;
        'transferFrom(address,address,address,uint160)': FunctionFragment;
        'transferFrom(address,(address,uint160,address)[])': FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: 'DOMAIN_SEPARATOR' | 'allowance' | 'approve' | 'invalidateNonces' | 'invalidateUnorderedNonces' | 'lockdown' | 'nonceBitmap' | 'permit(address,((address,uint160,uint48,uint48)[],address,uint256),bytes)' | 'permit(address,((address,uint160,uint48,uint48),address,uint256),bytes)' | 'permitTransferFrom(((address,uint256)[],uint256,uint256),address,(address,uint256)[],bytes)' | 'permitTransferFrom(((address,uint256),uint256,uint256),address,address,uint256,bytes)' | 'permitWitnessTransferFrom(((address,uint256),uint256,uint256),address,address,uint256,bytes32,string,string,bytes)' | 'permitWitnessTransferFrom(((address,uint256)[],uint256,uint256),address,(address,uint256)[],bytes32,string,string,bytes)' | 'transferFrom(address,address,address,uint160)' | 'transferFrom(address,(address,uint160,address)[])'): FunctionFragment;
    encodeFunctionData(functionFragment: 'DOMAIN_SEPARATOR', values?: undefined): string;
    encodeFunctionData(functionFragment: 'allowance', values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'approve', values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: 'invalidateNonces', values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: 'invalidateUnorderedNonces', values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: 'lockdown', values: [IAllowanceTransfer.TokenSpenderPairStruct[]]): string;
    encodeFunctionData(functionFragment: 'nonceBitmap', values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: 'permit(address,((address,uint160,uint48,uint48)[],address,uint256),bytes)', values: [PromiseOrValue<string>, IAllowanceTransfer.PermitBatchStruct, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: 'permit(address,((address,uint160,uint48,uint48),address,uint256),bytes)', values: [PromiseOrValue<string>, IAllowanceTransfer.PermitSingleStruct, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: 'permitTransferFrom(((address,uint256)[],uint256,uint256),address,(address,uint256)[],bytes)', values: [
        ISignatureTransfer.PermitBatchTransferFromStruct,
        PromiseOrValue<string>,
        ISignatureTransfer.SignatureTransferDetailsStruct[],
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: 'permitTransferFrom(((address,uint256),uint256,uint256),address,address,uint256,bytes)', values: [
        ISignatureTransfer.PermitTransferFromStruct,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: 'permitWitnessTransferFrom(((address,uint256),uint256,uint256),address,address,uint256,bytes32,string,string,bytes)', values: [
        ISignatureTransfer.PermitTransferFromStruct,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: 'permitWitnessTransferFrom(((address,uint256)[],uint256,uint256),address,(address,uint256)[],bytes32,string,string,bytes)', values: [
        ISignatureTransfer.PermitBatchTransferFromStruct,
        PromiseOrValue<string>,
        ISignatureTransfer.SignatureTransferDetailsStruct[],
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: 'transferFrom(address,address,address,uint160)', values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: 'transferFrom(address,(address,uint160,address)[])', values: [PromiseOrValue<string>, IAllowanceTransfer.AllowanceTransferDetailsStruct[]]): string;
    decodeFunctionResult(functionFragment: 'DOMAIN_SEPARATOR', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'allowance', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'approve', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'invalidateNonces', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'invalidateUnorderedNonces', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'lockdown', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'nonceBitmap', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'permit(address,((address,uint160,uint48,uint48)[],address,uint256),bytes)', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'permit(address,((address,uint160,uint48,uint48),address,uint256),bytes)', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'permitTransferFrom(((address,uint256)[],uint256,uint256),address,(address,uint256)[],bytes)', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'permitTransferFrom(((address,uint256),uint256,uint256),address,address,uint256,bytes)', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'permitWitnessTransferFrom(((address,uint256),uint256,uint256),address,address,uint256,bytes32,string,string,bytes)', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'permitWitnessTransferFrom(((address,uint256)[],uint256,uint256),address,(address,uint256)[],bytes32,string,string,bytes)', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'transferFrom(address,address,address,uint160)', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'transferFrom(address,(address,uint160,address)[])', data: BytesLike): Result;
    events: {
        'Approval(address,address,address,uint160,uint48)': EventFragment;
        'Lockdown(address,address,address)': EventFragment;
        'NonceInvalidation(address,address,address,uint48,uint48)': EventFragment;
        'UnorderedNonceInvalidation(address,uint256,uint256)': EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: 'Approval'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'Lockdown'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'NonceInvalidation'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'UnorderedNonceInvalidation'): EventFragment;
}
export interface ApprovalEventObject {
    owner: string;
    token: string;
    spender: string;
    amount: BigNumber;
    expiration: number;
}
export type ApprovalEvent = TypedEvent<[string, string, string, BigNumber, number], ApprovalEventObject>;
export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;
export interface LockdownEventObject {
    owner: string;
    token: string;
    spender: string;
}
export type LockdownEvent = TypedEvent<[string, string, string], LockdownEventObject>;
export type LockdownEventFilter = TypedEventFilter<LockdownEvent>;
export interface NonceInvalidationEventObject {
    owner: string;
    token: string;
    spender: string;
    newNonce: number;
    oldNonce: number;
}
export type NonceInvalidationEvent = TypedEvent<[string, string, string, number, number], NonceInvalidationEventObject>;
export type NonceInvalidationEventFilter = TypedEventFilter<NonceInvalidationEvent>;
export interface UnorderedNonceInvalidationEventObject {
    owner: string;
    word: BigNumber;
    mask: BigNumber;
}
export type UnorderedNonceInvalidationEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], UnorderedNonceInvalidationEventObject>;
export type UnorderedNonceInvalidationEventFilter = TypedEventFilter<UnorderedNonceInvalidationEvent>;
export interface Permit2 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: Permit2Interface;
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
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<[string]>;
        allowance(owner: PromiseOrValue<string>, token: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            number,
            number
        ] & {
            amount: BigNumber;
            expiration: number;
            nonce: number;
        }>;
        approve(token: PromiseOrValue<string>, spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, expiration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        invalidateNonces(token: PromiseOrValue<string>, spender: PromiseOrValue<string>, newNonce: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        invalidateUnorderedNonces(wordPos: PromiseOrValue<BigNumberish>, mask: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        lockdown(approvals: IAllowanceTransfer.TokenSpenderPairStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        nonceBitmap(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        'permit(address,((address,uint160,uint48,uint48)[],address,uint256),bytes)'(owner: PromiseOrValue<string>, permitBatch: IAllowanceTransfer.PermitBatchStruct, signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        'permit(address,((address,uint160,uint48,uint48),address,uint256),bytes)'(owner: PromiseOrValue<string>, permitSingle: IAllowanceTransfer.PermitSingleStruct, signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        'permitTransferFrom(((address,uint256)[],uint256,uint256),address,(address,uint256)[],bytes)'(permit: ISignatureTransfer.PermitBatchTransferFromStruct, owner: PromiseOrValue<string>, transferDetails: ISignatureTransfer.SignatureTransferDetailsStruct[], signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        'permitTransferFrom(((address,uint256),uint256,uint256),address,address,uint256,bytes)'(permit: ISignatureTransfer.PermitTransferFromStruct, owner: PromiseOrValue<string>, to: PromiseOrValue<string>, requestedAmount: PromiseOrValue<BigNumberish>, signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        'permitWitnessTransferFrom(((address,uint256),uint256,uint256),address,address,uint256,bytes32,string,string,bytes)'(permit: ISignatureTransfer.PermitTransferFromStruct, owner: PromiseOrValue<string>, to: PromiseOrValue<string>, requestedAmount: PromiseOrValue<BigNumberish>, witness: PromiseOrValue<BytesLike>, witnessTypeName: PromiseOrValue<string>, witnessType: PromiseOrValue<string>, signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        'permitWitnessTransferFrom(((address,uint256)[],uint256,uint256),address,(address,uint256)[],bytes32,string,string,bytes)'(permit: ISignatureTransfer.PermitBatchTransferFromStruct, owner: PromiseOrValue<string>, transferDetails: ISignatureTransfer.SignatureTransferDetailsStruct[], witness: PromiseOrValue<BytesLike>, witnessTypeName: PromiseOrValue<string>, witnessType: PromiseOrValue<string>, signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        'transferFrom(address,address,address,uint160)'(token: PromiseOrValue<string>, from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        'transferFrom(address,(address,uint160,address)[])'(from: PromiseOrValue<string>, transferDetails: IAllowanceTransfer.AllowanceTransferDetailsStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;
    allowance(owner: PromiseOrValue<string>, token: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
        BigNumber,
        number,
        number
    ] & {
        amount: BigNumber;
        expiration: number;
        nonce: number;
    }>;
    approve(token: PromiseOrValue<string>, spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, expiration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    invalidateNonces(token: PromiseOrValue<string>, spender: PromiseOrValue<string>, newNonce: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    invalidateUnorderedNonces(wordPos: PromiseOrValue<BigNumberish>, mask: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    lockdown(approvals: IAllowanceTransfer.TokenSpenderPairStruct[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    nonceBitmap(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    'permit(address,((address,uint160,uint48,uint48)[],address,uint256),bytes)'(owner: PromiseOrValue<string>, permitBatch: IAllowanceTransfer.PermitBatchStruct, signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    'permit(address,((address,uint160,uint48,uint48),address,uint256),bytes)'(owner: PromiseOrValue<string>, permitSingle: IAllowanceTransfer.PermitSingleStruct, signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    'permitTransferFrom(((address,uint256)[],uint256,uint256),address,(address,uint256)[],bytes)'(permit: ISignatureTransfer.PermitBatchTransferFromStruct, owner: PromiseOrValue<string>, transferDetails: ISignatureTransfer.SignatureTransferDetailsStruct[], signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    'permitTransferFrom(((address,uint256),uint256,uint256),address,address,uint256,bytes)'(permit: ISignatureTransfer.PermitTransferFromStruct, owner: PromiseOrValue<string>, to: PromiseOrValue<string>, requestedAmount: PromiseOrValue<BigNumberish>, signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    'permitWitnessTransferFrom(((address,uint256),uint256,uint256),address,address,uint256,bytes32,string,string,bytes)'(permit: ISignatureTransfer.PermitTransferFromStruct, owner: PromiseOrValue<string>, to: PromiseOrValue<string>, requestedAmount: PromiseOrValue<BigNumberish>, witness: PromiseOrValue<BytesLike>, witnessTypeName: PromiseOrValue<string>, witnessType: PromiseOrValue<string>, signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    'permitWitnessTransferFrom(((address,uint256)[],uint256,uint256),address,(address,uint256)[],bytes32,string,string,bytes)'(permit: ISignatureTransfer.PermitBatchTransferFromStruct, owner: PromiseOrValue<string>, transferDetails: ISignatureTransfer.SignatureTransferDetailsStruct[], witness: PromiseOrValue<BytesLike>, witnessTypeName: PromiseOrValue<string>, witnessType: PromiseOrValue<string>, signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    'transferFrom(address,address,address,uint160)'(token: PromiseOrValue<string>, from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    'transferFrom(address,(address,uint160,address)[])'(from: PromiseOrValue<string>, transferDetails: IAllowanceTransfer.AllowanceTransferDetailsStruct[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;
        allowance(owner: PromiseOrValue<string>, token: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            number,
            number
        ] & {
            amount: BigNumber;
            expiration: number;
            nonce: number;
        }>;
        approve(token: PromiseOrValue<string>, spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, expiration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        invalidateNonces(token: PromiseOrValue<string>, spender: PromiseOrValue<string>, newNonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        invalidateUnorderedNonces(wordPos: PromiseOrValue<BigNumberish>, mask: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        lockdown(approvals: IAllowanceTransfer.TokenSpenderPairStruct[], overrides?: CallOverrides): Promise<void>;
        nonceBitmap(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        'permit(address,((address,uint160,uint48,uint48)[],address,uint256),bytes)'(owner: PromiseOrValue<string>, permitBatch: IAllowanceTransfer.PermitBatchStruct, signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        'permit(address,((address,uint160,uint48,uint48),address,uint256),bytes)'(owner: PromiseOrValue<string>, permitSingle: IAllowanceTransfer.PermitSingleStruct, signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        'permitTransferFrom(((address,uint256)[],uint256,uint256),address,(address,uint256)[],bytes)'(permit: ISignatureTransfer.PermitBatchTransferFromStruct, owner: PromiseOrValue<string>, transferDetails: ISignatureTransfer.SignatureTransferDetailsStruct[], signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        'permitTransferFrom(((address,uint256),uint256,uint256),address,address,uint256,bytes)'(permit: ISignatureTransfer.PermitTransferFromStruct, owner: PromiseOrValue<string>, to: PromiseOrValue<string>, requestedAmount: PromiseOrValue<BigNumberish>, signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        'permitWitnessTransferFrom(((address,uint256),uint256,uint256),address,address,uint256,bytes32,string,string,bytes)'(permit: ISignatureTransfer.PermitTransferFromStruct, owner: PromiseOrValue<string>, to: PromiseOrValue<string>, requestedAmount: PromiseOrValue<BigNumberish>, witness: PromiseOrValue<BytesLike>, witnessTypeName: PromiseOrValue<string>, witnessType: PromiseOrValue<string>, signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        'permitWitnessTransferFrom(((address,uint256)[],uint256,uint256),address,(address,uint256)[],bytes32,string,string,bytes)'(permit: ISignatureTransfer.PermitBatchTransferFromStruct, owner: PromiseOrValue<string>, transferDetails: ISignatureTransfer.SignatureTransferDetailsStruct[], witness: PromiseOrValue<BytesLike>, witnessTypeName: PromiseOrValue<string>, witnessType: PromiseOrValue<string>, signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        'transferFrom(address,address,address,uint160)'(token: PromiseOrValue<string>, from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        'transferFrom(address,(address,uint160,address)[])'(from: PromiseOrValue<string>, transferDetails: IAllowanceTransfer.AllowanceTransferDetailsStruct[], overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        'Approval(address,address,address,uint160,uint48)'(owner?: PromiseOrValue<string> | null, token?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, amount?: null, expiration?: null): ApprovalEventFilter;
        Approval(owner?: PromiseOrValue<string> | null, token?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, amount?: null, expiration?: null): ApprovalEventFilter;
        'Lockdown(address,address,address)'(owner?: PromiseOrValue<string> | null, token?: null, spender?: null): LockdownEventFilter;
        Lockdown(owner?: PromiseOrValue<string> | null, token?: null, spender?: null): LockdownEventFilter;
        'NonceInvalidation(address,address,address,uint48,uint48)'(owner?: PromiseOrValue<string> | null, token?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, newNonce?: null, oldNonce?: null): NonceInvalidationEventFilter;
        NonceInvalidation(owner?: PromiseOrValue<string> | null, token?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, newNonce?: null, oldNonce?: null): NonceInvalidationEventFilter;
        'UnorderedNonceInvalidation(address,uint256,uint256)'(owner?: PromiseOrValue<string> | null, word?: null, mask?: null): UnorderedNonceInvalidationEventFilter;
        UnorderedNonceInvalidation(owner?: PromiseOrValue<string> | null, word?: null, mask?: null): UnorderedNonceInvalidationEventFilter;
    };
    estimateGas: {
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<BigNumber>;
        allowance(owner: PromiseOrValue<string>, token: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        approve(token: PromiseOrValue<string>, spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, expiration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        invalidateNonces(token: PromiseOrValue<string>, spender: PromiseOrValue<string>, newNonce: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        invalidateUnorderedNonces(wordPos: PromiseOrValue<BigNumberish>, mask: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        lockdown(approvals: IAllowanceTransfer.TokenSpenderPairStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        nonceBitmap(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        'permit(address,((address,uint160,uint48,uint48)[],address,uint256),bytes)'(owner: PromiseOrValue<string>, permitBatch: IAllowanceTransfer.PermitBatchStruct, signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        'permit(address,((address,uint160,uint48,uint48),address,uint256),bytes)'(owner: PromiseOrValue<string>, permitSingle: IAllowanceTransfer.PermitSingleStruct, signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        'permitTransferFrom(((address,uint256)[],uint256,uint256),address,(address,uint256)[],bytes)'(permit: ISignatureTransfer.PermitBatchTransferFromStruct, owner: PromiseOrValue<string>, transferDetails: ISignatureTransfer.SignatureTransferDetailsStruct[], signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        'permitTransferFrom(((address,uint256),uint256,uint256),address,address,uint256,bytes)'(permit: ISignatureTransfer.PermitTransferFromStruct, owner: PromiseOrValue<string>, to: PromiseOrValue<string>, requestedAmount: PromiseOrValue<BigNumberish>, signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        'permitWitnessTransferFrom(((address,uint256),uint256,uint256),address,address,uint256,bytes32,string,string,bytes)'(permit: ISignatureTransfer.PermitTransferFromStruct, owner: PromiseOrValue<string>, to: PromiseOrValue<string>, requestedAmount: PromiseOrValue<BigNumberish>, witness: PromiseOrValue<BytesLike>, witnessTypeName: PromiseOrValue<string>, witnessType: PromiseOrValue<string>, signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        'permitWitnessTransferFrom(((address,uint256)[],uint256,uint256),address,(address,uint256)[],bytes32,string,string,bytes)'(permit: ISignatureTransfer.PermitBatchTransferFromStruct, owner: PromiseOrValue<string>, transferDetails: ISignatureTransfer.SignatureTransferDetailsStruct[], witness: PromiseOrValue<BytesLike>, witnessTypeName: PromiseOrValue<string>, witnessType: PromiseOrValue<string>, signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        'transferFrom(address,address,address,uint160)'(token: PromiseOrValue<string>, from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        'transferFrom(address,(address,uint160,address)[])'(from: PromiseOrValue<string>, transferDetails: IAllowanceTransfer.AllowanceTransferDetailsStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allowance(owner: PromiseOrValue<string>, token: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(token: PromiseOrValue<string>, spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, expiration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        invalidateNonces(token: PromiseOrValue<string>, spender: PromiseOrValue<string>, newNonce: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        invalidateUnorderedNonces(wordPos: PromiseOrValue<BigNumberish>, mask: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        lockdown(approvals: IAllowanceTransfer.TokenSpenderPairStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        nonceBitmap(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'permit(address,((address,uint160,uint48,uint48)[],address,uint256),bytes)'(owner: PromiseOrValue<string>, permitBatch: IAllowanceTransfer.PermitBatchStruct, signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        'permit(address,((address,uint160,uint48,uint48),address,uint256),bytes)'(owner: PromiseOrValue<string>, permitSingle: IAllowanceTransfer.PermitSingleStruct, signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        'permitTransferFrom(((address,uint256)[],uint256,uint256),address,(address,uint256)[],bytes)'(permit: ISignatureTransfer.PermitBatchTransferFromStruct, owner: PromiseOrValue<string>, transferDetails: ISignatureTransfer.SignatureTransferDetailsStruct[], signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        'permitTransferFrom(((address,uint256),uint256,uint256),address,address,uint256,bytes)'(permit: ISignatureTransfer.PermitTransferFromStruct, owner: PromiseOrValue<string>, to: PromiseOrValue<string>, requestedAmount: PromiseOrValue<BigNumberish>, signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        'permitWitnessTransferFrom(((address,uint256),uint256,uint256),address,address,uint256,bytes32,string,string,bytes)'(permit: ISignatureTransfer.PermitTransferFromStruct, owner: PromiseOrValue<string>, to: PromiseOrValue<string>, requestedAmount: PromiseOrValue<BigNumberish>, witness: PromiseOrValue<BytesLike>, witnessTypeName: PromiseOrValue<string>, witnessType: PromiseOrValue<string>, signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        'permitWitnessTransferFrom(((address,uint256)[],uint256,uint256),address,(address,uint256)[],bytes32,string,string,bytes)'(permit: ISignatureTransfer.PermitBatchTransferFromStruct, owner: PromiseOrValue<string>, transferDetails: ISignatureTransfer.SignatureTransferDetailsStruct[], witness: PromiseOrValue<BytesLike>, witnessTypeName: PromiseOrValue<string>, witnessType: PromiseOrValue<string>, signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        'transferFrom(address,address,address,uint160)'(token: PromiseOrValue<string>, from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        'transferFrom(address,(address,uint160,address)[])'(from: PromiseOrValue<string>, transferDetails: IAllowanceTransfer.AllowanceTransferDetailsStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
