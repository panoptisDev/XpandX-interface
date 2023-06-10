import { XContainer } from "@/ui-kit";
import { Stack } from "@chakra-ui/react";
import { DividendHeader, DividendBody } from "./components";
import { ComingSoon2 } from "@/components";

export const Dividend = () => {
  return (
    <XContainer>
      <Stack spacing={4} position="relative" filter="blur(5px)" opacity="0.6">
        <DividendHeader />
        <DividendBody />
      </Stack>

      <ComingSoon2 />

    </XContainer>
  );
};
