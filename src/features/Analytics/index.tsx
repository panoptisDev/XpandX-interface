import { ComingSoon2 } from "@/components";
import { XContainer } from "@/ui-kit";
import { Stack } from "@chakra-ui/react";
import {
  AnalyticsOverview,
  AnalyticsTableTopPools,
  AnalyticsTableTopToken,
  AnalyticsTableTransactions,
} from "./components";

export const Analytics = () => {
  return (
    <XContainer>
      <Stack spacing={5} position="relative" filter="blur(5px)" opacity="0.6">
        <AnalyticsOverview />

        <AnalyticsTableTopToken />

        <AnalyticsTableTopPools />

        <AnalyticsTableTransactions />
      </Stack>
      <ComingSoon2 />
    </XContainer>
  );
};
