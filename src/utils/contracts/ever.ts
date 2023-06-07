import { ProviderRpcClient } from "everscale-inpage-provider";
import { EverscaleStandaloneClient } from "everscale-standalone-client";
import { Address, Contract } from "everscale-inpage-provider";

export const ever = new ProviderRpcClient({
  fallback: () =>
    EverscaleStandaloneClient.create({
      connection: {
        id: 2, // network id
        type: "graphql",
        data: {
          // create your own project at https://dashboard.evercloud.dev
          endpoints: ["https://gql-devnet.venom.network/graphql/"],
        },
      },
    }),
});

export const loadContract = async (address: string | Address, abi: any) => {
  return new Contract(
    ever,
    abi,
    typeof address === "string" ? new Address(address) : address
  );
};
