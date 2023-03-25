import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from './common';
export declare namespace CometRewards {
    type RewardOwedStruct = {
        token: PromiseOrValue<string>;
        owed: PromiseOrValue<BigNumberish>;
    };
    type RewardOwedStructOutput = [string, BigNumber] & {
        token: string;
        owed: BigNumber;
    };
}
export interface CometRewardsInterface extends utils.Interface {
    functions: {
        'claim(address,address,bool)': FunctionFragment;
        'claimTo(address,address,address,bool)': FunctionFragment;
        'getRewardOwed(address,address)': FunctionFragment;
        'governor()': FunctionFragment;
        'rewardConfig(address)': FunctionFragment;
        'rewardsClaimed(address,address)': FunctionFragment;
        'setRewardConfig(address,address)': FunctionFragment;
        'transferGovernor(address)': FunctionFragment;
        'withdrawToken(address,address,uint256)': FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: 'claim' | 'claimTo' | 'getRewardOwed' | 'governor' | 'rewardConfig' | 'rewardsClaimed' | 'setRewardConfig' | 'transferGovernor' | 'withdrawToken'): FunctionFragment;
    encodeFunctionData(functionFragment: 'claim', values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: 'claimTo', values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: 'getRewardOwed', values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'governor', values?: undefined): string;
    encodeFunctionData(functionFragment: 'rewardConfig', values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'rewardsClaimed', values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'setRewardConfig', values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'transferGovernor', values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'withdrawToken', values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: 'claim', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'claimTo', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getRewardOwed', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'governor', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'rewardConfig', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'rewardsClaimed', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'setRewardConfig', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'transferGovernor', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'withdrawToken', data: BytesLike): Result;
    events: {
        'GovernorTransferred(address,address)': EventFragment;
        'RewardClaimed(address,address,address,uint256)': EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: 'GovernorTransferred'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'RewardClaimed'): EventFragment;
}
export interface GovernorTransferredEventObject {
    oldGovernor: string;
    newGovernor: string;
}
export type GovernorTransferredEvent = TypedEvent<[string, string], GovernorTransferredEventObject>;
export type GovernorTransferredEventFilter = TypedEventFilter<GovernorTransferredEvent>;
export interface RewardClaimedEventObject {
    src: string;
    recipient: string;
    token: string;
    amount: BigNumber;
}
export type RewardClaimedEvent = TypedEvent<[string, string, string, BigNumber], RewardClaimedEventObject>;
export type RewardClaimedEventFilter = TypedEventFilter<RewardClaimedEvent>;
export interface CometRewards extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CometRewardsInterface;
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
        claim(comet: PromiseOrValue<string>, src: PromiseOrValue<string>, shouldAccrue: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        claimTo(comet: PromiseOrValue<string>, src: PromiseOrValue<string>, to: PromiseOrValue<string>, shouldAccrue: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getRewardOwed(comet: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        governor(overrides?: CallOverrides): Promise<[string]>;
        rewardConfig(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            string,
            BigNumber,
            boolean
        ] & {
            token: string;
            rescaleFactor: BigNumber;
            shouldUpscale: boolean;
        }>;
        rewardsClaimed(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        setRewardConfig(comet: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferGovernor(newGovernor: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdrawToken(token: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    claim(comet: PromiseOrValue<string>, src: PromiseOrValue<string>, shouldAccrue: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    claimTo(comet: PromiseOrValue<string>, src: PromiseOrValue<string>, to: PromiseOrValue<string>, shouldAccrue: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getRewardOwed(comet: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    governor(overrides?: CallOverrides): Promise<string>;
    rewardConfig(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
        string,
        BigNumber,
        boolean
    ] & {
        token: string;
        rescaleFactor: BigNumber;
        shouldUpscale: boolean;
    }>;
    rewardsClaimed(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    setRewardConfig(comet: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferGovernor(newGovernor: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdrawToken(token: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        claim(comet: PromiseOrValue<string>, src: PromiseOrValue<string>, shouldAccrue: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        claimTo(comet: PromiseOrValue<string>, src: PromiseOrValue<string>, to: PromiseOrValue<string>, shouldAccrue: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        getRewardOwed(comet: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<CometRewards.RewardOwedStructOutput>;
        governor(overrides?: CallOverrides): Promise<string>;
        rewardConfig(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            string,
            BigNumber,
            boolean
        ] & {
            token: string;
            rescaleFactor: BigNumber;
            shouldUpscale: boolean;
        }>;
        rewardsClaimed(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        setRewardConfig(comet: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        transferGovernor(newGovernor: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        withdrawToken(token: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        'GovernorTransferred(address,address)'(oldGovernor?: PromiseOrValue<string> | null, newGovernor?: PromiseOrValue<string> | null): GovernorTransferredEventFilter;
        GovernorTransferred(oldGovernor?: PromiseOrValue<string> | null, newGovernor?: PromiseOrValue<string> | null): GovernorTransferredEventFilter;
        'RewardClaimed(address,address,address,uint256)'(src?: PromiseOrValue<string> | null, recipient?: PromiseOrValue<string> | null, token?: PromiseOrValue<string> | null, amount?: null): RewardClaimedEventFilter;
        RewardClaimed(src?: PromiseOrValue<string> | null, recipient?: PromiseOrValue<string> | null, token?: PromiseOrValue<string> | null, amount?: null): RewardClaimedEventFilter;
    };
    estimateGas: {
        claim(comet: PromiseOrValue<string>, src: PromiseOrValue<string>, shouldAccrue: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        claimTo(comet: PromiseOrValue<string>, src: PromiseOrValue<string>, to: PromiseOrValue<string>, shouldAccrue: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getRewardOwed(comet: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        governor(overrides?: CallOverrides): Promise<BigNumber>;
        rewardConfig(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        rewardsClaimed(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        setRewardConfig(comet: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferGovernor(newGovernor: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdrawToken(token: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        claim(comet: PromiseOrValue<string>, src: PromiseOrValue<string>, shouldAccrue: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        claimTo(comet: PromiseOrValue<string>, src: PromiseOrValue<string>, to: PromiseOrValue<string>, shouldAccrue: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getRewardOwed(comet: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        governor(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rewardConfig(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rewardsClaimed(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setRewardConfig(comet: PromiseOrValue<string>, token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferGovernor(newGovernor: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdrawToken(token: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
