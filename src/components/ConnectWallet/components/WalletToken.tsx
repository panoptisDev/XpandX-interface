import { ChevronDownIcon } from "@/icons";
import { XImage } from "@/ui-kit";
import { Box, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

const TOKENS = [
  {
    icon: "/venom.svg",
    token: "Venom",
    symbol: "VENOM",
    price: "$1,865.67",
    balance: "200",
  },
  {
    icon: "/eth.svg",
    token: "Wrapped Ethereum",
    symbol: "WETH",
    price: "$1,865.67",
    balance: "200",
  },
  {
    icon: "/bnb.svg",
    token: "Binance",
    symbol: "BNB",
    price: "$1,865.67",
    balance: "200",
  },
  {
    icon: "/fantom.svg",
    token: "Fantom",
    symbol: "FTM",
    price: "$1,865.67",
    balance: "200",
  },
  {
    icon: "/usdt.svg",
    token: "Tether USD",
    symbol: "USDT",
    price: "$1,865.67",
    balance: "200",
  },
];

export const WalletToken = () => {
  const { t } = useTranslation();

  return (
    <Stack spacing={5}>
      <Box mt="10px !important">
        {TOKENS.map((item, idx) => (
          <Flex
            p="10px 20px"
            bg={idx % 2 === 0 ? "rgba(63, 63, 70, 0.4)" : "text.600"}
            gap="12px"
            key={idx}
          >
            <XImage src={item.icon} alt={item.token} width="38" height="38" />
            <Box flex="1">
              <Text>{item.token}</Text>
              <Text fontSize="sm" color="text.500">
                {item.symbol}
              </Text>
            </Box>

            <Box>
              <Text>{item.price}</Text>
              <Text fontSize="sm" color="text.500">
                {t("balance")}:{" "}
                <Box as="span" color="text.400">
                  {item.balance}
                </Box>
              </Text>
            </Box>
          </Flex>
        ))}
      </Box>
      <Flex p="0px 20px 20px 20px" align="center" justify="space-between">
        <Text color="text.50" fontWeight="bold">
          {t("hidden")}(19)
        </Text>

        <Flex
          borderRadius="50px"
          bg="text.700"
          h="25px"
          w="70px"
          justify="center"
          align="center"
          gap="4px"
          fontSize="xs"
          cursor="pointer"
        >
          {t("show")}
          <Icon as={ChevronDownIcon} w="14px" h="14px" />
        </Flex>
      </Flex>
    </Stack>
  );
};
