type ContractNames = 'TokenTransferProxy';
export declare const contractAddressMap: Record<number, {
    [k in ContractNames]: string;
}>;
export declare function getContractAddress(chainId: number, name: ContractNames): string;
export declare const tokenListUrlsMap: Record<number, string[]>;
export {};
