import { WalletIcon } from "@/icons";
import {
  Box,
  Flex,
  Icon,
  NumberInput,
  NumberInputField,
  Stack,
  Text,
  StackProps,
} from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "next-i18next";

import { SelectToken } from "../SelectToken";
import { Symbol } from "@/typings/coin";

interface Props extends StackProps {
  hideRate?: boolean;
  symbol: Symbol;
  selectEnabled?: boolean;
}

export const InputSwapToken = ({
  hideRate,
  symbol,
  selectEnabled,
  ...rest
}: Props) => {
  const { t } = useTranslation();

  return (
    <Box>
      <Stack
        spacing={2}
        border="1px solid"
        borderColor="text.600"
        borderRadius="14px"
        p="16px"
        {...rest}
      >
        <Flex gap="8px" align="center">
          <Icon as={WalletIcon} w="20px" h="20px" color="text.400" />
          <Box color="text.400">
            <Text as="span" color="text.500">
              {t("balance")}
            </Text>
            : 3048.80 USDT
          </Box>
        </Flex>

        <Flex align="center" gap="18px">
          <NumberInput defaultValue="0">
            <NumberInputField
              w="100%"
              bg="transparent"
              border="none"
              fontSize="28px"
              fontWeight="bold"
              color="text.50"
              p="0"
            />
          </NumberInput>

          <Flex gap="18px">
            <Text color="text.500" fontSize="sm">
              ~$1,335
            </Text>

            <SelectToken symbol={symbol} selectEnabled={selectEnabled} />
          </Flex>
        </Flex>
      </Stack>
      {!hideRate && (
        <Text fontSize="xs" color="text.500" mt="8px">
          1 USDC = $1.00
        </Text>
      )}
    </Box>
  );
};
