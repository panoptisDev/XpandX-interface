import { Flex, Image, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

export const WalletActivity = () => {
  const { t } = useTranslation();

  return (
    <Flex
      m="100%"
      bg="linear-gradient(0deg, rgba(63, 63, 70, 0.4), rgba(63, 63, 70, 0.4)), #52525B"
      direction="column"
      align="center"
      justify="center"
      p="22px"
    >
      <Image w="308px" src="/coming-soon.png" alt="" />
      <Text mt="24px" color="text.400">
        {t("coming_soon_2")}
      </Text>
    </Flex>
  );
};
