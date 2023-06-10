import { create } from "zustand";

interface PoolsState {
  minPrice: number;
  maxPrice: number;
  setMinPrice: (price: number) => void;
  setMaxPrice: (price: number) => void;
}

export const usePools = create<PoolsState>((set) => ({
  minPrice: 1550,
  maxPrice: 2450,
  setMinPrice: (price) =>
    set(() => ({
      minPrice: price,
    })),
  setMaxPrice: (price) =>
    set(() => ({
      maxPrice: price,
    })),
}));
