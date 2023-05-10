import { XImage } from "@/ui-kit";
import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

export const SelectToken = () => {
  return (
    <Flex
      p="2px"
      borderRadius="50px"
      bg="text.900"
      gap="6px"
      w="72px"
      align="center"
    >
      <Box w="20px" h="20px" position="relative">
        <XImage src="/usdc.svg" alt="usdc" layout="fill" />
      </Box>
      <Text fontSize="xs" color="text.50" lineHeight="160%">
        USDC
      </Text>
    </Flex>
  );
};
