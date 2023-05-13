import {
  ArrowRight,
  ChevronDownIcon,
  TrendDownIcon,
  TrendUpIcon,
} from "@/icons";
import { XImage, XTable, XTableTd, XTableTh } from "@/ui-kit";
import {
  Box,
  Flex,
  Icon,
  Stack,
  Tbody,
  Text,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

const data = [
  {
    token: {
      icon1: "/venom.svg",
      icon2: "/usdt.svg",
      name: "VENOM/USDT",
      fee: "0.05%",
    },
    volume24h: "$1.1B",
    volume7d: "$1,865.67",
    tvl: "$687.6M",
  },
  {
    token: {
      icon1: "/usdc.svg",
      icon2: "/eth.svg",
      name: "USDC/ETH",
      fee: "0.05%",
    },
    volume24h: "$1.1B",
    volume7d: "$1,865.67",
    tvl: "$687.6M",
  },
  {
    token: {
      icon1: "/btc.svg",
      icon2: "/eth.svg",
      name: "WBTC/ETH",
      fee: "0.05%",
    },
    volume24h: "$1.1B",
    volume7d: "$1,865.67",
    tvl: "$687.6M",
  },
  {
    token: {
      icon1: "/usdt.svg",
      icon2: "/bnb.svg",
      name: "USDT/BNB",
      fee: "0.05%",
    },
    volume24h: "$1.1B",
    volume7d: "$1,865.67",
    tvl: "$687.6M",
  },
  {
    token: {
      icon1: "/venom.svg",
      icon2: "/bnb.svg",
      name: "VENOM/BNB",
      fee: "0.05%",
    },
    volume24h: "$1.1B",
    volume7d: "$1,865.67",
    tvl: "$687.6M",
  },
  {
    token: {
      icon1: "/venom.svg",
      icon2: "/usdt.svg",
      name: "VENOM/USDT",
      fee: "0.05%",
    },
    volume24h: "$1.1B",
    volume7d: "$1,865.67",
    tvl: "$687.6M",
  },
  {
    token: {
      icon1: "/venom.svg",
      icon2: "/usdt.svg",
      name: "VENOM/USDT",
      fee: "0.05%",
    },
    volume24h: "$1.1B",
    volume7d: "$1,865.67",
    tvl: "$687.6M",
  },
];

export const AnalyticsTableTopPools = () => {
  const { t } = useTranslation();
  return (
    <Stack spacing={3.5}>
      <Flex align="center" justify="space-between">
        <Text color="text.300">{t("top_pools")}</Text>
        <Flex align="center" fontSize="sm">
          {t("explore")}{" "}
          <Icon
            as={ChevronDownIcon}
            transform="rotate(270deg)"
            w="20px"
            h="20px"
          />
        </Flex>
      </Flex>
      <XTable>
        <Thead>
          <Tr>
            <XTableTh w="50px">{t("no")}</XTableTh>
            <XTableTh>{t("pool")}</XTableTh>
            <XTableTh>{t("volume24h")}</XTableTh>
            <XTableTh>{t("volume7d")}</XTableTh>
            <XTableTh boxProps={{ align: "center", gap: "4px" }}>
              <Icon
                as={ArrowRight}
                transform="rotate(90deg)"
                w="14px"
                h="14px"
                color="sec.2"
              />
              {t("tvl")}
            </XTableTh>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item, idx) => (
            <Tr key={idx}>
              <XTableTd maxW="50px" boxProps={{ textAlign: "center" }}>
                {1 + idx}
              </XTableTd>
              <XTableTd boxProps={{ align: "center" }}>
                <Flex>
                  <XImage
                    src={item.token.icon1}
                    alt="venom"
                    width="20"
                    height="20"
                  />
                  <XImage
                    src={item.token.icon2}
                    alt="venom"
                    width="20"
                    height="20"
                  />
                </Flex>
                <Text>{item.token.name}</Text>
                <Flex
                  justify="center"
                  align="center"
                  w="37px"
                  h="18px"
                  bg="text.600"
                  borderRadius="5px"
                  fontSize="10px"
                  color="text.100"
                >
                  {item.token.fee}
                </Flex>
              </XTableTd>
              <XTableTd>{item.volume24h}</XTableTd>
              <XTableTd>{item.volume7d}</XTableTd>
              <XTableTd>{item.tvl}</XTableTd>
            </Tr>
          ))}
        </Tbody>
      </XTable>
    </Stack>
  );
};
