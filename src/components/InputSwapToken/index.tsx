import { WalletIcon } from "@/icons";
import {
  Box,
  Flex,
  Icon,
  Input,
  NumberInput,
  NumberInputField,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "next-i18next";
import { XImage } from "@/ui-kit";
import { SelectToken } from "../SelectToken";

export const InputSwapToken = ({ ...rest }) => {
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

            <SelectToken />
          </Flex>
        </Flex>
      </Stack>
      <Text fontSize="xs" color="text.500" mt="8px">
        1 USDC = $1.00
      </Text>
    </Box>
  );
};
