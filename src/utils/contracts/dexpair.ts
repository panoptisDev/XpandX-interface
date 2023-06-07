import { Address } from "everscale-inpage-provider";

import DexPairAbi from "@/abis/DexPair.json";
import DexAccountAbi from "@/abis/DexAccount.json";
import { bigNumberAsFloat } from "./_utils";
import { readableNumberFormatter } from "../number";
import { loadContract } from "./ever";
import { ADDRESSES } from "./_constant";
import { ExchangeInfo } from "@/typings/swap";

interface ExchangeProps {
  spent_amount: number;
  spent_token_root: string;
  receive_token_root: string;
  expected_amount: number;
  send_gas_to: string;
}

export const getExchangeInfo = async (
  dexPairAddress: Address,
  spentTokenAddress: string,
  amount: number
): Promise<Partial<ExchangeInfo> | undefined> => {
  const dexPair = await loadContract(dexPairAddress, DexPairAbi);
  try {
    const info: any = await (dexPair.methods as any)
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
}: ExchangeProps): Promise<void> => {
  const dexAccount = await loadContract(ADDRESSES.USDT, DexAccountAbi);
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
