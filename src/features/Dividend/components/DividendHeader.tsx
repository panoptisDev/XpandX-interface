import { Flex, Text, Box } from "@chakra-ui/react";
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

        <Flex align="center" justify="space-between" gap="8px">
          <BoxInfo icon="/icons/launchpad/trophy.svg" value="$1,3971.39" />
          <BoxInfo icon="/icons/launchpad/coin.svg" value="$84.298M TVL" />
        </Flex>
      </Flex>

      <Flex mt="24px" gap="14px">
        <BoxInfoV2
          name="total_allocations"
          value="11,397"
          subValue="xLXPX"
          icon={StackIcon}
        />
        <BoxInfoV2 name="current_epoch" value="$76,9K" icon={TargetIcon} />
        <BoxInfoV2 name="apy" value="24.75%" icon={DiscountStarIcon} />
        <BoxInfoV2 name="deallocation_fee" value="0%" icon={CoinsIcon} />
      </Flex>
    </Box>
  );
};
