import { XContainer } from "@/ui-kit";
import React from "react";
import {
  AnalyticsOverview,
  AnalyticsTableTopPools,
  AnalyticsTableTopToken,
  AnalyticsTableTransactions,
} from "./components";
import { Stack } from "@chakra-ui/react";

export const Analytics = () => {
  return (
    <XContainer>
      <Stack spacing={5}>
        <AnalyticsOverview />

        <AnalyticsTableTopToken />

        <AnalyticsTableTopPools />

        <AnalyticsTableTransactions />
      </Stack>
    </XContainer>
  );
};
