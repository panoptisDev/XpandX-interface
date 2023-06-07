import _ from "lodash";
import { Address, ProviderRpcClient } from "everscale-inpage-provider";

import { ADDRESSES } from "./_constant";
import DexRootAbi from "@/abis/DexRoot.json";
import { ROOT_DATA } from "./_constant";
import { loadContract } from "./ever";

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

  try {
    const pair = await (dexRoot.methods as any)
      .getExpectedPairAddress({
        answerId: 0,
        left_root: leftRoot.address,
        right_root: rightRoot.address,
      })
      .call();
    return pair.value0;
  } catch (err) {
    console.log(err);
  }
};
