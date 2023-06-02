import { Address } from "everscale-inpage-provider";
import _ from "lodash";

import { ADDRESSES } from "./_constant";
import DexRootAbi from "@/abis/DexRoot.json";
import { ROOT_DATA } from "./_constant";
import { ever } from "./ever";

export const getPair = async (
  leftRootAddress: string,
  rightRootAddress: string
): Promise<Address | undefined> => {
  await ever.ensureInitialized();
  await ever.requestPermissions({
    permissions: ["basic"],
  });
  const dexRootAddress = new Address(ADDRESSES.DEXROOT);
  const leftAddress = new Address(leftRootAddress);
  const rightAddress = new Address(rightRootAddress);
  const leftAbi = _.find(ROOT_DATA, (r) => r.address === leftRootAddress)?.abi;
  const rightAbi = _.find(
    ROOT_DATA,
    (r) => r.address === rightRootAddress
  )?.abi;

  const dexRoot = new ever.Contract(DexRootAbi, dexRootAddress);
  const leftRoot = new ever.Contract(leftAbi, leftAddress);
  const rightRoot = new ever.Contract(rightAbi, rightAddress);

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
