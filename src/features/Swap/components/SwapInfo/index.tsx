import { useEffect } from "react";
import { Box, Stack, Image, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { Address } from "everscale-inpage-provider";
import _ from "lodash";

import { NoteIcon } from "@/icons";
import { getPair } from "@/utils/contracts/dexroot";
import { getExchangeInfo } from "@/utils/contracts/dexpair";
import { useSwap } from "@/store/swap";
import { useCoinPrice, useDebounce } from "@/hooks";
import { ExchangeInfo } from "@/typings/swap";
import { useConnectWallet } from "@/store/wallet";

interface InfoItemProps {
  name: string;
  value: string;
}

export const SwapInfo = () => {
  const { t } = useTranslation();

  const swapTokens = useSwap((state) => state.swapTokens);
  const swapInfo = useSwap((state) => state.swapInfo);
  const amount = useSwap((state) => state.amount);
  const setLoading = useSwap((state) => state.setLoading);
  const setSwapInfo = useSwap((state) => state.setSwapInfo);
  const venomProvider = useConnectWallet((state) => state.venomProvider);

  const leftRootPrice = useCoinPrice(swapTokens[0].symbol);
  const rightRootPrice = useCoinPrice(swapTokens[1].symbol);
  const rightRootAmount = (leftRootPrice / rightRootPrice) * _.toNumber(amount);

  const rate = leftRootPrice / rightRootPrice;
  const debounceAmount = useDebounce(amount, 300);

  useEffect(() => {
    (async () => {
      if (!venomProvider) return;
      try {
        setLoading(true);
        const address = await getPair(
          swapTokens[0].address,
          swapTokens[1].address,
          venomProvider
        );
        const amount = _.toNumber(debounceAmount) || 0;
        const exchangeInfo = await getExchangeInfo(
          address as Address,
          swapTokens[0].address,
          amount,
          venomProvider
        );
        setSwapInfo({
          ...exchangeInfo,
          spentAmount: amount,
          spentToken: swapTokens[0].address,
          receiveToken: swapTokens[1].address,
        } as ExchangeInfo);
      } catch (err) {
        setSwapInfo(undefined);
        console.log(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [debounceAmount, swapTokens, venomProvider]);

  return (
    <Stack
      h="369px"
      w={{ base: "335px", sm: "500px", lg: "408px" }}
      border="1px solid"
      borderColor="text.600"
      rounded="14px"
      justify="space-between"
    >
      <Box>
        <Image
          src="/icons/swap/gold-brick.svg"
          alt=""
          w="90px"
          h="60px"
          m="16px auto"
        />

        <Stack pb="16px" mx="16px">
          {/* <InfoItem name="possible_slippage" value="5%" /> */}
          <InfoItem
            name="avg_transaction_cost"
            value={`${swapInfo?.expectedAmountAsString || 0} ${
              swapTokens[0].symbol
            }`}
          />
          <InfoItem
            name="refundable_fee"
            value={`${swapInfo?.expectedFeeAsString || 0} ${
              swapTokens[0].symbol
            }`}
          />
          {/* <InfoItem name="price_impact" value="Under 0.000008%" /> */}
          <InfoItem
            name="route"
            value={`${swapTokens[0].symbol} ${rate > 1 ? ">" : "<"} ${
              swapTokens[1].symbol
            }`}
          />
          <InfoItem
            name="exchange_rate"
            value={`1 ${swapTokens[0].symbol} = ${rate?.toFixed(2)} ${
              swapTokens[1].symbol
            }`}
          />
        </Stack>
      </Box>

      <Box borderTop="1px solid" borderColor="text.600" pb="16px">
        <Text align="center" color="text.400" mt="10px">
          {t("you_will_receive")}
        </Text>
        <Text align="center" fontSize="xl" fontWeight="bold">
          {rightRootAmount} {swapTokens[1].symbol}
        </Text>
      </Box>
    </Stack>
  );
};

const InfoItem = ({ name, value }: InfoItemProps) => {
  const { t } = useTranslation();

  return (
    <Stack direction="row" align="center" justify="space-between">
      <Stack direction="row">
        <Text>{t(name)}</Text>
        <NoteIcon />
      </Stack>
      <Text ml="auto">{value}</Text>
    </Stack>
  );
};
