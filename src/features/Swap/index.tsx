import { Box, Fade, Stack } from "@chakra-ui/react";

import { XContainer } from "@/ui-kit";
import { CreditCardOption, SwapInfo, SwapToken } from "./components";
import { useSwap } from "@/store/swap";

export const Swap = () => {
  const amount = useSwap((state) => state.amount);

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
          {!!amount && (
            <Fade in={!!amount}>
              <SwapInfo />
            </Fade>
          )}
        </Stack>
        <CreditCardOption m="34px auto" />
      </Box>
    </XContainer>
  );
};
