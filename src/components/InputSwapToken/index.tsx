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
  NumberInputProps,
} from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "next-i18next";

import { SelectToken } from "../SelectToken";
import { Coin, Symbol } from "@/typings/coin";
import { useCoinPrice, useTokenState } from "@/hooks";

interface Props extends StackProps {
  hideRate?: boolean;
  symbol: Symbol;
  address: string;
  selectEnabled?: boolean;
  value?: string;
  inputProps?: NumberInputProps;
  disabledSelectTokens?: string[];
  onChangeCoin?: (coin: Coin) => void;
}

export const InputSwapToken = ({
  hideRate,
  symbol,
  address,
  selectEnabled,
  value,
  inputProps,
  disabledSelectTokens,
  onChangeCoin,
  ...rest
}: Props) => {
  const { t } = useTranslation();
  const coinPrice = useCoinPrice(symbol);
  const { balance } = useTokenState(address);

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
            : {balance} {symbol}
          </Box>
        </Flex>

        <Flex align="center" gap="18px">
          <NumberInput {...inputProps}>
            <NumberInputField
              placeholder="0"
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
              ~${coinPrice}
            </Text>

            <SelectToken
              symbol={symbol}
              selectEnabled={selectEnabled}
              onChangeCoin={onChangeCoin}
              disabledSelectTokens={disabledSelectTokens}
            />
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
