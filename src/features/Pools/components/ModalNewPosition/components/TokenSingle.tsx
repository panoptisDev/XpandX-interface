import { InputSwapToken, SelectToken } from "@/components";
import { COINS } from "@/constants/coin";
import { Divider, Flex, Stack, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

export const TokenSingle = () => {
  const { t } = useTranslation();
  return (
    <Stack spacing={3} w="100%">
      <InputSwapToken
        // hideRate
        symbol={COINS[6].symbol}
        address={COINS[6].address}
        selectEnabled
        border="1px solid"
        borderColor="text.600"
        borderRadius="14px"
      />

      <Stack
        spacing={4}
        border="1px solid"
        borderColor="text.600"
        borderRadius="14px"
        p="16px"
      >
        <Text fontWeight="bold">{t("your_pool_allocation")}</Text>

        <Divider />

        <Flex justify="space-between" align="center">
          <Flex gap="10px">
            <SelectToken symbol={COINS[6].symbol} selectEnabled />

            <Text color="text.50" fontSize="sm">
              ~$0
            </Text>
          </Flex>

          <Flex gap="10px">
            <SelectToken symbol={COINS[6].symbol} selectEnabled />

            <Text color="text.50" fontSize="sm">
              ~$0
            </Text>
          </Flex>
        </Flex>

        <Divider />

        <Flex align="center" justify="space-between">
          <Text fontSize="sm" color="text.400">
            {t("price_impact")}
          </Text>

          <Text fontSize="sm" color="text.400">
            --
          </Text>
        </Flex>
      </Stack>

      <Flex
        p="18px"
        bg="text.600"
        borderRadius="14px"
        color="text.50"
        align="center"
        justify="space-between"
      >
        <Text fontSize="sm">{t("your_share_of_pool")}</Text>
        <Text fontWeight="bold">10%</Text>
      </Flex>
    </Stack>
  );
};
