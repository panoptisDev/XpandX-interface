import { Pagination } from "@/components";
import {
  Divider,
  Flex,
  Icon,
  Stack,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import React from "react";
import { XImage } from "@/ui-kit";
import { useTranslation } from "next-i18next";
import { ArrowRight, TrendDownIcon, TrendUpIcon } from "@/icons";
import { data } from "../PoolsTable";

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
        {data.map((item, idx) => (
          <GridItem
            key={idx}
            w="100%"
            p="16px"
            borderRadius="14px"
            bg="blackAlpha.50"
          >
            <Stack spacing={3.5}>
              <Flex gap="10px" align="center">
                <Flex>
                  <XImage
                    src={item.token.icon1}
                    alt="venom"
                    width="24"
                    height="24"
                  />
                  <XImage
                    src={item.token.icon2}
                    alt="venom"
                    width="24"
                    height="24"
                  />
                </Flex>
                <Text>{item.token.name}</Text>
                <Flex
                  justify="center"
                  align="center"
                  w="49px"
                  h="24px"
                  bg="text.600"
                  borderRadius="5px"
                  fontSize="14px"
                  color="text.100"
                >
                  {item.token.fee}
                </Flex>
              </Flex>

              <Divider borderColor="text.700" />

              <Flex align="center" justify="space-between">
                <Text
                  color="text.500"
                  fontSize="sm"
                  fontWeight="bold"
                  textTransform="uppercase"
                >
                  {t("volume24H")}
                </Text>
                <Text color="text.50" fontSize="sm">
                  {item.volume24h}
                </Text>
              </Flex>

              <Flex align="center" justify="space-between">
                <Text
                  color="text.500"
                  fontSize="sm"
                  fontWeight="bold"
                  textTransform="uppercase"
                >
                  {t("volume7h")}
                </Text>
                <Text color="text.50" fontSize="sm">
                  {item.volume7d}
                </Text>
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
                <Text color="text.50" fontSize="sm">
                  {item.tvl}
                </Text>
              </Flex>
            </Stack>
          </GridItem>
        ))}
      </Grid>
      <Pagination />
    </Stack>
  );
};
