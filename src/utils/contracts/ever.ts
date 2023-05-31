import { ProviderRpcClient } from "everscale-inpage-provider";
import { EverscaleStandaloneClient } from "everscale-standalone-client";

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
