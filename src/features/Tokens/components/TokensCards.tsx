import { TOKENS_DATA } from "@/constants/coin";
import { ArrowRight } from "@/icons";
import { XImage } from "@/ui-kit";
import {
  Divider,
  Flex,
  Grid,
  GridItem,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

export const TokensCards = () => {
  const { t } = useTranslation();

  return (
    <Stack w="100%" align="center">
      <Grid
        w="100%"
        gap="10px"
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
      >
        {TOKENS_DATA.map((item, idx) => (
          <GridItem
            key={idx}
            p="16px"
            borderRadius="14px"
            bg="blackAlpha.50"
            _hover={{ bg: "text.700" }}
          >
            <Stack
              spacing={3.5}
              onClick={() =>
                window.open(
                  `https://devnet.venomscan.com/accounts/${item.address}`
                )
              }
              cursor="pointer"
            >
              <Flex gap="10px" align="center">
                <XImage src={item.icon} alt="venom" width="36" height="36" />
                <Text>{item.name}</Text>
                <Text color="text.500">{item.symbol}</Text>
              </Flex>

              <Divider borderColor="text.700" />

              <Flex align="center" justify="space-between">
                <Text
                  color="text.500"
                  fontSize="sm"
                  fontWeight="bold"
                  textTransform="uppercase"
                >
                  {t("price")}
                </Text>
                <Text color="text.50" fontSize="sm" />
              </Flex>

              <Flex align="center" justify="space-between">
                <Text
                  color="text.500"
                  fontSize="sm"
                  fontWeight="bold"
                  textTransform="uppercase"
                >
                  {t("change")}
                </Text>

                {/* <Flex
                  align="center"
                  gap="6px"
                  color={item.isChangeDown ? "#FF796C" : "#A7F984"}
                >
                  <Icon
                    as={item.isChangeDown ? TrendDownIcon : TrendUpIcon}
                    w="20px"
                    h="20px"
                  />
                  <Text fontSize="sm">{item.change}</Text>
                </Flex> */}
              </Flex>

              <Flex align="center" justify="space-between">
                <Text
                  color="text.500"
                  fontSize="sm"
                  fontWeight="bold"
                  textTransform="uppercase"
                >
                  {t("volume24h")}
                </Text>
                {/* <Text color="text.50" fontSize="sm">
                  {item.volume}
                </Text> */}
              </Flex>

              <Flex align="center" justify="space-between">
                <Flex gap="4px">
                  <Icon
                    as={ArrowRight}
                    transform="rotate(90deg)"
                    w="20px"
                    h="20px"
                    color="sec.2"
                  />
                  <Text
                    color="text.500"
                    fontSize="sm"
                    fontWeight="bold"
                    textTransform="uppercase"
                  >
                    {t("tvl")}
                  </Text>
                </Flex>
                {/* <Text color="text.50" fontSize="sm">
                  {item.tvl}
                </Text> */}
              </Flex>
            </Stack>
          </GridItem>
        ))}
      </Grid>
      {/* <Pagination /> */}
    </Stack>
  );
};
