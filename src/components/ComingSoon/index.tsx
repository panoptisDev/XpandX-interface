import { XContainer } from "@/ui-kit";
import { Flex, Image, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

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

export const ComingSoon2 = () => {
  const { t } = useTranslation();

  return (
    <Flex
      position="fixed"
      w="100%"
      h="100%"
      top="0px"
      left="0"
      justify="center"
      align="center"
      zIndex="1"
    >
      <Text color="text.200" fontSize="2xl" fontWeight="bold">
        {t("coming_soon_2")}
      </Text>
    </Flex>
  );
};
