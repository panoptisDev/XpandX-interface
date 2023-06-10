import {
  ProviderRpcClient,
  Address,
  Contract,
} from "everscale-inpage-provider";

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
