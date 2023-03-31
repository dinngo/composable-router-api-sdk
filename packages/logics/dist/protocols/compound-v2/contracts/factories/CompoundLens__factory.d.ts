import { Signer } from 'ethers';
import type { Provider } from '@ethersproject/providers';
import type { CompoundLens, CompoundLensInterface } from '../CompoundLens';
export declare class CompoundLens__factory {
    static readonly abi: readonly [{
        readonly constant: false;
        readonly inputs: readonly [{
            readonly internalType: "contract CToken";
            readonly name: "cToken";
            readonly type: "address";
        }, {
            readonly internalType: "address payable";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "cTokenBalances";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "cToken";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "balanceOf";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "borrowBalanceCurrent";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "balanceOfUnderlying";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "tokenBalance";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "tokenAllowance";
                readonly type: "uint256";
            }];
            readonly internalType: "struct CompoundLens.CTokenBalances";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly internalType: "contract CToken[]";
            readonly name: "cTokens";
            readonly type: "address[]";
        }, {
            readonly internalType: "address payable";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "cTokenBalancesAll";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "cToken";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "balanceOf";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "borrowBalanceCurrent";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "balanceOfUnderlying";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "tokenBalance";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "tokenAllowance";
                readonly type: "uint256";
            }];
            readonly internalType: "struct CompoundLens.CTokenBalances[]";
            readonly name: "";
            readonly type: "tuple[]";
        }];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly internalType: "contract CToken";
            readonly name: "cToken";
            readonly type: "address";
        }];
        readonly name: "cTokenMetadata";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "cToken";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "exchangeRateCurrent";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "supplyRatePerBlock";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "borrowRatePerBlock";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "reserveFactorMantissa";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "totalBorrows";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "totalReserves";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "totalSupply";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "totalCash";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "isListed";
                readonly type: "bool";
            }, {
                readonly internalType: "uint256";
                readonly name: "collateralFactorMantissa";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "underlyingAssetAddress";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "cTokenDecimals";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "underlyingDecimals";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "compSupplySpeed";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "compBorrowSpeed";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "borrowCap";
                readonly type: "uint256";
            }];
            readonly internalType: "struct CompoundLens.CTokenMetadata";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly internalType: "contract CToken[]";
            readonly name: "cTokens";
            readonly type: "address[]";
        }];
        readonly name: "cTokenMetadataAll";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "cToken";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "exchangeRateCurrent";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "supplyRatePerBlock";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "borrowRatePerBlock";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "reserveFactorMantissa";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "totalBorrows";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "totalReserves";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "totalSupply";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "totalCash";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "isListed";
                readonly type: "bool";
            }, {
                readonly internalType: "uint256";
                readonly name: "collateralFactorMantissa";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "underlyingAssetAddress";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "cTokenDecimals";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "underlyingDecimals";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "compSupplySpeed";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "compBorrowSpeed";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "borrowCap";
                readonly type: "uint256";
            }];
            readonly internalType: "struct CompoundLens.CTokenMetadata[]";
            readonly name: "";
            readonly type: "tuple[]";
        }];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly internalType: "contract CToken";
            readonly name: "cToken";
            readonly type: "address";
        }];
        readonly name: "cTokenUnderlyingPrice";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "cToken";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "underlyingPrice";
                readonly type: "uint256";
            }];
            readonly internalType: "struct CompoundLens.CTokenUnderlyingPrice";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly internalType: "contract CToken[]";
            readonly name: "cTokens";
            readonly type: "address[]";
        }];
        readonly name: "cTokenUnderlyingPriceAll";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "cToken";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "underlyingPrice";
                readonly type: "uint256";
            }];
            readonly internalType: "struct CompoundLens.CTokenUnderlyingPrice[]";
            readonly name: "";
            readonly type: "tuple[]";
        }];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly internalType: "contract ComptrollerLensInterface";
            readonly name: "comptroller";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "getAccountLimits";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "contract CToken[]";
                readonly name: "markets";
                readonly type: "address[]";
            }, {
                readonly internalType: "uint256";
                readonly name: "liquidity";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "shortfall";
                readonly type: "uint256";
            }];
            readonly internalType: "struct CompoundLens.AccountLimits";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [{
            readonly internalType: "contract Comp";
            readonly name: "comp";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "getCompBalanceMetadata";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "balance";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "votes";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "delegate";
                readonly type: "address";
            }];
            readonly internalType: "struct CompoundLens.CompBalanceMetadata";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly internalType: "contract Comp";
            readonly name: "comp";
            readonly type: "address";
        }, {
            readonly internalType: "contract ComptrollerLensInterface";
            readonly name: "comptroller";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "getCompBalanceMetadataExt";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "balance";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "votes";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "delegate";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "allocated";
                readonly type: "uint256";
            }];
            readonly internalType: "struct CompoundLens.CompBalanceMetadataExt";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [{
            readonly internalType: "contract Comp";
            readonly name: "comp";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "uint32[]";
            readonly name: "blockNumbers";
            readonly type: "uint32[]";
        }];
        readonly name: "getCompVotes";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "blockNumber";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "votes";
                readonly type: "uint256";
            }];
            readonly internalType: "struct CompoundLens.CompVotes[]";
            readonly name: "";
            readonly type: "tuple[]";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [{
            readonly internalType: "contract GovernorBravoInterface";
            readonly name: "governor";
            readonly type: "address";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "proposalIds";
            readonly type: "uint256[]";
        }];
        readonly name: "getGovBravoProposals";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "proposalId";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "proposer";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "eta";
                readonly type: "uint256";
            }, {
                readonly internalType: "address[]";
                readonly name: "targets";
                readonly type: "address[]";
            }, {
                readonly internalType: "uint256[]";
                readonly name: "values";
                readonly type: "uint256[]";
            }, {
                readonly internalType: "string[]";
                readonly name: "signatures";
                readonly type: "string[]";
            }, {
                readonly internalType: "bytes[]";
                readonly name: "calldatas";
                readonly type: "bytes[]";
            }, {
                readonly internalType: "uint256";
                readonly name: "startBlock";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "endBlock";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "forVotes";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "againstVotes";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "abstainVotes";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "canceled";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "executed";
                readonly type: "bool";
            }];
            readonly internalType: "struct CompoundLens.GovBravoProposal[]";
            readonly name: "";
            readonly type: "tuple[]";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [{
            readonly internalType: "contract GovernorBravoInterface";
            readonly name: "governor";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "voter";
            readonly type: "address";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "proposalIds";
            readonly type: "uint256[]";
        }];
        readonly name: "getGovBravoReceipts";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "proposalId";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "hasVoted";
                readonly type: "bool";
            }, {
                readonly internalType: "uint8";
                readonly name: "support";
                readonly type: "uint8";
            }, {
                readonly internalType: "uint96";
                readonly name: "votes";
                readonly type: "uint96";
            }];
            readonly internalType: "struct CompoundLens.GovBravoReceipt[]";
            readonly name: "";
            readonly type: "tuple[]";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [{
            readonly internalType: "contract GovernorAlpha";
            readonly name: "governor";
            readonly type: "address";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "proposalIds";
            readonly type: "uint256[]";
        }];
        readonly name: "getGovProposals";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "proposalId";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "proposer";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "eta";
                readonly type: "uint256";
            }, {
                readonly internalType: "address[]";
                readonly name: "targets";
                readonly type: "address[]";
            }, {
                readonly internalType: "uint256[]";
                readonly name: "values";
                readonly type: "uint256[]";
            }, {
                readonly internalType: "string[]";
                readonly name: "signatures";
                readonly type: "string[]";
            }, {
                readonly internalType: "bytes[]";
                readonly name: "calldatas";
                readonly type: "bytes[]";
            }, {
                readonly internalType: "uint256";
                readonly name: "startBlock";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "endBlock";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "forVotes";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "againstVotes";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "canceled";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "executed";
                readonly type: "bool";
            }];
            readonly internalType: "struct CompoundLens.GovProposal[]";
            readonly name: "";
            readonly type: "tuple[]";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [{
            readonly internalType: "contract GovernorAlpha";
            readonly name: "governor";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "voter";
            readonly type: "address";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "proposalIds";
            readonly type: "uint256[]";
        }];
        readonly name: "getGovReceipts";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "proposalId";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "hasVoted";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "support";
                readonly type: "bool";
            }, {
                readonly internalType: "uint96";
                readonly name: "votes";
                readonly type: "uint96";
            }];
            readonly internalType: "struct CompoundLens.GovReceipt[]";
            readonly name: "";
            readonly type: "tuple[]";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): CompoundLensInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CompoundLens;
}
