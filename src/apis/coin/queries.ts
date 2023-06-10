import { ProviderRpcClient } from "everscale-inpage-provider";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import _ from "lodash";

import { getCoinPrice } from "./request";
import { QueryKeysEnum } from "@/typings/query-key";
import { useConnectWallet } from "@/store/wallet";
import { COINS, Coin } from "@/constants/coin";
import { getWalletOf, getBalance } from "@/utils/contracts/token";

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

export const useTokenData = (option?: UseQueryOptions<Coin[], Error>) => {
  const venomProvider = useConnectWallet((state) => state.venomProvider);
  const walletAddress = useConnectWallet((state) => state.address);

  return useQuery<Coin[], Error>(
    [QueryKeysEnum.GET_COIN_BALANCES],
    async () => {
      const balances = await Promise.all(
        COINS.map(async (coin): Promise<Coin> => {
          const { balance, deployedAddress } = await getTokenState(
            coin.address,
            walletAddress!,
            venomProvider!
          );
          return {
            ...coin,
            balance,
            deployedAddress,
          };
        })
      );

      return balances;
    },
    {
      staleTime: 600000,
      enabled: !!walletAddress && !!venomProvider,
      ...option,
    }
  );
};

const getTokenState = async (
  tokenAddress: string,
  walletAddress: string,
  venomProvider: ProviderRpcClient
) => {
  try {
    const address = await getWalletOf(
      tokenAddress,
      walletAddress!,
      venomProvider!
    );

    if (address) {
      const balance = await getBalance(address.toString(), venomProvider!);
      if (balance) {
        return { balance: +balance / 1e18, deployedAddress: address };
      }
    }
    return { balance: 0, deployedAddress: undefined };
  } catch (err) {
    return { balance: 0, deployedAddress: undefined };
  }
};
