import _ from "lodash";
import { Symbol } from "@/typings/coin";

import { useAvailableCoins } from "./useAvailableCoins";
import { useCoinPrices } from "@/apis/coin";

export const useCoinPrice = (symbol: Symbol) => {
  const coins = useAvailableCoins();
  const { data: coinPrices } = useCoinPrices();
  const coin = _.find(coins, (c) => c.symbol === symbol);

  return coinPrices ? _.get(coinPrices, `${coin?.id}.usd`, 1) : 1;
};
