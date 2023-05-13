import {
  Box,
  Text,
  Flex,
  Icon,
  ComponentWithAs,
  IconProps,
  FlexProps,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

interface Props extends FlexProps {
  name: string;
  value: string;
  icon: ComponentWithAs<"svg", IconProps>;
}

export const BoxInfoV3 = ({ name, value, icon, ...props }: Props) => {
  const { t } = useTranslation();
  return (
    <Flex w="calc(50% - 10px)" gap="10px" align="center" {...props}>
      <Flex
        w="44px"
        h="44px"
        align="center"
        justify="center"
        bg="text.800"
        rounded="50%"
      >
        <Icon as={icon} w="20px" h="20px" />
      </Flex>
      <Box>
        <Text color="text.500">{t(name)}</Text>
        <Text color="text.50" fontSize="lg">
          {value}
        </Text>
      </Box>
    </Flex>
  );
};
