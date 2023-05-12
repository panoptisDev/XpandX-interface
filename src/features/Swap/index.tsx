import { Box, Flex, Stack } from "@chakra-ui/react";

import { XContainer } from "@/ui-kit";
import { CreditCardOption, SwapInfo, SwapToken } from "./components";

export const Swap = () => {
  return (
    <XContainer>
      <Box m="91px auto">
        <Flex justify="center" gap="12px">
          <SwapToken />
          <SwapInfo />
        </Flex>
        <CreditCardOption m="34px auto" />
      </Box>
    </XContainer>
  );
};
