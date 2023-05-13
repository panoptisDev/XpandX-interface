import { InputSwapToken } from "@/components";
import { Flex, Stack, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import React, { useState } from "react";
import { COINS } from "@/constants/coin";

export const TokenPair = () => {
  const [tokens, setTokens] = useState([COINS[1], COINS[2]]);
  const { t } = useTranslation();

  return (
    <Stack spacing={3} w="100%">
      <InputSwapToken
        // hideRate
        symbol={tokens[0].symbol}
        selectEnabled
        border="1px solid"
        borderColor="text.600"
        borderRadius="14px"
      />
      <InputSwapToken
        // hideRate
        symbol={tokens[1].symbol}
        selectEnabled
        border="1px solid"
        borderColor="text.600"
        borderRadius="14px"
      />

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
