import _ from "lodash";

import { bigNumberAsFloat } from "@/utils/contracts/_utils";
import { COINS } from "@/constants/coin";
import { ethers } from "ethers";

export const useConverBigNummber = (symbol: string, balanceBigNumber?: ethers.BigNumber) => {
  const foundCoin = COINS.find(
    (coin: { symbol: string }) => coin.symbol === symbol
  );

  if (!foundCoin) return 0;

  return balanceBigNumber
    ? bigNumberAsFloat(balanceBigNumber, foundCoin?.decimals)
    : 0;
};
