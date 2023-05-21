import { Box, Flex, Grid, Text, Stack } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

import { BankIcon, MoneyIcon, HandIcon, WalletIconV2 } from "@/icons";
import { BoxInfoV3 } from "./";
import { XImage } from "@/ui-kit";

export const TokenClaim = () => {
  const { t } = useTranslation();

  return (
    <Flex gap="12px" direction={{ base: "column", lg: "row" }}>
      <Flex
        align="center"
        justify="center"
        bg="text.700"
        rounded="14px"
        flex="1"
        p="35px 20px"
        direction="column"
      >
        <Text fontWeight="bold" fontSize="2xl">
          {t("claim")}
        </Text>
        <Stack direction="row">
          <XImage
            src="/icons/launchpad/coin.svg"
            width={40}
            height={40}
            alt=""
          />
          <Text fontSize="3xxl" color="text.50">
            5,000,000
          </Text>
          <Text fontSize="3xxl" color="text.500" textTransform="lowercase">
            {t("tokens")}
          </Text>
        </Stack>
      </Flex>

      <Flex
        align="center"
        justify="space-between"
        bg="text.700"
        rounded="14px"
        flex="1"
        p="22px 20px"
        flexWrap="wrap"
        gap="20px"
        direction={{ base: "column", lg: "row" }}
      >
        <BoxInfoV3
          name="total_raised_hardcap"
          value="500 / 500 ETH"
          icon={BankIcon}
        />
        <BoxInfoV3 name="lex_price" value="$0.02" icon={MoneyIcon} />
        <BoxInfoV3 name="circ_marketcap" value="$1.24M" icon={HandIcon} />
        <BoxInfoV3 name="fdv" value="$18.44M" icon={WalletIconV2} />
      </Flex>
    </Flex>
  );
};
