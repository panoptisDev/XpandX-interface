import { useEffect, useState } from "react";
import { useConnectWallet } from "@/store/wallet";
import _ from "lodash";

import { getWalletOf, getBalance } from "@/utils/contracts/token";

export const useTokenState = (tokenAddress: string) => {
  const [balance, setBalance] = useState(0);
  const venomProvider = useConnectWallet((state) => state.venomProvider);
  const walletAddress = useConnectWallet((state) => state.address);

  useEffect(() => {
    (async () => {
      try {
        if (walletAddress && venomProvider) {
          const address = await getWalletOf(
            tokenAddress,
            walletAddress,
            venomProvider
          );
          if (address) {
            const balance = await getBalance(address.toString(), venomProvider);
            if (balance) {
              setBalance(+balance / 1e18);
            }
          }
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, [walletAddress, tokenAddress, venomProvider]);

  return { balance };
};
