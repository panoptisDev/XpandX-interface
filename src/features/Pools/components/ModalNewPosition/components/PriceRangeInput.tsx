import { Stack, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

import { NumberInput } from "./NumberInput";

interface Props {
  label: string;
  value: number;
}

export const PriceRangeInput = ({ label, value }: Props) => {
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
      <NumberInput defaultValue={value} />
      <Text color="text.400" align="center">
        USDT / ETH
      </Text>
    </Stack>
  );
};
