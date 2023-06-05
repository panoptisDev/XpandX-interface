import DexRootAbi from "@/abis/DexRoot.json";
import DexVaultAbi from "@/abis/DexVault.json";
import XpandaXAbi from "@/abis/Xpandax.json";
import usdtAbi from "@/abis/USDT.json";
import usdcAbi from "@/abis/USDC.json";
import daiAbi from "@/abis/DAI.json";
import bnbAbi from "@/abis/BNB.json";
import wethAbi from "@/abis/WETH.json";
import wtdAbi from "@/abis/WTD.json";
import wvenomAbi from "@/abis/WVENOM.json";

export const ADDRESSES = {
  DEXROOT: "0:5c4796acbcd1d056d54fd049a4e2f3ce9ccbc98dd7ef8beea34863503c7c8c59",
  XPANDAX: "0:a1d0f1d6b42ac9caa00bc61dba95034e029bc0160d0e5a68da87d5336278862f",
  USDT: "0:1906d466d3f737868ed55e4d7b10119561daefbfa04d5724ab586685e2e1913f",
  USDC: "0:7dc8ec27fe011374ca68648eb210034016f9033754ff26d77cb68d22eca35535",
  WVENOM: "0:3d7cadf3dec1803f5006c339ea0b11bf6b52b1f7753c303567da40c6b641bcee",
  WTD: "0:23b4d00a6e121fdb0df857d64ffe08867697be0439ad7e73a96804fbe83c1ae6",
  WETH: "0:23b2674db85bdb9591e417e1dae1049ec454eddc6fd66bc1a91bd093c1ae7e6c",
  DEXVAULT:
    "0:2e33c78355bfc9a16c5c867b9e1f4ca9b259f310a5a8187ae98ed801e98819f8",
  BNB: "0:6dbc0132816bd245e144b299f3ece71966d9b6643f5c75d42ac0a3178c2de83b",
  DAI: "0:56b39a55f65653e15a2a4b6f86b087c4ddf63137f4af88f8b5d0e455fd277067",
};

export const ROOT_DATA = [
  {
    address: ADDRESSES.DEXROOT,
    abi: DexRootAbi,
  },
  {
    address: ADDRESSES.DEXVAULT,
    abi: DexVaultAbi,
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
  {
    address: ADDRESSES.DAI,
    abi: daiAbi,
  },
  {
    address: ADDRESSES.WETH,
    abi: wethAbi,
  },
  {
    address: ADDRESSES.BNB,
    abi: bnbAbi,
  },
  {
    address: ADDRESSES.WTD,
    abi: wtdAbi,
  },
  {
    address: ADDRESSES.WVENOM,
    abi: wvenomAbi,
  },
];
