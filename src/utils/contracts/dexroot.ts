import _ from "lodash";
import { Address } from "everscale-inpage-provider";

import { ADDRESSES } from "./_constant";
import DexRootAbi from "@/abis/DexRoot.json";
import { ROOT_DATA } from "./_constant";
import { loadContract } from "./ever";

export const getPair = async (
  leftRootAddress: string,
  rightRootAddress: string
): Promise<Address | undefined> => {
  const leftAbi = _.find(ROOT_DATA, (r) => r.address === leftRootAddress)?.abi;
  const rightAbi = _.find(
    ROOT_DATA,
    (r) => r.address === rightRootAddress
  )?.abi;

  const dexRoot = await loadContract(ADDRESSES.DEXROOT, DexRootAbi);
  const leftRoot = await loadContract(leftRootAddress, leftAbi);
  const rightRoot = await loadContract(rightRootAddress, rightAbi);

  try {
    const pair: any = await (dexRoot.methods as any)
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
