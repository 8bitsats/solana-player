import { SxProps } from "@mui/system";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
// import { clusterApiUrl } from "@solana/web3.js";

export const commonSx: SxProps = { width: "50%", marginLeft: "1rem" };
export const commonML: SxProps = { marginLeft: "0.5rem" };

export const urlBase = "";

export interface TransactionLinkProps {
  callback(msg: string): void;
}

export const transactionLink = (sig: string): string => {
  return `https://solscan.io/tx/${sig}?cluster=devnet`;
  // return `https://explorer.solana.com/tx/${sig}?cluster=custom&customUrl=http://localhost:8899`;
};

export const VERSION = "1.0";
// Replace this with your live RPC URL
export const endpoint = "https://mainnet.helius-rpc.com/?api-key=1771237b-e3a5-49cb-b190-af95b2113788";
// export const endpoint = clusterApiUrl(WalletAdapterNetwork.Devnet);