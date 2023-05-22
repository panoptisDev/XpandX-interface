import { ArrowRight, TrendDownIcon, TrendUpIcon } from "@/icons";
import { XButton, XImage, XTable, XTableTd, XTableTh } from "@/ui-kit";
import { Flex, Icon, Stack, Tbody, Text, Thead, Tr } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

const data = [
  {
    token: {
      icon: "/venom.svg",
      name: "Venom",
      stable: "VENOM",
    },
    price: "$1,865.67",
    isChangeDown: true,
    change: "1.65%",
    volume: "$1.1B",
    tvl: "$687.6M",
  },
  {
    token: {
      icon: "/venom.svg",
      name: "Wrapped Venom",
      stable: "WVENOM",
    },
    price: "$1,865.67",
    isChangeDown: true,
    change: "1.65%",
    volume: "$1.1B",
    tvl: "$687.6M",
  },
  {
    token: {
      icon: "/btc.svg",
      name: "Wrapped Bitcoin",
      stable: "WBTC",
    },
    price: "$1,865.67",
    isChangeDown: true,
    change: "1.65%",
    volume: "$1.1B",
    tvl: "$687.6M",
  },
  {
    token: {
      icon: "/eth.svg",
      name: "Wrapped Ethereum",
      stable: "WETH",
    },
    price: "$1,865.67",
    change: "1.65%",
    isChangeDown: false,
    volume: "$1.1B",
    tvl: "$687.6M",
  },
  {
    token: {
      icon: "/bnb.svg",
      name: "Binance",
      stable: "BNB",
    },
    price: "$1,865.67",
    isChangeDown: false,
    change: "1.65%",
    volume: "$1.1B",
    tvl: "$687.6M",
  },
  {
    token: {
      icon: "/fantom.svg",
      name: "Fantom",
      stable: "FTM",
    },
    price: "$1,865.67",
    isChangeDown: true,
    change: "1.65%",
    volume: "$1.1B",
    tvl: "$687.6M",
  },
  {
    token: {
      icon: "/usdt.svg",
      name: "Tether USD",
      stable: "USDT",
    },
    price: "$1,865.67",
    isChangeDown: false,
    change: "1.65%",
    volume: "$1.1B",
    tvl: "$687.6M",
  },
  {
    token: {
      icon: "/usdc.svg",
      name: "USD Coin",
      stable: "USDC",
    },
    price: "$1,865.67",
    isChangeDown: false,
    change: "1.65%",
    volume: "$1.1B",
    tvl: "$687.6M",
  },
  {
    token: {
      icon: "/dai.svg",
      name: "DAI",
      stable: "DAI",
    },
    price: "$1,865.67",
    change: "1.65%",
    isChangeDown: true,
    volume: "$1.1B",
    tvl: "$687.6M",
  },
];

export const EarningTable = () => {
  const { t } = useTranslation();
  return (
    <Stack spacing={3.5}>
      <Flex align="center" justify="space-between">
        <Text color="text.300">{t("active_assets")}</Text>
        <XButton
          maxW="134px"
          variant="primary-outline"
          rightIcon={<Icon as={ArrowRight} />}
        >
          {t("harvest_all")}
        </XButton>
      </Flex>
      <XTable minW="900px">
        <Thead>
          <Tr>
            <XTableTh w="50px">{t("no")}</XTableTh>
            <XTableTh minW="280px">{t("token")}</XTableTh>
            <XTableTh>{t("price")}</XTableTh>
            <XTableTh>{t("change")}</XTableTh>
            <XTableTh>{t("volume24h")}</XTableTh>
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
                <XImage
                  src={item.token.icon}
                  alt="venom"
                  width="32"
                  height="32"
                />
                <Text>{item.token.name}</Text>
                {item.token.stable}
              </XTableTd>
              <XTableTd>{item.price}</XTableTd>
              <XTableTd
                boxProps={{ color: item.isChangeDown ? "#FF796C" : "#A7F984" }}
              >
                <Icon
                  as={item.isChangeDown ? TrendDownIcon : TrendUpIcon}
                  w="20px"
                  h="20px"
                />
                {item.change}
              </XTableTd>
              <XTableTd>{item.volume}</XTableTd>
              <XTableTd>{item.tvl}</XTableTd>
            </Tr>
          ))}
        </Tbody>
      </XTable>
    </Stack>
  );
};
