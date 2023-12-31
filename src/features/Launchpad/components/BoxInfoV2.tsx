import {
  Box,
  Text,
  Flex,
  Icon,
  ComponentWithAs,
  IconProps,
  GridItem,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

interface Props {
  name: string;
  value: string;
  icon: ComponentWithAs<"svg", IconProps>;
}

export const BoxInfoV2 = ({ name, value, icon }: Props) => {
  const { t } = useTranslation();
  return (
    <GridItem
      border="1px solid"
      borderColor="text.700"
      rounded="14px"
      p="16px 12px"
      w="100%"
    >
      <Flex
        align="center"
        justifyContent="space-between"
        rounded="50px"
        h="32px"
      >
        <Box>
          <Text color="text.500" lineHeight="1.4">
            {t(name)}
          </Text>
          <Text color="sec.2" fontSize="2xl" lineHeight="1.4">
            {value}
          </Text>
        </Box>

        <Icon as={icon} w="34px" h="34px" />
      </Flex>
    </GridItem>
  );
};
