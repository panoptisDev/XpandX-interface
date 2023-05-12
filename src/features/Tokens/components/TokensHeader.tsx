import { ChevronDownIcon } from "@/icons";
import { XImage } from "@/ui-kit";
import {
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

export const TokensHeader = () => {
  const { t } = useTranslation();

  return (
    <Flex w="100%" align="center" justify="space-between">
      <Text color="text.50" fontSize="2xl" fontWeight="bold">
        {t("top_tokens_on_xpand_x")}
      </Text>

      <Flex align="center" justify="space-between" gap="8px">
        <Flex
          align="center"
          rounded="50px"
          gap="8px"
          bg="text.700"
          p="4px"
          h="32px"
          w="100%"
          minW="97px"
          cursor="pointer"
          _hover={{
            filter: "brightness(0.95)",
          }}
        >
          <XImage
            src="/venom.svg"
            width={26}
            height={26}
            alt="Venom"
          />
          <Text>Venom</Text>
        </Flex>

        <Menu>
          <MenuButton
            as={Flex}
            cursor="pointer"
            rounded="50px"
            align="center"
            p="5px 14px"
            bg="text.700"
            color="text.50"
            minW="fit-content"
            h="32px"
            fontSize="sm"
          >
            {t("1D")} <ChevronDownIcon w="16px" h="16px" color="text.50" />
          </MenuButton>
          <MenuList minW="120px">
            <MenuItem>1H</MenuItem>
            <MenuItem>1D</MenuItem>
            <MenuItem>1M</MenuItem>
            <MenuItem>1W</MenuItem>
            <MenuItem>1Y</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};
