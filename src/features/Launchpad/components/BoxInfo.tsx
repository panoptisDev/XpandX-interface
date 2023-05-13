import { Text, Flex } from "@chakra-ui/react";

import { XImage } from "@/ui-kit";

interface Props {
  value: string;
  icon: string;
}

export const BoxInfo = ({ value, icon }: Props) => {
  return (
    <Flex
      align="center"
      rounded="50px"
      gap="8px"
      bg="text.700"
      p="5px 14px"
      h="32px"
      cursor="pointer"
      _hover={{
        filter: "brightness(0.95)",
      }}
    >
      <XImage src={icon} width={20} height={20} alt="Trophy" />
      <Text>{value}</Text>
    </Flex>
  );
};
