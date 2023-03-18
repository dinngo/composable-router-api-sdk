type ContractNames = 'Permit2';
export declare const contractAddressMap: Record<number, {
    [k in ContractNames]: string;
}>;
export declare function getContractAddress(chainId: number, name: ContractNames): string;
export {};
