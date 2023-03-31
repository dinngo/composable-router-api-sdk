import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from './common';
export declare namespace IParam {
    type InputStruct = {
        token: PromiseOrValue<string>;
        amountBps: PromiseOrValue<BigNumberish>;
        amountOrOffset: PromiseOrValue<BigNumberish>;
    };
    type InputStructOutput = [string, BigNumber, BigNumber] & {
        token: string;
        amountBps: BigNumber;
        amountOrOffset: BigNumber;
    };
    type LogicStruct = {
        to: PromiseOrValue<string>;
        data: PromiseOrValue<BytesLike>;
        inputs: IParam.InputStruct[];
        wrapMode: PromiseOrValue<BigNumberish>;
        approveTo: PromiseOrValue<string>;
        callback: PromiseOrValue<string>;
    };
    type LogicStructOutput = [string, string, IParam.InputStructOutput[], number, string, string] & {
        to: string;
        data: string;
        inputs: IParam.InputStructOutput[];
        wrapMode: number;
        approveTo: string;
        callback: string;
    };
    type LogicBatchStruct = {
        logics: IParam.LogicStruct[];
        deadline: PromiseOrValue<BigNumberish>;
    };
    type LogicBatchStructOutput = [IParam.LogicStructOutput[], BigNumber] & {
        logics: IParam.LogicStructOutput[];
        deadline: BigNumber;
    };
}
export interface RouterInterface extends utils.Interface {
    functions: {
        'addSigner(address)': FunctionFragment;
        'agentImplementation()': FunctionFragment;
        'agents(address)': FunctionFragment;
        'calcAgent(address)': FunctionFragment;
        'domainSeparator()': FunctionFragment;
        'execute((address,bytes,(address,uint256,uint256)[],uint8,address,address)[],address[],uint256)': FunctionFragment;
        'executeWithSignature(((address,bytes,(address,uint256,uint256)[],uint8,address,address)[],uint256),address,bytes,address[],uint256)': FunctionFragment;
        'feeCalculators(bytes4)': FunctionFragment;
        'feeCollector()': FunctionFragment;
        'getAgent()': FunctionFragment;
        'getAgent(address)': FunctionFragment;
        'getLogicsWithFee((address,bytes,(address,uint256,uint256)[],uint8,address,address)[],uint256)': FunctionFragment;
        'getUserAgent()': FunctionFragment;
        'newAgent(address)': FunctionFragment;
        'newAgent()': FunctionFragment;
        'owner()': FunctionFragment;
        'pause()': FunctionFragment;
        'paused()': FunctionFragment;
        'pauser()': FunctionFragment;
        'removeSigner(address)': FunctionFragment;
        'renounceOwnership()': FunctionFragment;
        'resume()': FunctionFragment;
        'setFeeCalculators(bytes4[],address[])': FunctionFragment;
        'setFeeCollector(address)': FunctionFragment;
        'setPauser(address)': FunctionFragment;
        'signers(address)': FunctionFragment;
        'transferOwnership(address)': FunctionFragment;
        'user()': FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: 'addSigner' | 'agentImplementation' | 'agents' | 'calcAgent' | 'domainSeparator' | 'execute' | 'executeWithSignature' | 'feeCalculators' | 'feeCollector' | 'getAgent()' | 'getAgent(address)' | 'getLogicsWithFee' | 'getUserAgent' | 'newAgent(address)' | 'newAgent()' | 'owner' | 'pause' | 'paused' | 'pauser' | 'removeSigner' | 'renounceOwnership' | 'resume' | 'setFeeCalculators' | 'setFeeCollector' | 'setPauser' | 'signers' | 'transferOwnership' | 'user'): FunctionFragment;
    encodeFunctionData(functionFragment: 'addSigner', values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'agentImplementation', values?: undefined): string;
    encodeFunctionData(functionFragment: 'agents', values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'calcAgent', values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'domainSeparator', values?: undefined): string;
    encodeFunctionData(functionFragment: 'execute', values: [IParam.LogicStruct[], PromiseOrValue<string>[], PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: 'executeWithSignature', values: [
        IParam.LogicBatchStruct,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>[],
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: 'feeCalculators', values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: 'feeCollector', values?: undefined): string;
    encodeFunctionData(functionFragment: 'getAgent()', values?: undefined): string;
    encodeFunctionData(functionFragment: 'getAgent(address)', values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'getLogicsWithFee', values: [IParam.LogicStruct[], PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: 'getUserAgent', values?: undefined): string;
    encodeFunctionData(functionFragment: 'newAgent(address)', values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'newAgent()', values?: undefined): string;
    encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
    encodeFunctionData(functionFragment: 'pause', values?: undefined): string;
    encodeFunctionData(functionFragment: 'paused', values?: undefined): string;
    encodeFunctionData(functionFragment: 'pauser', values?: undefined): string;
    encodeFunctionData(functionFragment: 'removeSigner', values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'renounceOwnership', values?: undefined): string;
    encodeFunctionData(functionFragment: 'resume', values?: undefined): string;
    encodeFunctionData(functionFragment: 'setFeeCalculators', values: [PromiseOrValue<BytesLike>[], PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: 'setFeeCollector', values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'setPauser', values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'signers', values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'transferOwnership', values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'user', values?: undefined): string;
    decodeFunctionResult(functionFragment: 'addSigner', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'agentImplementation', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'agents', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'calcAgent', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'domainSeparator', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'execute', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'executeWithSignature', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'feeCalculators', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'feeCollector', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getAgent()', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getAgent(address)', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getLogicsWithFee', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getUserAgent', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'newAgent(address)', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'newAgent()', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'pause', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'paused', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'pauser', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'removeSigner', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'renounceOwnership', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'resume', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'setFeeCalculators', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'setFeeCollector', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'setPauser', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'signers', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'user', data: BytesLike): Result;
    events: {
        'FeeCalculatorSet(bytes4,address)': EventFragment;
        'FeeCollectorSet(address)': EventFragment;
        'OwnershipTransferred(address,address)': EventFragment;
        'Paused()': EventFragment;
        'PauserSet(address)': EventFragment;
        'Resumed()': EventFragment;
        'SignerAdded(address)': EventFragment;
        'SignerRemoved(address)': EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: 'FeeCalculatorSet'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'FeeCollectorSet'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'Paused'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'PauserSet'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'Resumed'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'SignerAdded'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'SignerRemoved'): EventFragment;
}
export interface FeeCalculatorSetEventObject {
    selector: string;
    feeCalculator: string;
}
export type FeeCalculatorSetEvent = TypedEvent<[string, string], FeeCalculatorSetEventObject>;
export type FeeCalculatorSetEventFilter = TypedEventFilter<FeeCalculatorSetEvent>;
export interface FeeCollectorSetEventObject {
    feeCollector_: string;
}
export type FeeCollectorSetEvent = TypedEvent<[string], FeeCollectorSetEventObject>;
export type FeeCollectorSetEventFilter = TypedEventFilter<FeeCollectorSetEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[string, string], OwnershipTransferredEventObject>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface PausedEventObject {
}
export type PausedEvent = TypedEvent<[], PausedEventObject>;
export type PausedEventFilter = TypedEventFilter<PausedEvent>;
export interface PauserSetEventObject {
    pauser: string;
}
export type PauserSetEvent = TypedEvent<[string], PauserSetEventObject>;
export type PauserSetEventFilter = TypedEventFilter<PauserSetEvent>;
export interface ResumedEventObject {
}
export type ResumedEvent = TypedEvent<[], ResumedEventObject>;
export type ResumedEventFilter = TypedEventFilter<ResumedEvent>;
export interface SignerAddedEventObject {
    signer: string;
}
export type SignerAddedEvent = TypedEvent<[string], SignerAddedEventObject>;
export type SignerAddedEventFilter = TypedEventFilter<SignerAddedEvent>;
export interface SignerRemovedEventObject {
    signer: string;
}
export type SignerRemovedEvent = TypedEvent<[string], SignerRemovedEventObject>;
export type SignerRemovedEventFilter = TypedEventFilter<SignerRemovedEvent>;
export interface Router extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: RouterInterface;
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
        addSigner(signer: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        agentImplementation(overrides?: CallOverrides): Promise<[string]>;
        agents(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string] & {
            agent: string;
        }>;
        calcAgent(owner_: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        domainSeparator(overrides?: CallOverrides): Promise<[string]>;
        execute(logics: IParam.LogicStruct[], tokensReturn: PromiseOrValue<string>[], referral: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        executeWithSignature(logicBatch: IParam.LogicBatchStruct, signer: PromiseOrValue<string>, signature: PromiseOrValue<BytesLike>, tokensReturn: PromiseOrValue<string>[], referral: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        feeCalculators(selector: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string] & {
            feeCalculator: string;
        }>;
        feeCollector(overrides?: CallOverrides): Promise<[string]>;
        'getAgent()'(overrides?: CallOverrides): Promise<[string]>;
        'getAgent(address)'(owner_: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        getLogicsWithFee(logics: IParam.LogicStruct[], msgValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[IParam.LogicStructOutput[], BigNumber]>;
        getUserAgent(overrides?: CallOverrides): Promise<[string, string]>;
        'newAgent(address)'(owner_: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        'newAgent()'(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        pause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        paused(overrides?: CallOverrides): Promise<[boolean]>;
        pauser(overrides?: CallOverrides): Promise<[string]>;
        removeSigner(signer: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        resume(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setFeeCalculators(selectors: PromiseOrValue<BytesLike>[], feeCalculators_: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setFeeCollector(feeCollector_: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setPauser(pauser_: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        signers(signer: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean] & {
            valid: boolean;
        }>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        user(overrides?: CallOverrides): Promise<[string]>;
    };
    addSigner(signer: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    agentImplementation(overrides?: CallOverrides): Promise<string>;
    agents(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    calcAgent(owner_: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    domainSeparator(overrides?: CallOverrides): Promise<string>;
    execute(logics: IParam.LogicStruct[], tokensReturn: PromiseOrValue<string>[], referral: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    executeWithSignature(logicBatch: IParam.LogicBatchStruct, signer: PromiseOrValue<string>, signature: PromiseOrValue<BytesLike>, tokensReturn: PromiseOrValue<string>[], referral: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    feeCalculators(selector: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    feeCollector(overrides?: CallOverrides): Promise<string>;
    'getAgent()'(overrides?: CallOverrides): Promise<string>;
    'getAgent(address)'(owner_: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    getLogicsWithFee(logics: IParam.LogicStruct[], msgValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[IParam.LogicStructOutput[], BigNumber]>;
    getUserAgent(overrides?: CallOverrides): Promise<[string, string]>;
    'newAgent(address)'(owner_: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    'newAgent()'(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    pause(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    paused(overrides?: CallOverrides): Promise<boolean>;
    pauser(overrides?: CallOverrides): Promise<string>;
    removeSigner(signer: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    resume(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setFeeCalculators(selectors: PromiseOrValue<BytesLike>[], feeCalculators_: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setFeeCollector(feeCollector_: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setPauser(pauser_: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    signers(signer: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    user(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        addSigner(signer: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        agentImplementation(overrides?: CallOverrides): Promise<string>;
        agents(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        calcAgent(owner_: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        domainSeparator(overrides?: CallOverrides): Promise<string>;
        execute(logics: IParam.LogicStruct[], tokensReturn: PromiseOrValue<string>[], referral: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        executeWithSignature(logicBatch: IParam.LogicBatchStruct, signer: PromiseOrValue<string>, signature: PromiseOrValue<BytesLike>, tokensReturn: PromiseOrValue<string>[], referral: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        feeCalculators(selector: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        feeCollector(overrides?: CallOverrides): Promise<string>;
        'getAgent()'(overrides?: CallOverrides): Promise<string>;
        'getAgent(address)'(owner_: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        getLogicsWithFee(logics: IParam.LogicStruct[], msgValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[IParam.LogicStructOutput[], BigNumber]>;
        getUserAgent(overrides?: CallOverrides): Promise<[string, string]>;
        'newAgent(address)'(owner_: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        'newAgent()'(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        pause(overrides?: CallOverrides): Promise<void>;
        paused(overrides?: CallOverrides): Promise<boolean>;
        pauser(overrides?: CallOverrides): Promise<string>;
        removeSigner(signer: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        resume(overrides?: CallOverrides): Promise<void>;
        setFeeCalculators(selectors: PromiseOrValue<BytesLike>[], feeCalculators_: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        setFeeCollector(feeCollector_: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setPauser(pauser_: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        signers(signer: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        user(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        'FeeCalculatorSet(bytes4,address)'(selector?: PromiseOrValue<BytesLike> | null, feeCalculator?: PromiseOrValue<string> | null): FeeCalculatorSetEventFilter;
        FeeCalculatorSet(selector?: PromiseOrValue<BytesLike> | null, feeCalculator?: PromiseOrValue<string> | null): FeeCalculatorSetEventFilter;
        'FeeCollectorSet(address)'(feeCollector_?: PromiseOrValue<string> | null): FeeCollectorSetEventFilter;
        FeeCollectorSet(feeCollector_?: PromiseOrValue<string> | null): FeeCollectorSetEventFilter;
        'OwnershipTransferred(address,address)'(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        'Paused()'(): PausedEventFilter;
        Paused(): PausedEventFilter;
        'PauserSet(address)'(pauser?: PromiseOrValue<string> | null): PauserSetEventFilter;
        PauserSet(pauser?: PromiseOrValue<string> | null): PauserSetEventFilter;
        'Resumed()'(): ResumedEventFilter;
        Resumed(): ResumedEventFilter;
        'SignerAdded(address)'(signer?: PromiseOrValue<string> | null): SignerAddedEventFilter;
        SignerAdded(signer?: PromiseOrValue<string> | null): SignerAddedEventFilter;
        'SignerRemoved(address)'(signer?: PromiseOrValue<string> | null): SignerRemovedEventFilter;
        SignerRemoved(signer?: PromiseOrValue<string> | null): SignerRemovedEventFilter;
    };
    estimateGas: {
        addSigner(signer: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        agentImplementation(overrides?: CallOverrides): Promise<BigNumber>;
        agents(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        calcAgent(owner_: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        domainSeparator(overrides?: CallOverrides): Promise<BigNumber>;
        execute(logics: IParam.LogicStruct[], tokensReturn: PromiseOrValue<string>[], referral: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        executeWithSignature(logicBatch: IParam.LogicBatchStruct, signer: PromiseOrValue<string>, signature: PromiseOrValue<BytesLike>, tokensReturn: PromiseOrValue<string>[], referral: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        feeCalculators(selector: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        feeCollector(overrides?: CallOverrides): Promise<BigNumber>;
        'getAgent()'(overrides?: CallOverrides): Promise<BigNumber>;
        'getAgent(address)'(owner_: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getLogicsWithFee(logics: IParam.LogicStruct[], msgValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getUserAgent(overrides?: CallOverrides): Promise<BigNumber>;
        'newAgent(address)'(owner_: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        'newAgent()'(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        pause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        paused(overrides?: CallOverrides): Promise<BigNumber>;
        pauser(overrides?: CallOverrides): Promise<BigNumber>;
        removeSigner(signer: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        resume(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setFeeCalculators(selectors: PromiseOrValue<BytesLike>[], feeCalculators_: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setFeeCollector(feeCollector_: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setPauser(pauser_: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        signers(signer: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        user(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        addSigner(signer: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        agentImplementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        agents(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calcAgent(owner_: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        domainSeparator(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        execute(logics: IParam.LogicStruct[], tokensReturn: PromiseOrValue<string>[], referral: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        executeWithSignature(logicBatch: IParam.LogicBatchStruct, signer: PromiseOrValue<string>, signature: PromiseOrValue<BytesLike>, tokensReturn: PromiseOrValue<string>[], referral: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        feeCalculators(selector: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        feeCollector(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'getAgent()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'getAgent(address)'(owner_: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLogicsWithFee(logics: IParam.LogicStruct[], msgValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUserAgent(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'newAgent(address)'(owner_: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        'newAgent()'(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pauser(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeSigner(signer: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        resume(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setFeeCalculators(selectors: PromiseOrValue<BytesLike>[], feeCalculators_: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setFeeCollector(feeCollector_: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setPauser(pauser_: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        signers(signer: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        user(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
