import { InputSwapToken } from "@/components";
import { Flex, Stack, Box, Text, Button } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import React, { useState } from "react";
import { COINS } from "@/constants/coin";
import { EditIcon } from "@/icons";

export const TokenPair = () => {
  const [tokens, setTokens] = useState([COINS[1], COINS[2]]);
  const { t } = useTranslation();

  return (
    <Stack
      spacing={3}
      w="100%"
      border="1px solid"
      borderColor="text.600"
      borderRadius="14px"
      p="16px"
    >
      <Text fontWeight="bold">{t("deposit_amounts")}</Text>

      <InputSwapToken
        hideRate
        symbol={tokens[0].symbol}
        selectEnabled
        border="1px solid"
        borderColor="text.600"
        borderRadius="14px"
      />
      <InputSwapToken
        hideRate
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
        <Box>
          <Text fontSize="sm">{t("fee_tier", { fee: 0.3 })}</Text>
          <Box fontSize="sm" bg="text.900" rounded="5px" p="2px 8px" mt="2px">
            65% {t("select")}
          </Box>
        </Box>
        <Text fontWeight="bold">
          <Button
            bg="text.500"
            h="36px"
            p="7px 18px"
            fontWeight="normal"
            color="text.50"
            _hover={{
              filter: "brightness(0.95)",
            }}
            _active={{
              filter: "brightness(0.9)",
            }}
          >
            <EditIcon mr="1" />
            Edit
          </Button>
        </Text>
      </Flex>
    </Stack>
  );
};
