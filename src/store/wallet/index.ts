import { create } from "zustand";
import { VenomConnect } from "venom-connect";
import { ProviderRpcClient } from "everscale-inpage-provider";

interface ConnectWalletState {
  loading: boolean;
  balance: number;
  address?: string;
  venomConnect?: VenomConnect;
  venomProvider?: ProviderRpcClient;
  setLoading: (loading: boolean) => void;
  setBalance: (balance: number) => void;
  setAddress: (address?: string) => void;
  setVenomConnect: (venomConnect: VenomConnect) => void;
  setVenomProvider: (venomProvider: ProviderRpcClient) => void;
}

export const useConnectWallet = create<ConnectWalletState>((set) => ({
  loading: false,
  balance: 0,
  setLoading: (loading) =>
    set(() => ({
      loading,
    })),
  setBalance: (balance) =>
    set(() => ({
      balance,
    })),
  setAddress: (address) =>
    set(() => ({
      address,
    })),
  setVenomConnect: (venomConnect) =>
    set(() => ({
      venomConnect,
    })),
  setVenomProvider: (venomProvider) =>
    set(() => ({
      venomProvider,
    })),
}));
