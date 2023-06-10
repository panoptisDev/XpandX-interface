import { Stack, Text, UseNumberInputProps } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

import { NumberInput } from "./NumberInput";
import { useSwap } from "@/store/swap";

interface Props extends UseNumberInputProps {
  label: string;
}

export const PriceRangeInput = ({ label, ...props }: Props) => {
  const { t } = useTranslation();
  const swapTokens = useSwap((state) => state.swapTokens);

  return (
    <Stack
      p="12px 16px"
      border="1px solid"
      borderColor="text.600"
      rounded="14px"
    >
      <Text color="text.400" align="center">
        {t(label)}
      </Text>
      <NumberInput {...props} />
      <Text color="text.400" align="center">
        {swapTokens[1].symbol} / {swapTokens[0].symbol}
      </Text>
    </Stack>
  );
};
