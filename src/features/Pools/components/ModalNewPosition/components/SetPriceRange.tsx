import { Box, Flex, Stack, Text, Button } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { PriceRangeSlider } from "./PriceRangeSlider";

import { PriceRangeInput } from "./";
export const SetPriceRange = () => {
  const { t } = useTranslation();

  return (
    <Stack
      w="100%"
      spacing={4}
      border="1px solid"
      borderColor="text.600"
      borderRadius="14px"
      p="16px"
    >
      <Text fontWeight="bold">{t("set_price_range")}</Text>

      <Stack spacing={2}>
        <Flex align="center" justify="center">
          <Text color="text.500">{t("current_price")}</Text>
          <Flex
            bg="text.900"
            p="4px 10px"
            rounded="5px"
            ml="6px"
            align="center"
          >
            <Box bg="sec.4" rounded="50%" w="7px" h="7px" />
            <Text ml="6px">1760.71 USDT / ETH</Text>
          </Flex>
        </Flex>
      </Stack>

      <Box>
        <PriceRangeSlider />

        <Stack spacing={2} direction="row" mt="30px">
          <PriceRangeInput label="min_price" value={100} />
          <PriceRangeInput label="max_price" value={200} />
        </Stack>
      </Box>

      <Flex justify="center">
        <Button variant="outline" size="sm" w="180px" mx="auto">
          {t("full_range")}
        </Button>
      </Flex>
    </Stack>
  );
};
