import {
  Box,
  Divider,
  Flex,
  Stack,
  Text
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

export const PoolInformation = () => {
  const { t } = useTranslation();

  return (
    <Stack
      spacing={4}
      w="100%"
      border="1px solid"
      borderColor="text.600"
      borderRadius="14px"
      p="16px"
    >
      <Text fontWeight="bold">{t("pool_information")}</Text>

      <Divider />

      <Stack spacing={2}>
        <Flex fontSize="14px" align="center" justify="space-between">
          <Text color="text.400">{t("current_price")}</Text>
          <Text color="text.50">1 USDT = 1.0012428 USDC</Text>
        </Flex>

        <Flex fontSize="14px" align="center" justify="space-between">
          <Text color="text.400">{t("pool_ratio")}</Text>
          <Text color="text.50">56.11% USDC - 43.89% USDT</Text>
        </Flex>

        <Flex fontSize="14px" align="center" justify="space-between">
          <Text color="text.400">{t("AMP")}</Text>
          <Text color="text.50">200</Text>
        </Flex>

        <Flex fontSize="14px" align="center" justify="space-between">
          <Text color="text.400">{t("dynamic_fee_range")}</Text>
          <Text color="text.50">0.02% - 0.08%</Text>
        </Flex>
      </Stack>

      <Divider />

      <Stack spacing={2}>
        <Text color="text.400" fontSize="sm">
          {t("active_price_range")}
        </Text>

        <Box>
          <Flex fontSize="14px" align="center" justify="space-between">
            <Text color="text.400">{t("USDT Per USDC")}</Text>
            <Text color="text.400">{t("USDT Per USDC")}</Text>
          </Flex>

          <Flex fontSize="14px" align="center" justify="space-between">
            <Text color="text.50">Max: 1.01019</Text>
            <Text color="text.50">Max: 1.01019</Text>
          </Flex>

          <Flex fontSize="14px" align="center" justify="space-between">
            <Text color="text.50">Min: 0.989913</Text>
            <Text color="text.50">Min: 0.989913</Text>
          </Flex>
        </Box>
      </Stack>
    </Stack>
  );
};
