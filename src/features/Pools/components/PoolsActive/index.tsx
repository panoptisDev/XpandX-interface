import { ConnectWallet } from "@/components";
import { LightIcon } from "@/icons";
import { XImage } from "@/ui-kit";
import { Box, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

export const PoolsActive = () => {
  const { t } = useTranslation();

  return (
    <Box borderRadius="14px" bg="text.700">
      <Stack
        spacing={4}
        p="24px 20px"
        borderBottom="1px solid"
        borderColor="text.900"
        justify="center"
        align="center"
      >
        <XImage
          src="/pools-cards.webp"
          alt="pools-cards"
          width="242"
          height="211"
        />

        <Text fontSize="xl" color="text.50">
          {t("your_active_v3_liquidity_positions_will_appear_here")}
        </Text>

        <ConnectWallet type="inApp" />
      </Stack>

      <Flex
        p="24px 20px"
        direction={{ base: "column", sm: "row" }}
        gap={{ base: "20px", sm: "0" }}
      >
        <Flex gap="4px" w="100%">
          <Icon as={LightIcon} w="20px" h="20px" />

          <Box>
            <Text
              fontSize="sm"
              fontWeight="bold"
              lineHeight="160%"
              color="text.200"
            >
              {t("learn_about_providing_liquidity")}
            </Text>
            <Text lineHeight="160%" color="text.400">
              {t("check_out_our_v3_lp_walkthrough_and_migration_guides")}
            </Text>
          </Box>
        </Flex>

        <Flex gap="4px" w="100%">
          <Icon as={LightIcon} w="20px" h="20px" />

          <Box>
            <Text
              fontSize="sm"
              fontWeight="bold"
              lineHeight="160%"
              color="text.200"
            >
              {t("top_pools")}
            </Text>
            <Text lineHeight="160%" color="text.400">
              {t("explore_xpand_x_analytics")}
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
