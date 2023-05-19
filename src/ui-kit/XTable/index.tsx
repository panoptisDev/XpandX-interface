import { Pagination } from "@/components";
import { ChevronDownIcon } from "@/icons";
import {
  Box,
  Flex,
  Icon,
  Table,
  TableContainer,
  Td,
  Text,
  Th,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

export const XTable = ({ children }: any) => {
  return (
    <Box
      border="1px solid"
      borderColor="text.700"
      borderRadius="14px"
      overflow="auto"
    >
      <TableContainer>
        <Table variant="striped" colorScheme="rgba(63, 63, 70, 0.4)">
          {children}
        </Table>

        <Pagination />
      </TableContainer>
    </Box>
  );
};

export const XTableTh = ({ children, boxProps, ...rest }: any) => {
  return (
    <Th color="text.100" {...rest}>
      <Flex w="100%" maxW="350px" {...boxProps}>
        {children}
      </Flex>
    </Th>
  );
};

export const XTableTd = ({ children, value, boxProps, ...rest }: any) => {
  return (
    <Td {...rest}>
      <Flex gap="10px" w="100%" maxW="350px" {...boxProps}>
        {children}
        {value && (
          <Text
            textOverflow="ellipsis"
            whiteSpace="nowrap"
            overflow="hidden"
            w="100%"
          >
            {value}
          </Text>
        )}
      </Flex>
    </Td>
  );
};
