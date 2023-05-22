import { Box, Flex, Stack } from "@chakra-ui/react";

import { XContainer } from "@/ui-kit";
import { CreditCardOption, SwapInfo, SwapToken } from "./components";

export const Swap = () => {
  return (
    <XContainer>
      <Box m="91px auto">
        <Stack
          justify="center"
          align="center"
          spacing="16px"
          direction={{ base: "column", lg: "row" }}
        >
          <SwapToken />
          <SwapInfo />
        </Stack>
        <CreditCardOption m="34px auto" />
      </Box>
    </XContainer>
  );
};
