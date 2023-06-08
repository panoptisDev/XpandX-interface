import { XContainer } from "@/ui-kit";
import { Stack } from "@chakra-ui/react";
import { LaunchpadTable, LaunchpadHeader } from "./components";
import { ComingSoon2 } from "@/components";

export const Launchpad = () => {
  return (
    <XContainer>
      <Stack spacing={4} position="relative" filter="blur(5px)" opacity="0.6">
        <LaunchpadHeader />
        <LaunchpadTable />
      </Stack>
      <ComingSoon2 />
    </XContainer>
  );
};
