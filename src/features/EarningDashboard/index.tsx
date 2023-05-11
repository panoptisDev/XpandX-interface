import { XContainer } from "@/ui-kit";
import { Flex, Stack, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { EarningAnalytics, EarningTable } from "./components";

export const EarningDashboard = () => {
  const { t } = useTranslation();
  return (
    <XContainer>
      <Stack spacing={6}>
        <Flex align="center" gap="10px">
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
    </XContainer>
  );
};
