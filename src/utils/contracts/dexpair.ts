import { Address } from "everscale-inpage-provider";

import DexPairAbi from "@/abis/DexPair.json";
import { ever } from "./ever";

export interface ExchangeInfo {
  expected_amount: number;
  expected_fee: number;
}

export const getExchangeInfo = async (
  dexPairAddress: Address,
  spentTokenAddress: string,
  amount: number
): Promise<ExchangeInfo | undefined> => {
  await ever.ensureInitialized();
  await ever.requestPermissions({
    permissions: ["basic"],
  });

  const dexPair = new ever.Contract(DexPairAbi, dexPairAddress);

  try {
    const info: any = await (dexPair.methods as any)
      .expectedExchange({
        answerId: 0,
        amount,
        spent_token_root: spentTokenAddress,
      })
      .call();
    return info;
  } catch (err) {
    console.log(err);
  }
};
