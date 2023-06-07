import {
  ProviderRpcClient,
  Address,
  Contract,
} from "everscale-inpage-provider";
// import { EverscaleStandaloneClient } from "everscale-standalone-client";

// export const ever = new ProviderRpcClient({
//   fallback: () =>
//     EverscaleStandaloneClient.create({
//       connection: {
//         id: 1002,
//         group: "venom_testnet",
//         type: "jrpc",
//         data: {
//           endpoint: "https://jrpc-devnet.venom.foundation/",
//         },
//       },
//       initInput: "../../node_modules/nekoton-wasm/nekoton_wasm_bg.wasm",
//     }),
// });

export const loadContract = async (
  address: string | Address,
  abi: any,
  provider: ProviderRpcClient
) => {
  return new Contract(
    provider,
    abi,
    typeof address === "string" ? new Address(address) : address
  );
};
