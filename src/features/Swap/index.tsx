import { Box, Stack } from "@chakra-ui/react";

import { SwapToken, CreditCardOption, SwapInfo } from "./components";

export const Swap = () => {
  return (
    <Stack align="center">
      <Box m="91px auto">
        <Stack direction="row">
          <SwapToken />
          <SwapInfo />
        </Stack>
        <CreditCardOption m="34px auto" />
      </Box>
    </Stack>
  );
};
