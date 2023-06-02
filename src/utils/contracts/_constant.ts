import DexRootAbi from "@/abis/DexRoot.json";
import XpandaXAbi from "@/abis/Xpandax.json";
import usdtAbi from "@/abis/USDT.json";
import usdcAbi from "@/abis/USDC.json";

export const ADDRESSES = {
  DEXROOT: "0:34187c5dcb9fb62c2a617389a1a08512f90fe16c72f3ce3a399f9ad0d4a1b580",
  XPANDAX: "0:a1d0f1d6b42ac9caa00bc61dba95034e029bc0160d0e5a68da87d5336278862f",
  USDT: "0:1906d466d3f737868ed55e4d7b10119561daefbfa04d5724ab586685e2e1913f",
  USDC: "0:7dc8ec27fe011374ca68648eb210034016f9033754ff26d77cb68d22eca35535",
};

export const ROOT_DATA = [
  {
    address: ADDRESSES.DEXROOT,
    abi: DexRootAbi,
  },
  {
    address: ADDRESSES.XPANDAX,
    abi: XpandaXAbi,
  },
  {
    address: ADDRESSES.USDT,
    abi: usdtAbi,
  },
  {
    address: ADDRESSES.USDC,
    abi: usdcAbi,
  },
];
