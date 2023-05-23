import { Stack, Text, UseNumberInputProps } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

import { NumberInput } from "./NumberInput";

interface Props extends UseNumberInputProps {
  label: string;
}

export const PriceRangeInput = ({ label, ...props }: Props) => {
  const { t } = useTranslation();

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
        USDT / ETH
      </Text>
    </Stack>
  );
};
