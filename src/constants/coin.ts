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

export const PAIRS_DATA = [
  {
    name: "XPandaX-USDT",
    pairAddress:
      "0:126c02e27f5e48cf73c44be7e5590c8691ad602e6c10828cfdb6a603bb7d3224",
    lp_token_root:
      "0:54c8d9f39768c5a9e0f93e2b39c91132a535730d8dcbad49a7d0027291dce9d8",
    pairToken: {
      leftToken: "/icons/coins/xpandx.svg",
      rightToken: "/icons/coins/usdt.svg",
    },
  },
  {
    name: "WETH-USDT",
    pairAddress:
      "0:6ba5815a93cee9fd648d670a694f328386df6834f9ce30084291e7d78d842d03",
    lp_token_root:
      "0:76c3cb275a30a1030bf576a21c5724090eecdc51391f961458004a9b6d016529",
    pairToken: {
      leftToken: "/eth.svg",
      rightToken: "/icons/coins/usdt.svg",
    },
  },
  {
    name: "WTD-USDT",
    pairAddress:
      "0:6bce3084ee9a643b4fdc0eb785ac9a41565564b7b1952ae525994c9c8010f804",
    lp_token_root:
      "0:62e7be300ff8c9c456a8caa5f1ba6a3eb40112198abb4dacc0bdefa6312af120",
    pairToken: {
      leftToken: "/eth.svg",
      rightToken: "/icons/coins/usdt.svg",
    },
  },
  {
    name: "WBNB-USDT",
    pairAddress:
      "0:b92eb76ac2f45ec3dadf1121a968215238eb8c55ffef21631cedd07be4d38107",
    lp_token_root:
      "0:c4ef44ea1952db08e3a6d51b193ce4b60d72818ca975c26bdf7e03772b0b1d9f",
    pairToken: {
      leftToken: "/bnb.svg",
      rightToken: "/icons/coins/usdt.svg",
    },
  },
  {
    name: "DAI-USDT",
    pairAddress:
      "0:98fe1a3d271684c3e4fbfd2301869f1efd583ce69e6fe0c06da90f53e5dc2287",
    lp_token_root:
      "0:93f9a57b10337db7adc8dcfe43cc33f05a56d92510adb1291aeb8ab211c369b6",
    pairToken: {
      leftToken: "/icons/coins/dai.svg",
      rightToken: "/icons/coins/usdt.svg",
    },
  },
  {
    name: "WVENOM-USDT",
    pairAddress:
      "0:04318e51ffc7f222069262fe609f6445efeb997f59ca35039f8b41383c0b04ce",
    lp_token_root:
      "0:e3f72c4dae05d7053ffabeb36b66111f95b6b9a9f871d0af88e1b17e8ae9bc7c",
    pairToken: {
      leftToken: "/icons/coins/venom.svg",
      rightToken: "/icons/coins/usdt.svg",
    },
  },
];

export const TOKENS_DATA = [
  {
    name: "USDC",
    address:
      "0:7dc8ec27fe011374ca68648eb210034016f9033754ff26d77cb68d22eca35535",
    icon: "/usdc.svg",
    symbol: "USDC",
  },
  {
    name: "USDT",
    address:
      "0:1906d466d3f737868ed55e4d7b10119561daefbfa04d5724ab586685e2e1913f",
    icon: "/usdt.svg",
    symbol: "USDT",
  },
  {
    name: "WETH",
    address:
      "0:23b2674db85bdb9591e417e1dae1049ec454eddc6fd66bc1a91bd093c1ae7e6c",
    icon: "/eth.svg",
    symbol: "WETH",
  },
  {
    name: "WTD",
    address:
      "0:23b4d00a6e121fdb0df857d64ffe08867697be0439ad7e73a96804fbe83c1ae6",
    icon: "/eth.svg",
    symbol: "WTD",
  },
  {
    name: "XpandaX",
    address:
      "0:a1d0f1d6b42ac9caa00bc61dba95034e029bc0160d0e5a68da87d5336278862f",
    icon: "/icons/coins/xpandx.svg",
    symbol: "XPX",
  },
  {
    name: "WVENOM",
    address:
      "0:3d7cadf3dec1803f5006c339ea0b11bf6b52b1f7753c303567da40c6b641bcee",
    icon: "/icons/coins/venom.svg",
    symbol: "WVENOM",
  },
  {
    name: "WBNB",
    address:
      "0:6dbc0132816bd245e144b299f3ece71966d9b6643f5c75d42ac0a3178c2de83b",
    icon: "/bnb.svg",
    symbol: "WBNB",
  },
  {
    name: "DAI",
    address:
      "0:56b39a55f65653e15a2a4b6f86b087c4ddf63137f4af88f8b5d0e455fd277067",
    icon: "/dai.svg",
    symbol: "DAI",
  },
];
