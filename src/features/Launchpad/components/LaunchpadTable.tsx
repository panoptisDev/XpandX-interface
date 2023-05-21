import { useTranslation } from "next-i18next";
import { Icon, Tbody, Text, Thead, Tr, Flex, Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { CheckBrokenIcon, XCircleIcon } from "@/icons";
import { XImage, XTable, XTableTd, XTableTh } from "@/ui-kit";
import { data } from "../data";
import { routes } from "@/constants/routes";

export const LaunchpadTable = () => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <XTable minW="950px">
      <Thead>
        <Tr>
          <XTableTh
            w={{ base: "250px", lg: "400px" }}
            maxW={{ base: "250px !important", lg: "400px !important" }}
          >
            {t("name")}
          </XTableTh>
          <XTableTh>{t("hardcap")}</XTableTh>
          <XTableTh>{t("wl_stage")}</XTableTh>
          <XTableTh>{t("status")}</XTableTh>
          <XTableTh>{t("total_raised")}</XTableTh>
          <XTableTh>{t("your_allocation")}</XTableTh>
        </Tr>
      </Thead>
      <Tbody>
        {data.map((item, idx) => (
          <Tr
            key={idx}
            onClick={() => router.push(`${routes.Launchpad}/${item.symbol}`)}
            cursor="pointer"
          >
            <XTableTd>
              <Stack direction="row" align="center">
                <XImage src={item.icon} alt="venom" width="32" height="32" />
                <Text>{item.name}</Text>
                <Text color="text.500">{item.symbol}</Text>
              </Stack>
            </XTableTd>
            <XTableTd>
              <Icon
                as={item.hardcap ? CheckBrokenIcon : XCircleIcon}
                w="20px"
                h="20px"
              />
            </XTableTd>
            <XTableTd>
              <Icon
                as={item.wlStage ? CheckBrokenIcon : XCircleIcon}
                w="20px"
                h="20px"
              />
            </XTableTd>
            <XTableTd>
              <Flex
                align="center"
                justify="center"
                w="55px"
                h="26px"
                rounded="5px"
                bg="#FF796C"
              >
                {t(item.status)}
              </Flex>
            </XTableTd>
            <XTableTd>{item.totalRaised}</XTableTd>
            <XTableTd>{item.allocation}</XTableTd>
          </Tr>
        ))}
      </Tbody>
    </XTable>
  );
};
