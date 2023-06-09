import _ from "lodash";
import { Address, ProviderRpcClient } from "everscale-inpage-provider";

import TokenAbi from "@/abis/TokenRoot.json";
import TokenWalletUpgradeableAbi from "@/abis/TokenWalletUpgradeable.json";
import { loadContract } from "./ever";

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
