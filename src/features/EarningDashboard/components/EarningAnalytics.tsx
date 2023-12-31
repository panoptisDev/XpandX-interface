import { XImage } from "@/ui-kit";
import { Box, Flex, Text, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "next-i18next";

const INFORMATION = [
  {
    title: "total_active_holdings",
    value: "$293.50",
    icon: "/stack.svg",
  },
  {
    title: "total_average_apr",
    value: "10%",
    icon: "/intersect.svg",
  },
  {
    title: "staked_positions",
    value: "130",
    icon: "/circles-four.svg",
  },
  {
    title: "pending_rewards",
    value: "$3048.59",
    icon: "/currency-coin-dollar.svg",
  },
];

export const EarningAnalytics = () => {
  const { t } = useTranslation();
  return (
    <Grid
      gap="12px"
      templateColumns={{
        base: "repeat(1, 1fr)",
        sm: "repeat(2, 1fr)",
        lg: "repeat(4, 1fr)",
      }}
    >
      {INFORMATION.map((item, idx) => (
        <GridItem
          key={idx}
          border="1px solid"
          borderColor="text.400"
          borderRadius="14px"
          p="12px"
        >
          <Flex gap="16px" w="100%">
            <Flex
              w="50px"
              h="50px"
              borderRadius="full"
              bg="text.700"
              justify="center"
              align="center"
            >
              <XImage src={item.icon} alt={item.title} width="30" height="30" />
            </Flex>

            <Box>
              <Text fontSize="sm" color="text.500">
                {t(item.title)}
              </Text>
              <Text fontSize="2xl" color="text.50">
                {item.value}
              </Text>
            </Box>
          </Flex>
        </GridItem>
      ))}
    </Grid>
  );
};
