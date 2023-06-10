import { ADDRESSES } from "@/utils/contracts/_constant";
import { Address } from "everscale-inpage-provider";

export interface Coin {
  id: string;
  img: string;
  name: string;
  symbol: string;
  address: string;
  decimals: number;
  balance?: number;
  deployedAddress?: Address;
}

export const COINS: Coin[] = [
  {
    id: "",
    img: "/icons/coins/xpandx.svg",
    name: "XpandX",
    symbol: "XPX",
    address: ADDRESSES.XPANDAX,
    decimals: 18,
  },
  {
    id: "tether",
    img: "/icons/coins/usdt.svg",
    name: "Tether USD",
    symbol: "USDT",
    address: ADDRESSES.USDT,
    decimals: 18,
  },
  {
    id: "usd-coin",
    img: "/icons/coins/usdc.svg",
    name: "USD Coin",
    symbol: "USDC",
    address: ADDRESSES.USDC,
    decimals: 18,
  },
  {
    id: "venom",
    img: "/icons/coins/venom.svg",
    name: "Wrapped Venom",
    symbol: "WVENOM",
    address: ADDRESSES.WVENOM,
    decimals: 18,
  },
  // {
  //   id: "wrapped-bitcoin",
  //   img: "/icons/coins/wrapped-btc.svg",
  //   name: "Wrapped Bitcoin",
  //   symbol: "WBTC",
  //   address: "",
  //   decimals: 18,
  // },
  {
    id: "weth",
    img: "/icons/coins/wrapped-eth.svg",
    name: "Wrapped Ethereum",
    symbol: "WETH",
    address: ADDRESSES.WETH,
    decimals: 18,
  },
  {
    id: "binancecoin",
    img: "/icons/coins/binance.svg",
    name: "Binance",
    symbol: "BNB",
    address: ADDRESSES.BNB,
    decimals: 18,
  },
  {
    id: "dai",
    img: "/icons/coins/dai.svg",
    name: "DAI",
    symbol: "DAI",
    address: ADDRESSES.DAI,
    decimals: 18,
  },
];
