import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import _ from "lodash";

import { getCoinPrice } from "./request";
import { QueryKeysEnum } from "@/typings/query-key";

export const useCoinPrices = (option?: UseQueryOptions<any[], Error>) => {
  return useQuery<any[], Error>(
    [QueryKeysEnum.GET_COIN_PRICES],
    () => getCoinPrice(),
    {
      staleTime: 600000,
      ...option,
    }
  );
};
