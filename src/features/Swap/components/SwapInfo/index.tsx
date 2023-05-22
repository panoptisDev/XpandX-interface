import { Box, Stack, Image, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

import { NoteIcon } from "@/icons";

interface InfoItemProps {
  name: string;
  value: string;
}

export const SwapInfo = () => {
  const { t } = useTranslation();

  return (
    <Box
      h="369px"
      w={{ base: "335px", sm: "500px", lg: "408px" }}
      border="1px solid"
      borderColor="text.600"
      rounded="14px"
    >
      <Image
        src="/icons/swap/gold-brick.svg"
        alt=""
        w="90px"
        h="60px"
        m="16px auto"
      />

      <Stack
        pb="16px"
        mx="16px"
        borderBottom="1px solid"
        borderColor="text.600"
      >
        <InfoItem name="possible_slippage" value="5%" />
        <InfoItem name="avg_transaction_cost" value="0.006 VENOM" />
        <InfoItem name="refundable_fee" value="5 VENOM" />
        <InfoItem name="price_impact" value="Under 0.000008%" />
        <InfoItem name="route" value="VENOM > USDT" />
        <InfoItem name="exchange_rate" value="1 WVENOM = 0.26 USDT" />
      </Stack>

      <Text align="center" color="text.400" mt="10px">
        {t("minimum_to_receive")}
      </Text>
      <Text align="center" fontSize="xl" fontWeight="bold">
        0.492749 USDT
      </Text>
    </Box>
  );
};

const InfoItem = ({ name, value }: InfoItemProps) => {
  const { t } = useTranslation();

  return (
    <Stack direction="row" align="center" justify="space-between">
      <Stack direction="row">
        <Text>{t(name)}</Text>
        <NoteIcon />
      </Stack>
      <Text ml="auto">{value}</Text>
    </Stack>
  );
};
