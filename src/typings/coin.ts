import { COINS } from "@/constants/coin";

export type Symbol = typeof COINS[number]["symbol"];

export type Coin = {
  img: string;
  name: string;
  symbol: string;
  address: string;
  price?: number;
};
