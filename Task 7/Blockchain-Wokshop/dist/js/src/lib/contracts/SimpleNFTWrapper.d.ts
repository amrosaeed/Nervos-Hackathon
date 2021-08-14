import Web3 from 'web3';
import { MinimalistNFT } from '../../types/MinimalistNFT';
export declare class MinimalistNFTWrapper {
    web3: Web3;
    contract: MinimalistNFT;
    address: string;
    constructor(web3: Web3);
    get isDeployed(): boolean;
    getTotalSupply(addr: string): Promise<string>;
    getTokenSymbol(): Promise<string>;
    ownerOf(tokenId: number): Promise<string>;
    getTokenName(): Promise<string>;
    awardItem(player: string, tokenURI: string): Promise<string>;
    setTransferNFT(fromAddress: string, toAddress: string, tokenID: number): Promise<import("web3-core").TransactionReceipt>;
    deploy(fromAddress: string): Promise<any>;
    useDeployed(contractAddress: string): void;
}
