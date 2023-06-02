import _ from "lodash";
import { COINS } from "@/constants/coin";

export const useAvailableCoins = () => {
  return _.filter(COINS, (c) => !!c.address);
};
