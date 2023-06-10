import { Flex, Text, Box, Hide, Grid } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

import { BoxInfo, BoxInfoV2 } from "./";
import { CoinsIcon, StackIcon, TargetIcon, DiscountStarIcon } from "@/icons";

export const DividendHeader = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <Flex w="100%" align="center" justify="space-between">
        <Box>
          <Text color="text.50" fontSize="2xl" fontWeight="bold">
            {t("dividends")}
          </Text>
          <Text color="text.500">{t("allocate_dxpx_here")}</Text>
        </Box>

        <Hide below="lg">
          <Flex align="center" justify="space-between" gap="8px">
            <BoxInfo icon="/icons/launchpad/trophy.svg" value="$1,3971.39" />
            <BoxInfo icon="/icons/launchpad/coin.svg" value="$84.298M TVL" />
          </Flex>
        </Hide>
      </Flex>

      <Hide above="lg">
        <Flex align="center" gap="8px" mt="20px">
          <BoxInfo icon="/icons/launchpad/trophy.svg" value="$1,3971.39" />
          <BoxInfo icon="/icons/launchpad/coin.svg" value="$84.298M TVL" />
        </Flex>
      </Hide>

      <Grid
        mt="24px"
        gap="14px"
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
      >
        <BoxInfoV2
          name="total_allocations"
          value="11,397"
          subValue="xLXPX"
          icon={StackIcon}
        />
        <BoxInfoV2 name="current_epoch" value="$76,9K" icon={TargetIcon} />
        <BoxInfoV2 name="apy" value="24.75%" icon={DiscountStarIcon} />
        <BoxInfoV2 name="deallocation_fee" value="0%" icon={CoinsIcon} />
      </Grid>
    </Box>
  );
};
