import { TOKENS_DATA } from "@/constants/coin";
import { ArrowRight } from "@/icons";
import { XImage, XTable, XTableTd, XTableTh } from "@/ui-kit";
import { Icon, Tbody, Text, Thead, Tr } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

// export const data = [
//   {
//     token: {
//       icon: "/venom.svg",
//       name: "Venom",
//       stable: "VENOM",
//     },
//     price: "$1,865.67",
//     isChangeDown: true,
//     change: "1.65%",
//     volume: "$1.1B",
//     tvl: "$687.6M",
//   },
//   {
//     token: {
//       icon: "/venom.svg",
//       name: "Wrapped Venom",
//       stable: "WVENOM",
//     },
//     price: "$1,865.67",
//     isChangeDown: true,
//     change: "1.65%",
//     volume: "$1.1B",
//     tvl: "$687.6M",
//   },
//   {
//     token: {
//       icon: "/btc.svg",
//       name: "Wrapped Bitcoin",
//       stable: "WBTC",
//     },
//     price: "$1,865.67",
//     isChangeDown: true,
//     change: "1.65%",
//     volume: "$1.1B",
//     tvl: "$687.6M",
//   },
//   {
//     token: {
//       icon: "/eth.svg",
//       name: "Wrapped Ethereum",
//       stable: "WETH",
//     },
//     price: "$1,865.67",
//     change: "1.65%",
//     isChangeDown: false,
//     volume: "$1.1B",
//     tvl: "$687.6M",
//   },
//   {
//     token: {
//       icon: "/bnb.svg",
//       name: "Binance",
//       stable: "BNB",
//     },
//     price: "$1,865.67",
//     isChangeDown: false,
//     change: "1.65%",
//     volume: "$1.1B",
//     tvl: "$687.6M",
//   },
//   {
//     token: {
//       icon: "/fantom.svg",
//       name: "Fantom",
//       stable: "FTM",
//     },
//     price: "$1,865.67",
//     isChangeDown: true,
//     change: "1.65%",
//     volume: "$1.1B",
//     tvl: "$687.6M",
//   },
//   {
//     token: {
//       icon: "/usdt.svg",
//       name: "Tether USD",
//       stable: "USDT",
//     },
//     price: "$1,865.67",
//     isChangeDown: false,
//     change: "1.65%",
//     volume: "$1.1B",
//     tvl: "$687.6M",
//   },
//   {
//     token: {
//       icon: "/usdc.svg",
//       name: "USD Coin",
//       stable: "USDC",
//     },
//     price: "$1,865.67",
//     isChangeDown: false,
//     change: "1.65%",
//     volume: "$1.1B",
//     tvl: "$687.6M",
//   },
//   {
//     token: {
//       icon: "/dai.svg",
//       name: "DAI",
//       stable: "DAI",
//     },
//     price: "$1,865.67",
//     change: "1.65%",
//     isChangeDown: true,
//     volume: "$1.1B",
//     tvl: "$687.6M",
//   },
// ];

export const TokensTable = () => {
  const { t } = useTranslation();
  return (
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
        {TOKENS_DATA.map((item, idx) => (
          <Tr
            key={idx}
            onClick={() =>
              window.open(
                `https://devnet.venomscan.com/accounts/${item.address}`
              )
            }
            cursor="pointer"
          >
            <XTableTd maxW="50px" boxProps={{ textAlign: "center" }}>
              1
            </XTableTd>
            <XTableTd boxProps={{ align: "center" }}>
              <XImage src={item.icon} alt="venom" width="32" height="32" />
              <Text>{item.name}</Text>
              {item.symbol}
            </XTableTd>
            <XTableTd />
            <XTableTd />
            <XTableTd />
            <XTableTd />
          </Tr>
        ))}
      </Tbody>
    </XTable>
  );
};
