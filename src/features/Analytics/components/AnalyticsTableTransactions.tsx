import { ArrowRight } from "@/icons";
import { XImage, XTable, XTableTd, XTableTh } from "@/ui-kit";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Icon,
  Stack,
  Tbody,
  Text,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { useState } from "react";

const data = [
  {
    title: "Swap ETH for SPONGE",
    totalValue: "$20.39K",
    totalAmount: "14.4M SPONGE",
    address: "0x345Cg...29dd39",
    time: "1 hour ago",
  },
  {
    title: "Swap ETH for USDC",
    totalValue: "$20.39K",
    totalAmount: "14.4M SPONGE",
    address: "0x345Cg...29dd39",
    time: "1 hour ago",
  },
  {
    title: "Swap ETH for cbETH",
    totalValue: "$20.39K",
    totalAmount: "14.4M SPONGE",
    address: "0x345Cg...29dd39",
    time: "1 hour ago",
  },
  {
    title: "Swap ETH for WOJAK",
    totalValue: "$20.39K",
    totalAmount: "14.4M SPONGE",
    address: "0x345Cg...29dd39",
    time: "1 hour ago",
  },
  {
    title: "Swap ETH for FMY",
    totalValue: "$20.39K",
    totalAmount: "14.4M SPONGE",
    address: "0x345Cg...29dd39",
    time: "1 hour ago",
  },
  {
    title: "Swap ETH for USDC",
    totalValue: "$20.39K",
    totalAmount: "14.4M SPONGE",
    address: "0x345Cg...29dd39",
    time: "1 hour ago",
  },
  {
    title: "Swap ETH for XFT",
    totalValue: "$20.39K",
    totalAmount: "14.4M SPONGE",
    address: "0x345Cg...29dd39",
    time: "1 hour ago",
  },
];

const FILTER = [
  {
    title: "all",
    value: "all",
  },
  {
    title: "swaps",
    value: "swaps",
  },
  {
    title: "adds",
    value: "adds",
  },
  {
    title: "removes",
    value: "removes",
  },
];

export const AnalyticsTableTransactions = () => {
  const [pool, setPool] = useState("all");
  const { t } = useTranslation();
  return (
    <Stack spacing={3.5}>
      <Flex align="center" justify="space-between">
        <Text color="text.300">{t("transactions")}</Text>
      </Flex>
      <XTable>
        <Thead>
          <Tr>
            <XTableTh maxW="200px !important">
              <Breadcrumb fontSize="sm" fontWeight="bold" color="text.500">
                {FILTER.map((item, idx) => (
                  <BreadcrumbItem key={idx}>
                    <BreadcrumbLink
                      color={pool === item.value ? "sec.1" : "text.500"}
                      onClick={() => setPool(item.value)}
                    >
                      {t(item.title)}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                ))}
              </Breadcrumb>
            </XTableTh>
            <XTableTh>{t("total_value")}</XTableTh>
            <XTableTh>{t("token_amount")}</XTableTh>
            <XTableTh>{t("token_amount")}</XTableTh>
            <XTableTh>{t("account")}</XTableTh>
            <XTableTh boxProps={{ align: "center", gap: "4px" }}>
              {t("time")}
              <Icon
                as={ArrowRight}
                transform="rotate(90deg)"
                w="14px"
                h="14px"
                color="text.500"
              />
            </XTableTh>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item, idx) => (
            <Tr key={idx}>
              <XTableTd boxProps={{ align: "center" }}>
                <Text color="sec.2">{item.title}</Text>
              </XTableTd>
              <XTableTd>{item.totalValue}</XTableTd>
              <XTableTd>{item.totalAmount}</XTableTd>
              <XTableTd>{item.totalAmount}</XTableTd>
              <XTableTd boxProps={{ color: "sec.2" }}>{item.address}</XTableTd>
              <XTableTd>{item.time}</XTableTd>
            </Tr>
          ))}
        </Tbody>
      </XTable>
    </Stack>
  );
};
