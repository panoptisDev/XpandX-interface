import { ethers } from "ethers";
import { create } from "zustand";

interface ConnectWalletState {
  loading: boolean;
  balance: ethers.BigNumber;
  address: string;
  venomConnect: any;
  venomProvider: any;
  setLoading: (loading: boolean) => void;
  setBalance: (balance: ethers.BigNumber) => void;
  setAddress: (address: string) => void;
  setVenomConnect: (venomConnect: any) => void;
  setVenomProvider: (venomProvider: any) => void;
}

export const useConnectWallet = create<ConnectWalletState>((set) => ({
  loading: false,
  balance: ethers.utils.parseEther('0'),
  address: "",
  venomConnect: undefined,
  venomProvider: undefined,
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
