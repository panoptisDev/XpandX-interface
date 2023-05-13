import {
  Box,
  Text,
  Flex,
  Icon,
  ComponentWithAs,
  IconProps,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

interface Props {
  name: string;
  value: string;
  subValue?: string;
  icon: ComponentWithAs<"svg", IconProps>;
}

export const BoxInfoV2 = ({ name, value, subValue, icon }: Props) => {
  const { t } = useTranslation();
  return (
    <Box
      border="1px solid"
      borderColor="text.700"
      rounded="14px"
      p="20px 12px"
      flex={1}
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
          <Text fontSize="2xl" lineHeight="1.4" color="text.50">
            {value}
            {subValue && (
              <Text as="span" fontSize="sm" ml="2">
                {subValue}
              </Text>
            )}
          </Text>
        </Box>

        <Icon as={icon} w="34px" h="34px" />
      </Flex>
    </Box>
  );
};
