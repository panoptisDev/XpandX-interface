import {
  Flex,
  FlexProps,
  TableCellProps,
  TableColumnHeaderProps,
  Td,
  Text,
  Th,
} from '@chakra-ui/react';

interface IXTableThProps extends FlexProps {
  thProps?: TableColumnHeaderProps;
}

export const XTableTh = ({ children, thProps, ...rest }: IXTableThProps) => {
  return (
    <Th color="text.100" {...thProps}>
      <Flex w="100%" maxW="350px" {...rest}>
        {children}
      </Flex>
    </Th>
  );
};

interface IXTableTdProps extends FlexProps {
  value?: string;
  tdProps?: TableCellProps;
}

export const XTableTd = ({
  children,
  value,
  tdProps,
  ...rest
}: IXTableTdProps) => {
  return (
    <Td {...tdProps}>
      <Flex gap="10px" w="100%" maxW="350px" {...rest}>
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
