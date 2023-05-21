import { Text, Flex, FlexProps } from "@chakra-ui/react";

import { XImage } from "@/ui-kit";

interface Props extends FlexProps {
  value: string;
  icon: string;
}

export const BoxInfo = ({ value, icon, ...props }: Props) => {
  return (
    <Flex
      align="center"
      rounded="50px"
      gap="8px"
      bg="text.700"
      p="5px 14px"
      h="32px"
      cursor="pointer"
      flex={{ base: 1, sm: "unset" }}
      _hover={{
        filter: "brightness(0.95)",
      }}
      {...props}
    >
      <XImage src={icon} width={20} height={20} alt="Trophy" />
      <Text>{value}</Text>
    </Flex>
  );
};
