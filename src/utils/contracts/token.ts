import _ from "lodash";
import { Address, ProviderRpcClient } from "everscale-inpage-provider";

import TokenAbi from "@/abis/TokenRoot.json";
import TokenWalletUpgradeableAbi from "@/abis/TokenWalletUpgradeable.json";
import { loadContract } from "./ever";

interface TransferProps {
  address: string;
  amount: number;
  recipient: Address;
  provider: ProviderRpcClient;
  walletAddress: string;
  deployWalletValue?: string;
}

export const getWalletOf = async (
  tokenAddress: string,
  walletAddress: string,
  provider: ProviderRpcClient
): Promise<Address | undefined> => {
  const tokenContract = await loadContract(tokenAddress, TokenAbi, provider);

  const token = await (tokenContract.methods as any)
    .walletOf({
      answerId: 0,
      walletOwner: new Address(walletAddress),
    })
    .call();
  return token.value0;
};

export const deployWallet = async (
  tokenAddress: string,
  walletAddress: string,
  provider: ProviderRpcClient
): Promise<void> => {
  const tokenState = (
    await provider?.getFullContractState({
      address: new Address(tokenAddress),
    })
  )?.state;

  if (tokenState?.isDeployed) return;
  const tokenContract = await loadContract(tokenAddress, TokenAbi, provider);
  await (tokenContract.methods as any)
    .deployWallet({
      answerId: 0,
      walletOwner: new Address(walletAddress),
      deployWalletValue: "200000000",
    })
    .send({
      from: new Address(walletAddress),
      amount: "500000000",
      bounce: true,
    });
};

export const getBalance = async (
  address: string,
  provider: ProviderRpcClient
): Promise<string | undefined> => {
  const tokenContract = await loadContract(
    address,
    TokenWalletUpgradeableAbi,
    provider
  );
  const token = await (tokenContract.methods as any)
    .balance({
      answerId: 0,
    })
    .call();
  return token.value0;
};

export const transfer = async ({
  address,
  amount,
  recipient,
  provider,
  walletAddress,
  deployWalletValue,
}: TransferProps): Promise<void> => {
  const tokenContract = await loadContract(
    address,
    TokenWalletUpgradeableAbi,
    provider
  );

  await (tokenContract.methods as any)
    .transfer({
      amount: amount * 1e18,
      recipient,
      deployWalletValue: deployWalletValue ?? "200000000",
      remainingGasTo: new Address(walletAddress),
      notify: true,
      payload: "te6ccgEBAQEAAgAAAA==",
    })
    .send({
      from: new Address(walletAddress),
      amount: "500000000",
      bounce: false,
    });
};
