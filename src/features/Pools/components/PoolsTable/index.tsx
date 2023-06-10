import { PAIRS_DATA } from "@/constants/coin";
import { ArrowRight } from "@/icons";
import { XImage, XTable, XTableTd, XTableTh } from "@/ui-kit";
import { Flex, Icon, Tbody, Text, Thead, Tr } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

export const TokensTable = () => {
  const { t } = useTranslation();
  return (
    <XTable minW="700px">
      <Thead>
        <Tr>
          <XTableTh w="50px">{t("no")}</XTableTh>
          <XTableTh minW="250px">{t("pool")}</XTableTh>
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
        {PAIRS_DATA.map((item, idx) => (
          <Tr
            key={idx}
            onClick={() =>
              window.open(
                `https://devnet.venomscan.com/accounts/${item.pairAddress}`
              )
            }
            cursor="pointer"
          >
            <XTableTd maxW="50px" boxProps={{ textAlign: "center" }}>
              {1 + idx}
            </XTableTd>
            <XTableTd boxProps={{ align: "center" }}>
              <Flex flexShrink="0">
                <XImage
                  src={item.pairToken.leftToken}
                  alt="venom"
                  width="20"
                  height="20"
                />
                <XImage
                  src={item.pairToken.rightToken}
                  alt="venom"
                  width="20"
                  height="20"
                />
              </Flex>
              <Text>{item.name}</Text>
              {/* <Flex
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
              </Flex> */}
            </XTableTd>
            {/* <XTableTd>{item.volume24h}</XTableTd>
            <XTableTd>{item.volume7d}</XTableTd>
            <XTableTd>{item.tvl}</XTableTd> */}
            <XTableTd />
            <XTableTd />
            <XTableTd />
          </Tr>
        ))}
      </Tbody>
    </XTable>
  );
};
