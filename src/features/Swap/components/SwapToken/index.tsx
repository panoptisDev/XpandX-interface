import { Box, Stack, Text, Icon, StackProps } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import _ from "lodash";

import { InputSwapToken } from "@/components";
import { XButton } from "@/ui-kit";
import { ArrowRight, SwapIcon } from "@/icons";
import { COINS } from "@/constants/coin";

interface Props extends StackProps {}

export const SwapToken = ({ ...rest }: Props) => {
  const { t } = useTranslation();
  const [tokens, setTokens] = useState([COINS[1], COINS[2]]);

  const handleSwapToken = () => {
    setTokens([..._.reverse(tokens)]);
  };

  return (
    <Stack zIndex="0" w="408px" {...rest}>
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
          symbol={tokens[0].symbol}
          selectEnabled
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
          onClick={handleSwapToken}
        >
          <SwapIcon fontSize="24px" />
        </Stack>
      </Box>

      <Box borderRadius="14px" bgColor="text.700" mt="1.2" pt="16px">
        <InputSwapToken
          hideRate
          border="none"
          symbol={tokens[1].symbol}
          selectEnabled
        />
        <Box p="0 16px 16px">
          <XButton rightIcon={<Icon as={ArrowRight} />} size="md">
            {t("connect_a_wallet")}
          </XButton>
        </Box>
      </Box>
    </Stack>
  );
};
