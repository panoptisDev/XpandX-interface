import { Flex, Image, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { XContainer } from "@/ui-kit";

export const ComingSoon = () => {
  const { t } = useTranslation();

  return (
    <XContainer>
      <Flex
        m="167px auto"
        p="40px"
        maxW="456px"
        bg="text.700"
        rounded="14px"
        direction="column"
        align="center"
        justify="center"
      >
        <Image w="308px" src="/coming-soon.png" alt="" />
        <Text mt="24px" color="text.400">
          {t("coming_soon_2")}
        </Text>
      </Flex>
    </XContainer>
  );
};
