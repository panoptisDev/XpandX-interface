import { ChevronDownIcon } from "@/icons";
import { XImage } from "@/ui-kit";
import { Box, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import _ from "lodash";

import { useCoinPrice } from "@/hooks";
import { Coin } from "@/constants/coin";
import { readableNumberFormatter } from "@/utils/number";
import { useTokenData } from "@/apis/coin";

export const WalletToken = () => {
  const { t } = useTranslation();
  const { data } = useTokenData();

  return (
    <Stack spacing={5}>
      <Box mt="10px !important">
        {_.filter(data, (c) => !!c.balance).map((item, idx) => (
          <TokenItem key={item.symbol} coin={item} index={idx} />
        ))}
      </Box>
      <Flex p="0px 20px 20px 20px" align="center" justify="space-between">
        <Text color="text.50" fontWeight="bold">
          {t("hidden")}(19)
        </Text>

        <Flex
          borderRadius="50px"
          bg="text.700"
          h="25px"
          w="70px"
          justify="center"
          align="center"
          gap="4px"
          fontSize="xs"
          cursor="pointer"
        >
          {t("show")}
          <Icon as={ChevronDownIcon} w="14px" h="14px" />
        </Flex>
      </Flex>
    </Stack>
  );
};

const TokenItem = ({ coin, index }: { coin: Coin; index: number }) => {
  const coinPrice = useCoinPrice(coin.symbol);
  const { t } = useTranslation();

  return (
    <Flex
      p="10px 20px"
      bg={index % 2 === 0 ? "rgba(63, 63, 70, 0.4)" : "text.600"}
      gap="12px"
      key={index}
    >
      <XImage src={coin.img} alt={coin.name} width="38" height="38" />
      <Box flex="1">
        <Text>{coin.symbol}</Text>
        <Text fontSize="sm" color="text.500">
          {coin.symbol}
        </Text>
      </Box>

      <Box w="100px">
        <Text>${readableNumberFormatter(coinPrice)}</Text>
        <Text fontSize="sm" color="text.500">
          {t("balance")}:{" "}
          <Box as="span" color="text.400">
            {coin.balance || 0}
          </Box>
        </Text>
      </Box>
    </Flex>
  );
};
