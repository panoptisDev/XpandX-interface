import _ from "lodash";
import { Symbol } from "@/typings/coin";
import { useAvailableCoins } from "./useAvailableCoins";

export const useCoinPrice = (symbol: Symbol) => {
  const coins = useAvailableCoins();
  return _.find(coins, (c) => c.symbol === symbol)?.price || 0;
};
