import { InputSwapToken } from "@/components";
import { Flex, Stack, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import React from "react";

export const TokenPair = () => {
  const { t } = useTranslation();
  return (
    <Stack spacing={3} w="100%">
      <InputSwapToken symbol="USDT" />
      <InputSwapToken symbol="USDC" />

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
