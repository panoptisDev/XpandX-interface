import { Box, Stack, Text, StackProps } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import _ from "lodash";

import { ConnectWallet, InputSwapToken } from "@/components";
import { SwapIcon } from "@/icons";
import { useSwap } from "@/store/swap";
import { useCoinPrice } from "@/hooks";

interface Props extends StackProps {}

export const SwapToken = ({ ...rest }: Props) => {
  const { t } = useTranslation();
  const swapTokens = useSwap((state) => state.swapTokens);
  const amount = useSwap((state) => state.amount);
  const reverseTokens = useSwap((state) => state.reverseTokens);
  const setAmount = useSwap((state) => state.setAmount);
  const onChangeSwapTokens = useSwap((state) => state.onChangeSwapTokens);

  const leftRootPrice = useCoinPrice(swapTokens[0].symbol);
  const rightRootPrice = useCoinPrice(swapTokens[1].symbol);

  const rightRootAmount = (leftRootPrice / rightRootPrice) * _.toNumber(amount);

  return (
    <Stack zIndex="0" w={{ base: "335px", sm: "500px", lg: "408px" }} {...rest}>
      <Box position="relative">
        <Box
          bgColor="text.700"
          borderBottom="1px solid #18181B"
          rounded="14px 14px 0 0"
          p="16px"
        >
          <Text fontWeight="bold">{t("swap")}</Text>
        </Box>
        <InputSwapToken
          hideRate
          borderRadius="0 0 14px 14px"
          border="none"
          bgColor="text.700"
          pb="32px"
          symbol={swapTokens[0].symbol}
          selectEnabled
          onChangeCoin={(coin) => onChangeSwapTokens([coin, swapTokens[1]])}
          disabledSelectTokens={[swapTokens[1].symbol]}
          inputProps={{
            value: amount,
            onChange: (val) => setAmount(val),
          }}
        />
        <Stack
          bg="sec.1"
          w="44px"
          h="44px"
          rounded="50%"
          align="center"
          justify="center"
          pos="absolute"
          bottom="0"
          left="50%"
          transform="translate(-50%, 50%)"
          cursor="pointer"
          onClick={reverseTokens}
        >
          <SwapIcon fontSize="24px" />
        </Stack>
      </Box>

      <Box borderRadius="14px" bgColor="text.700" mt="1.2" pt="16px">
        <InputSwapToken
          hideRate
          border="none"
          symbol={swapTokens[1].symbol}
          selectEnabled
          onChangeCoin={(coin) => onChangeSwapTokens([swapTokens[0], coin])}
          disabledSelectTokens={[swapTokens[0].symbol]}
          inputProps={{
            value: amount && rightRootAmount,
            userSelect: "none",
            pointerEvents: "none",
          }}
        />
        <Box p="0 16px 16px">
          <ConnectWallet type="inApp" />
        </Box>
      </Box>
    </Stack>
  );
};
