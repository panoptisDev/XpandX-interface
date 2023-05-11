import { Stack, Image, Text, StackProps } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

type Props = StackProps;

export const CreditCardOption = (props: Props) => {
  const { t } = useTranslation();

  return (
    <Stack {...props}>
      <Text align="center" color="text.400" fontSize="12px">
        {t("buy_crypto_with_credit_card")}
      </Text>
      <Stack direction="row" align="center" spacing="30px" justify="center">
        <Image src="/icons/swap/visa.svg" alt="visa" />
        <Image src="/icons/swap/apple-pay.svg" alt="apple-pay" />
        <Image src="/icons/swap/google-wallet.svg" alt="google-wallet" />
        <Image src="/icons/swap/master-card.svg" alt="master-card" />
      </Stack>
    </Stack>
  );
};
