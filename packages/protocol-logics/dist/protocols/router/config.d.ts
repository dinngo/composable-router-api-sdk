type ContractNames = 'Permit2' | 'SpenderPermit2ERC20';
export declare const contractAddressMap: Record<number, {
    [k in ContractNames]: string;
}>;
export declare function getContractAddress(chainId: number, name: ContractNames): string;
export declare function setContractAddress(chainId: number, name: ContractNames, address: string): void;
export {};
