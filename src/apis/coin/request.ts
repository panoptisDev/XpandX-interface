import axios from "axios";
import { COINS } from "@/constants/coin";

const coinIds = COINS.filter((id) => !!id)
  .map((c) => c.id)
  .join(",");

export const getCoinPrice = async (ids = coinIds): Promise<any> => {
  const { data } = await axios.get(
    `https://api.coingecko.com/api/v3/simple/price`,
    {
      params: {
        vs_currencies: "usd",
        ids,
      },
    }
  );

  return data;
};
