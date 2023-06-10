import { Address, ProviderRpcClient } from "everscale-inpage-provider";

import DexPairAbi from "@/abis/DexPair.json";
import DexAccountAbi from "@/abis/DexAccount.json";
import { bigNumberAsFloat } from "./_utils";
import { readableNumberFormatter } from "../number";
import { loadContract } from "./ever";
import { ADDRESSES } from "./_constant";
import { ExchangeInfo } from "@/typings/swap";
import { BigNumber } from "bignumber.js";

interface ExchangeProps {
  spent_amount: number;
  spent_token_root: string;
  receive_token_root: string;
  expected_amount: number;
  send_gas_to: string;
  provider: ProviderRpcClient;
}

export const getExchangeInfo = async (
  dexPairAddress: Address,
  spentTokenAddress: string,
  amount: number,
  provider: ProviderRpcClient
): Promise<Partial<ExchangeInfo> | undefined> => {
  const dexPair = await loadContract(dexPairAddress, DexPairAbi, provider);
  try {
    const info = await (dexPair.methods as any)
      .expectedExchange({
        answerId: 0,
        amount: amount * 1e18,
        spent_token_root: spentTokenAddress,
      })
      .call();

    return {
      expectedAmountAsString: readableNumberFormatter(
        bigNumberAsFloat(info.expected_amount, 18),
        {
          maximumFractionDigits: 4,
        }
      ),
      expectedFeeAsString: readableNumberFormatter(
        bigNumberAsFloat(info.expected_fee, 18),
        {
          maximumFractionDigits: 4,
        }
      ),
      expectedAmountAsNumber: bigNumberAsFloat(info.expected_amount, 18),
      expectedFeeAsNumber: bigNumberAsFloat(info.expected_fee, 18),
    };
  } catch (err) {
    console.log(err);
  }
};

export const exchange = async ({
  spent_amount,
  spent_token_root,
  receive_token_root,
  send_gas_to,
  expected_amount,
  provider,
}: ExchangeProps): Promise<void> => {
  const dexAccount = await loadContract(
    ADDRESSES.USDT,
    DexAccountAbi,
    provider
  );
  await (dexAccount.methods as any)
    .exchange({
      call_id: 0,
      spent_amount: spent_amount * 1e18,
      spent_token_root: new Address(spent_token_root),
      receive_token_root: new Address(receive_token_root),
      expected_amount: expected_amount * 1e18,
      send_gas_to: new Address(send_gas_to),
    })
    .send({
      from: new Address(send_gas_to),
      amount: "1000000000",
      bounce: true,
    });
};

interface LiquidityProps {
  left_amount: string;
  left_root: string;
  right_root: string;
  right_amount: string;
  expected_lp_root: Address;
  owner: string;
  provider: ProviderRpcClient;
}

export const depositLiquidity = async ({
  provider,
  left_amount,
  right_amount,
  left_root,
  right_root,
  expected_lp_root,
  owner,
}: LiquidityProps) => {
  const dexAccount = await loadContract(
    ADDRESSES.USDT,
    DexAccountAbi,
    provider
  );

  const tx = await (dexAccount.methods as any)
    .depositLiquidity({
      call_id: 0,
      left_root: new Address(left_root),
      left_amount: left_amount,
      right_root: new Address(right_root),
      right_amount: right_amount,
      expected_lp_root: expected_lp_root,
      auto_change: true,
      send_gas_to: owner,
    })
    .send({
      from: owner,
      amount: "1000000000",
    });
  //
  console.log("transaction", tx.id);
};

interface ExpectedDepositLiquidity {
  left_amount: string;
  right_amount: string;
  pair_address: Address;
  provider: ProviderRpcClient;
}

export const expectedDepositLiquidity = async ({
  provider,
  left_amount,
  right_amount,
  pair_address,
}: ExpectedDepositLiquidity) => {
  const dexPair = await loadContract(pair_address, DexPairAbi, provider);
  console.log({ left_amount, right_amount, dexPair: dexPair.address });
  const data = await (dexPair.methods as any)
    .expectedDepositLiquidity({
      answerId: 0,
      left_amount,
      right_amount,
      auto_change: true,
    })
    .call();
  return data.value0;
};
