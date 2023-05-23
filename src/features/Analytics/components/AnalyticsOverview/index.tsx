import { Flex, Stack, Text, Grid, GridItem } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { OverviewAll, OverviewChartTVL, OverviewVolumn24h } from "./components";

export const AnalyticsOverview = () => {
  const { t } = useTranslation();

  return (
    <Stack spacing={3.5}>
      <Flex align="center" justify="space-between">
        <Text color="text.300">{t("overview")}</Text>
      </Flex>

      <Grid
        gap="12px"
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(3, 1fr)",
        }}
        templateRows={{
          base: "repeat(3, 1fr)",
          sm: "168px 245px",
          lg: "repeat(1, 1fr)",
        }}
      >
        <GridItem colSpan={{ base: 1, sm: 3, lg: 1 }}>
          <OverviewChartTVL />
        </GridItem>

        <GridItem colSpan={{ base: 1, sm: 2, lg: 1 }} h="100%">
          <OverviewVolumn24h />
        </GridItem>

        <GridItem colSpan={1}>
          <OverviewAll />
        </GridItem>
      </Grid>
    </Stack>
  );
};
