import { create } from "zustand";
import { COINS } from "@/constants/coin";
import { Coin } from "@/typings/coin";
import { ExchangeInfo } from "@/typings/swap";

interface SwapState {
  swapTokens: Coin[];
  amount?: string;
  loading: boolean;
  reverseTokens: () => void;
  setLoading: (loading: boolean) => void;
  setAmount: (amount: string) => void;
  onChangeSwapTokens: (tokens: Coin[]) => void;
  setSwapInfo: (swapInfo?: ExchangeInfo) => void;
  swapInfo?: ExchangeInfo;
}

export const useSwap = create<SwapState>((set) => ({
  loading: false,
  swapTokens: [COINS[0], COINS[1]],
  setLoading: (loading) =>
    set(() => ({
      loading,
    })),
  setAmount: (amount) =>
    set(() => ({
      amount,
    })),
  reverseTokens: () =>
    set((state) => ({
      swapTokens: [...state.swapTokens.reverse()],
    })),
  onChangeSwapTokens: (tokens: Coin[]) =>
    set(() => ({
      swapTokens: tokens,
    })),
  setSwapInfo: (swapInfo) =>
    set(() => ({
      swapInfo,
    })),
}));
