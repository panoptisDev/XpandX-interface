import { Flex, Stack, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { OverviewAll, OverviewChartTVL, OverviewVolumn24h } from "./components";

export const AnalyticsOverview = () => {
  const { t } = useTranslation();

  return (
    <Stack spacing={3.5}>
      <Flex align="center" justify="space-between">
        <Text color="text.300">{t("overview")}</Text>
      </Flex>

      <Flex gap="12px">
        <OverviewChartTVL />

        <OverviewVolumn24h />

        <OverviewAll />
      </Flex>
    </Stack>
  );
};
