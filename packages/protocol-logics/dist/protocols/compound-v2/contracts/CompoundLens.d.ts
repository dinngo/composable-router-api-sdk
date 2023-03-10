import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from 'ethers';
import type { FunctionFragment, Result } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from './common';
export declare namespace CompoundLens {
    type CTokenBalancesStruct = {
        cToken: PromiseOrValue<string>;
        balanceOf: PromiseOrValue<BigNumberish>;
        borrowBalanceCurrent: PromiseOrValue<BigNumberish>;
        balanceOfUnderlying: PromiseOrValue<BigNumberish>;
        tokenBalance: PromiseOrValue<BigNumberish>;
        tokenAllowance: PromiseOrValue<BigNumberish>;
    };
    type CTokenBalancesStructOutput = [string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        cToken: string;
        balanceOf: BigNumber;
        borrowBalanceCurrent: BigNumber;
        balanceOfUnderlying: BigNumber;
        tokenBalance: BigNumber;
        tokenAllowance: BigNumber;
    };
    type CTokenMetadataStruct = {
        cToken: PromiseOrValue<string>;
        exchangeRateCurrent: PromiseOrValue<BigNumberish>;
        supplyRatePerBlock: PromiseOrValue<BigNumberish>;
        borrowRatePerBlock: PromiseOrValue<BigNumberish>;
        reserveFactorMantissa: PromiseOrValue<BigNumberish>;
        totalBorrows: PromiseOrValue<BigNumberish>;
        totalReserves: PromiseOrValue<BigNumberish>;
        totalSupply: PromiseOrValue<BigNumberish>;
        totalCash: PromiseOrValue<BigNumberish>;
        isListed: PromiseOrValue<boolean>;
        collateralFactorMantissa: PromiseOrValue<BigNumberish>;
        underlyingAssetAddress: PromiseOrValue<string>;
        cTokenDecimals: PromiseOrValue<BigNumberish>;
        underlyingDecimals: PromiseOrValue<BigNumberish>;
        compSupplySpeed: PromiseOrValue<BigNumberish>;
        compBorrowSpeed: PromiseOrValue<BigNumberish>;
        borrowCap: PromiseOrValue<BigNumberish>;
    };
    type CTokenMetadataStructOutput = [
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        cToken: string;
        exchangeRateCurrent: BigNumber;
        supplyRatePerBlock: BigNumber;
        borrowRatePerBlock: BigNumber;
        reserveFactorMantissa: BigNumber;
        totalBorrows: BigNumber;
        totalReserves: BigNumber;
        totalSupply: BigNumber;
        totalCash: BigNumber;
        isListed: boolean;
        collateralFactorMantissa: BigNumber;
        underlyingAssetAddress: string;
        cTokenDecimals: BigNumber;
        underlyingDecimals: BigNumber;
        compSupplySpeed: BigNumber;
        compBorrowSpeed: BigNumber;
        borrowCap: BigNumber;
    };
    type CTokenUnderlyingPriceStruct = {
        cToken: PromiseOrValue<string>;
        underlyingPrice: PromiseOrValue<BigNumberish>;
    };
    type CTokenUnderlyingPriceStructOutput = [string, BigNumber] & {
        cToken: string;
        underlyingPrice: BigNumber;
    };
    type AccountLimitsStruct = {
        markets: PromiseOrValue<string>[];
        liquidity: PromiseOrValue<BigNumberish>;
        shortfall: PromiseOrValue<BigNumberish>;
    };
    type AccountLimitsStructOutput = [string[], BigNumber, BigNumber] & {
        markets: string[];
        liquidity: BigNumber;
        shortfall: BigNumber;
    };
    type CompBalanceMetadataStruct = {
        balance: PromiseOrValue<BigNumberish>;
        votes: PromiseOrValue<BigNumberish>;
        delegate: PromiseOrValue<string>;
    };
    type CompBalanceMetadataStructOutput = [BigNumber, BigNumber, string] & {
        balance: BigNumber;
        votes: BigNumber;
        delegate: string;
    };
    type CompBalanceMetadataExtStruct = {
        balance: PromiseOrValue<BigNumberish>;
        votes: PromiseOrValue<BigNumberish>;
        delegate: PromiseOrValue<string>;
        allocated: PromiseOrValue<BigNumberish>;
    };
    type CompBalanceMetadataExtStructOutput = [BigNumber, BigNumber, string, BigNumber] & {
        balance: BigNumber;
        votes: BigNumber;
        delegate: string;
        allocated: BigNumber;
    };
    type CompVotesStruct = {
        blockNumber: PromiseOrValue<BigNumberish>;
        votes: PromiseOrValue<BigNumberish>;
    };
    type CompVotesStructOutput = [BigNumber, BigNumber] & {
        blockNumber: BigNumber;
        votes: BigNumber;
    };
    type GovBravoProposalStruct = {
        proposalId: PromiseOrValue<BigNumberish>;
        proposer: PromiseOrValue<string>;
        eta: PromiseOrValue<BigNumberish>;
        targets: PromiseOrValue<string>[];
        values: PromiseOrValue<BigNumberish>[];
        signatures: PromiseOrValue<string>[];
        calldatas: PromiseOrValue<BytesLike>[];
        startBlock: PromiseOrValue<BigNumberish>;
        endBlock: PromiseOrValue<BigNumberish>;
        forVotes: PromiseOrValue<BigNumberish>;
        againstVotes: PromiseOrValue<BigNumberish>;
        abstainVotes: PromiseOrValue<BigNumberish>;
        canceled: PromiseOrValue<boolean>;
        executed: PromiseOrValue<boolean>;
    };
    type GovBravoProposalStructOutput = [
        BigNumber,
        string,
        BigNumber,
        string[],
        BigNumber[],
        string[],
        string[],
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        boolean
    ] & {
        proposalId: BigNumber;
        proposer: string;
        eta: BigNumber;
        targets: string[];
        values: BigNumber[];
        signatures: string[];
        calldatas: string[];
        startBlock: BigNumber;
        endBlock: BigNumber;
        forVotes: BigNumber;
        againstVotes: BigNumber;
        abstainVotes: BigNumber;
        canceled: boolean;
        executed: boolean;
    };
    type GovBravoReceiptStruct = {
        proposalId: PromiseOrValue<BigNumberish>;
        hasVoted: PromiseOrValue<boolean>;
        support: PromiseOrValue<BigNumberish>;
        votes: PromiseOrValue<BigNumberish>;
    };
    type GovBravoReceiptStructOutput = [BigNumber, boolean, number, BigNumber] & {
        proposalId: BigNumber;
        hasVoted: boolean;
        support: number;
        votes: BigNumber;
    };
    type GovProposalStruct = {
        proposalId: PromiseOrValue<BigNumberish>;
        proposer: PromiseOrValue<string>;
        eta: PromiseOrValue<BigNumberish>;
        targets: PromiseOrValue<string>[];
        values: PromiseOrValue<BigNumberish>[];
        signatures: PromiseOrValue<string>[];
        calldatas: PromiseOrValue<BytesLike>[];
        startBlock: PromiseOrValue<BigNumberish>;
        endBlock: PromiseOrValue<BigNumberish>;
        forVotes: PromiseOrValue<BigNumberish>;
        againstVotes: PromiseOrValue<BigNumberish>;
        canceled: PromiseOrValue<boolean>;
        executed: PromiseOrValue<boolean>;
    };
    type GovProposalStructOutput = [
        BigNumber,
        string,
        BigNumber,
        string[],
        BigNumber[],
        string[],
        string[],
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        boolean
    ] & {
        proposalId: BigNumber;
        proposer: string;
        eta: BigNumber;
        targets: string[];
        values: BigNumber[];
        signatures: string[];
        calldatas: string[];
        startBlock: BigNumber;
        endBlock: BigNumber;
        forVotes: BigNumber;
        againstVotes: BigNumber;
        canceled: boolean;
        executed: boolean;
    };
    type GovReceiptStruct = {
        proposalId: PromiseOrValue<BigNumberish>;
        hasVoted: PromiseOrValue<boolean>;
        support: PromiseOrValue<boolean>;
        votes: PromiseOrValue<BigNumberish>;
    };
    type GovReceiptStructOutput = [BigNumber, boolean, boolean, BigNumber] & {
        proposalId: BigNumber;
        hasVoted: boolean;
        support: boolean;
        votes: BigNumber;
    };
}
export interface CompoundLensInterface extends utils.Interface {
    functions: {
        'cTokenBalances(address,address)': FunctionFragment;
        'cTokenBalancesAll(address[],address)': FunctionFragment;
        'cTokenMetadata(address)': FunctionFragment;
        'cTokenMetadataAll(address[])': FunctionFragment;
        'cTokenUnderlyingPrice(address)': FunctionFragment;
        'cTokenUnderlyingPriceAll(address[])': FunctionFragment;
        'getAccountLimits(address,address)': FunctionFragment;
        'getCompBalanceMetadata(address,address)': FunctionFragment;
        'getCompBalanceMetadataExt(address,address,address)': FunctionFragment;
        'getCompVotes(address,address,uint32[])': FunctionFragment;
        'getGovBravoProposals(address,uint256[])': FunctionFragment;
        'getGovBravoReceipts(address,address,uint256[])': FunctionFragment;
        'getGovProposals(address,uint256[])': FunctionFragment;
        'getGovReceipts(address,address,uint256[])': FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: 'cTokenBalances' | 'cTokenBalancesAll' | 'cTokenMetadata' | 'cTokenMetadataAll' | 'cTokenUnderlyingPrice' | 'cTokenUnderlyingPriceAll' | 'getAccountLimits' | 'getCompBalanceMetadata' | 'getCompBalanceMetadataExt' | 'getCompVotes' | 'getGovBravoProposals' | 'getGovBravoReceipts' | 'getGovProposals' | 'getGovReceipts'): FunctionFragment;
    encodeFunctionData(functionFragment: 'cTokenBalances', values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'cTokenBalancesAll', values: [PromiseOrValue<string>[], PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'cTokenMetadata', values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'cTokenMetadataAll', values: [PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: 'cTokenUnderlyingPrice', values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'cTokenUnderlyingPriceAll', values: [PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: 'getAccountLimits', values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'getCompBalanceMetadata', values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'getCompBalanceMetadataExt', values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: 'getCompVotes', values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>[]]): string;
    encodeFunctionData(functionFragment: 'getGovBravoProposals', values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>[]]): string;
    encodeFunctionData(functionFragment: 'getGovBravoReceipts', values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>[]]): string;
    encodeFunctionData(functionFragment: 'getGovProposals', values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>[]]): string;
    encodeFunctionData(functionFragment: 'getGovReceipts', values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>[]]): string;
    decodeFunctionResult(functionFragment: 'cTokenBalances', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'cTokenBalancesAll', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'cTokenMetadata', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'cTokenMetadataAll', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'cTokenUnderlyingPrice', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'cTokenUnderlyingPriceAll', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getAccountLimits', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getCompBalanceMetadata', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getCompBalanceMetadataExt', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getCompVotes', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getGovBravoProposals', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getGovBravoReceipts', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getGovProposals', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getGovReceipts', data: BytesLike): Result;
    events: {};
}
export interface CompoundLens extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CompoundLensInterface;
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
        cTokenBalances(cToken: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        cTokenBalancesAll(cTokens: PromiseOrValue<string>[], account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        cTokenMetadata(cToken: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        cTokenMetadataAll(cTokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        cTokenUnderlyingPrice(cToken: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        cTokenUnderlyingPriceAll(cTokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getAccountLimits(comptroller: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getCompBalanceMetadata(comp: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[CompoundLens.CompBalanceMetadataStructOutput]>;
        getCompBalanceMetadataExt(comp: PromiseOrValue<string>, comptroller: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getCompVotes(comp: PromiseOrValue<string>, account: PromiseOrValue<string>, blockNumbers: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<[CompoundLens.CompVotesStructOutput[]]>;
        getGovBravoProposals(governor: PromiseOrValue<string>, proposalIds: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<[CompoundLens.GovBravoProposalStructOutput[]]>;
        getGovBravoReceipts(governor: PromiseOrValue<string>, voter: PromiseOrValue<string>, proposalIds: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<[CompoundLens.GovBravoReceiptStructOutput[]]>;
        getGovProposals(governor: PromiseOrValue<string>, proposalIds: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<[CompoundLens.GovProposalStructOutput[]]>;
        getGovReceipts(governor: PromiseOrValue<string>, voter: PromiseOrValue<string>, proposalIds: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<[CompoundLens.GovReceiptStructOutput[]]>;
    };
    cTokenBalances(cToken: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    cTokenBalancesAll(cTokens: PromiseOrValue<string>[], account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    cTokenMetadata(cToken: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    cTokenMetadataAll(cTokens: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    cTokenUnderlyingPrice(cToken: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    cTokenUnderlyingPriceAll(cTokens: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getAccountLimits(comptroller: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getCompBalanceMetadata(comp: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<CompoundLens.CompBalanceMetadataStructOutput>;
    getCompBalanceMetadataExt(comp: PromiseOrValue<string>, comptroller: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getCompVotes(comp: PromiseOrValue<string>, account: PromiseOrValue<string>, blockNumbers: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<CompoundLens.CompVotesStructOutput[]>;
    getGovBravoProposals(governor: PromiseOrValue<string>, proposalIds: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<CompoundLens.GovBravoProposalStructOutput[]>;
    getGovBravoReceipts(governor: PromiseOrValue<string>, voter: PromiseOrValue<string>, proposalIds: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<CompoundLens.GovBravoReceiptStructOutput[]>;
    getGovProposals(governor: PromiseOrValue<string>, proposalIds: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<CompoundLens.GovProposalStructOutput[]>;
    getGovReceipts(governor: PromiseOrValue<string>, voter: PromiseOrValue<string>, proposalIds: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<CompoundLens.GovReceiptStructOutput[]>;
    callStatic: {
        cTokenBalances(cToken: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<CompoundLens.CTokenBalancesStructOutput>;
        cTokenBalancesAll(cTokens: PromiseOrValue<string>[], account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<CompoundLens.CTokenBalancesStructOutput[]>;
        cTokenMetadata(cToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<CompoundLens.CTokenMetadataStructOutput>;
        cTokenMetadataAll(cTokens: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<CompoundLens.CTokenMetadataStructOutput[]>;
        cTokenUnderlyingPrice(cToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<CompoundLens.CTokenUnderlyingPriceStructOutput>;
        cTokenUnderlyingPriceAll(cTokens: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<CompoundLens.CTokenUnderlyingPriceStructOutput[]>;
        getAccountLimits(comptroller: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<CompoundLens.AccountLimitsStructOutput>;
        getCompBalanceMetadata(comp: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<CompoundLens.CompBalanceMetadataStructOutput>;
        getCompBalanceMetadataExt(comp: PromiseOrValue<string>, comptroller: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<CompoundLens.CompBalanceMetadataExtStructOutput>;
        getCompVotes(comp: PromiseOrValue<string>, account: PromiseOrValue<string>, blockNumbers: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<CompoundLens.CompVotesStructOutput[]>;
        getGovBravoProposals(governor: PromiseOrValue<string>, proposalIds: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<CompoundLens.GovBravoProposalStructOutput[]>;
        getGovBravoReceipts(governor: PromiseOrValue<string>, voter: PromiseOrValue<string>, proposalIds: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<CompoundLens.GovBravoReceiptStructOutput[]>;
        getGovProposals(governor: PromiseOrValue<string>, proposalIds: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<CompoundLens.GovProposalStructOutput[]>;
        getGovReceipts(governor: PromiseOrValue<string>, voter: PromiseOrValue<string>, proposalIds: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<CompoundLens.GovReceiptStructOutput[]>;
    };
    filters: {};
    estimateGas: {
        cTokenBalances(cToken: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        cTokenBalancesAll(cTokens: PromiseOrValue<string>[], account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        cTokenMetadata(cToken: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        cTokenMetadataAll(cTokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        cTokenUnderlyingPrice(cToken: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        cTokenUnderlyingPriceAll(cTokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getAccountLimits(comptroller: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getCompBalanceMetadata(comp: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getCompBalanceMetadataExt(comp: PromiseOrValue<string>, comptroller: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getCompVotes(comp: PromiseOrValue<string>, account: PromiseOrValue<string>, blockNumbers: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<BigNumber>;
        getGovBravoProposals(governor: PromiseOrValue<string>, proposalIds: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<BigNumber>;
        getGovBravoReceipts(governor: PromiseOrValue<string>, voter: PromiseOrValue<string>, proposalIds: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<BigNumber>;
        getGovProposals(governor: PromiseOrValue<string>, proposalIds: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<BigNumber>;
        getGovReceipts(governor: PromiseOrValue<string>, voter: PromiseOrValue<string>, proposalIds: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        cTokenBalances(cToken: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        cTokenBalancesAll(cTokens: PromiseOrValue<string>[], account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        cTokenMetadata(cToken: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        cTokenMetadataAll(cTokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        cTokenUnderlyingPrice(cToken: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        cTokenUnderlyingPriceAll(cTokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getAccountLimits(comptroller: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getCompBalanceMetadata(comp: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCompBalanceMetadataExt(comp: PromiseOrValue<string>, comptroller: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getCompVotes(comp: PromiseOrValue<string>, account: PromiseOrValue<string>, blockNumbers: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getGovBravoProposals(governor: PromiseOrValue<string>, proposalIds: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getGovBravoReceipts(governor: PromiseOrValue<string>, voter: PromiseOrValue<string>, proposalIds: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getGovProposals(governor: PromiseOrValue<string>, proposalIds: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getGovReceipts(governor: PromiseOrValue<string>, voter: PromiseOrValue<string>, proposalIds: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
