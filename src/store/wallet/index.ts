import { create } from "zustand";

interface ConnectWalletState {
  loading: boolean;
  balance: string;
  address: string;
  venomConnect: any;
  venomProvider: any;
  setLoading: (loading: boolean) => void;
  setBalance: (balance: string) => void;
  setAddress: (address: string) => void;
  setVenomConnect: (venomConnect: any) => void;
  setVenomProvider: (venomProvider: any) => void;
}

export const useConnectWallet = create<ConnectWalletState>((set) => ({
  loading: false,
  balance: "",
  address: "",
  venomConnect: undefined,
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
