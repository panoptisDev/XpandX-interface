import { ChevronDownIcon } from "@/icons";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const Pagination = () => {
  return (
    <Flex maxW="140px" m="0 auto" p="12px 0px" align="center" gap="8px">
      <Flex
        as={motion.div}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        cursor="pointer"
        justify="center"
        align="center"
        minW="30px"
        w="30px"
        h="30px"
        borderRadius="6"
        border="1px solid"
        borderColor="text.600"
      >
        <Icon
          as={ChevronDownIcon}
          transform="rotate(90deg)"
          w="22px"
          h="22px"
        />
      </Flex>
      <Text fontSize="sm" color="text.500">
        Page{" "}
        <Box as="span" color="text.200">
          1 / 4
        </Box>
      </Text>

      <Flex
        as={motion.div}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        cursor="pointer"
        justify="center"
        align="center"
        minW="30px"
        w="30px"
        h="30px"
        borderRadius="6"
        border="1px solid"
        borderColor="text.600"
      >
        <Icon as={ChevronDownIcon} transform="rotate(270deg)" />
      </Flex>
    </Flex>
  );
};
