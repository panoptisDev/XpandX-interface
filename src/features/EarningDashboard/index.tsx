import { XContainer } from "@/ui-kit";
import { Flex, Stack, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { EarningAnalytics, EarningTable } from "./components";
import { ComingSoon2 } from "@/components";

export const EarningDashboard = () => {
  const { t } = useTranslation();
  return (
    <XContainer>
      <Stack spacing={6} position="relative" filter="blur(5px)" opacity="0.6">
        <Flex
          align={{ base: "flex-start", lg: "center" }}
          gap={{ base: "2px", lg: "10px" }}
          direction={{ base: "column", lg: "row" }}
        >
          <Text color="text.50" fontSize="2xl" fontWeight="bold">
            {t("earnings_dashboard")}
          </Text>
          <Text color="text.500" fontSize="sm">
            {t("easily_monitor_and_harvest_your_active_positions")}
          </Text>
        </Flex>

        <EarningAnalytics />

        <EarningTable />
      </Stack>
      <ComingSoon2 />
    </XContainer>
  );
};
