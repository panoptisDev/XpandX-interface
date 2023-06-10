import _ from "lodash";
import { Address, ProviderRpcClient } from "everscale-inpage-provider";

import { ADDRESSES } from "./_constant";
import DexRootAbi from "@/abis/DexRoot.json";
import DexAccountAbi from "@/abis/DexAccount.json";
import { ROOT_DATA } from "./_constant";
import { loadContract } from "./ever";

export const getExpectedAccountAddress = async (
  walletAddress: string,
  provider: ProviderRpcClient
): Promise<Address | undefined> => {
  const dexRoot = await loadContract(ADDRESSES.DEXROOT, DexRootAbi, provider);

  await (dexRoot.methods as any)
    .deployAccount({
      account_owner: new Address(walletAddress),
      send_gas_to: new Address(walletAddress),
    })
    .send({
      from: new Address(walletAddress),
      amount: "4000000000",
    });

  const account = await (dexRoot.methods as any)
    .getExpectedAccountAddress({
      answerId: 0,
      account_owner: new Address(walletAddress),
    })
    .call();
  return account.value0;
};

export const getPair = async (
  leftRootAddress: string,
  rightRootAddress: string,
  provider: ProviderRpcClient
): Promise<Address | undefined> => {
  const leftAbi = _.find(ROOT_DATA, (r) => r.address === leftRootAddress)?.abi;
  const rightAbi = _.find(
    ROOT_DATA,
    (r) => r.address === rightRootAddress
  )?.abi;

  const dexRoot = await loadContract(ADDRESSES.DEXROOT, DexRootAbi, provider);
  const leftRoot = await loadContract(leftRootAddress, leftAbi, provider);
  const rightRoot = await loadContract(rightRootAddress, rightAbi, provider);
  const pair = await (dexRoot.methods as any)
    .getExpectedPairAddress({
      answerId: 0,
      left_root: leftRoot.address,
      right_root: rightRoot.address,
    })
    .call();
  return pair.value0;
};

export const getWallets = async (
  dexAccountAddress: Address,
  provider: ProviderRpcClient
): Promise<Array<Address>[] | undefined> => {
  const dexAccount = await loadContract(
    dexAccountAddress,
    DexAccountAbi,
    provider
  );
  const wallets = await (dexAccount.methods as any).getWallets().call();
  return wallets.value0;
};
