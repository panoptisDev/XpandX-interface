import { useEffect, useState } from "react";
import { Box, Stack, Image, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { Address } from "everscale-inpage-provider";
import _ from "lodash";

import { NoteIcon } from "@/icons";
import { getPair } from "@/utils/contracts/dexroot";
import { getExchangeInfo, ExchangeInfo } from "@/utils/contracts/dexpair";
import { useSwap } from "@/store/swap";
import { useCoinPrice } from "@/hooks";

interface InfoItemProps {
  name: string;
  value: string;
}

export const SwapInfo = () => {
  const { t } = useTranslation();

  const [info, setInfo] = useState<ExchangeInfo>();

  const swapTokens = useSwap((state) => state.swapTokens);
  const amount = useSwap((state) => state.amount);
  const setLoading = useSwap((state) => state.setLoading);

  const leftRootPrice = useCoinPrice(swapTokens[0].symbol);
  const rightRootPrice = useCoinPrice(swapTokens[1].symbol);
  const rate = leftRootPrice / rightRootPrice;

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const address = await getPair(
          swapTokens[0].address,
          swapTokens[1].address
        );
        const exchangeInfo = await getExchangeInfo(
          address as Address,
          swapTokens[0].address,
          _.toNumber(amount) || 0
        );
        setInfo(exchangeInfo);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [amount, swapTokens]);

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
            value={`${info?.expected_amount || 0} VENOM`}
          />
          <InfoItem
            name="refundable_fee"
            value={`${info?.expected_fee || 0} VENOM`}
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
          0.492749 USDT
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
