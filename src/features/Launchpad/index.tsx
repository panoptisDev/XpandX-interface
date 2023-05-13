import { XContainer } from "@/ui-kit";
import { Stack } from "@chakra-ui/react";
import { LaunchpadTable, LaunchpadHeader } from "./components";

export const Launchpad = () => {
  return (
    <XContainer>
      <Stack spacing={4}>
        <LaunchpadHeader />
        <LaunchpadTable />
      </Stack>
    </XContainer>
  );
};
