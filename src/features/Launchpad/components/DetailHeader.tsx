import { Box, Text, Flex, Icon } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import { ArrowLeftIcon } from "@/icons";
import { routes } from "@/constants/routes";
import { BoxInfo } from "./BoxInfo";
import { XImage } from "@/ui-kit";

export const DetailHeader = () => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <Box>
      <Flex
        align="center"
        gap="10px"
        cursor="pointer"
        onClick={() => router.push(routes.Launchpad)}
      >
        <Icon as={ArrowLeftIcon} color="text.500" />
        <Text color="text.400">{t("back")}</Text>
      </Flex>

      <Flex
        mt="24px"
        gap="8px"
        justify="space-between"
        align={{ base: "unset", sm: "center" }}
        direction={{ base: "column", sm: "row" }}
      >
        <Text color="text.50" fontSize="2xl" fontWeight="bold">
          WaterrDAO
        </Text>
        <BoxInfo
          w="fit-content"
          icon="/icons/launchpad/trophy.svg"
          value="Total raised: $1,3971.39"
        />
      </Flex>

      <Text color="text.400" mt="14px">
        Lorem ipsum dolor sit amet consectetur. Accumsan sit eget nullam euismod
        risus viverra. Donec dolor dui ultrices a diam. Mollis enim tortor sed
        semper venenatis risus augue sem dictumst. Scelerisque aliquam velit
        ullamcorper urna id egestas. Lorem ipsum dolor sit amet consectetur.
        Accumsan sit eget nullam euismod risus viverra. Donec dolor dui ultrices
        a diam. Mollis enim tortor sed semper venenatis risus augue sem
        dictumst.
      </Text>

      <Flex
        pt="24px"
        mt="24px"
        gap={{ base: "16px", sm: "40px" }}
        borderTop="1px solid"
        borderColor="text.700"
        direction={{ base: "column", sm: "row" }}
      >
        <Box
          flex={{ base: 2, lg: 1 }}
          pos="relative"
          h={{ base: "220px", lg: "200px" }}
          minH={{ base: "220px", lg: "200px" }}
          rounded="16px"
          overflow="hidden"
        >
          <XImage
            layout="fill"
            src="/launchpad-pic.png"
            alt=""
            objectFit="cover"
          />
        </Box>
        <Text color="text.400" flex={{ base: 3, lg: 1 }}>
          Lorem ipsum dolor sit amet consectetur. Accumsan sit eget nullam
          euismod risus viverra. Donec dolor dui ultrices a diam. Mollis enim
          tortor sed semper venenatis risus augue sem dictumst. Scelerisque
          aliquam velit ullamcorper urna id egestas. Lorem ipsum dolor sit amet
          consectetur. Accumsan sit eget nullam euismod risus viverra. Donec
          dolor dui ultrices a diam. Mollis enim tortor sed semper venenatis
          risus augue sem dictumst. dictumst.
        </Text>
      </Flex>
    </Box>
  );
};
