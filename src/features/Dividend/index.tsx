import { XContainer } from "@/ui-kit";
import { Stack } from "@chakra-ui/react";
import { DividendHeader, DividendBody } from "./components";

export const Dividend = () => {
  return (
    <XContainer>
      <Stack spacing={4}>
        <DividendHeader />
        <DividendBody />
      </Stack>
    </XContainer>
  );
};
