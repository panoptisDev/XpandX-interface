import { LayoutIcon, SlidersIcon, SquaresFourIcon } from "@/icons";
import { XImage } from "@/ui-kit";
import {
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

interface IProps {
  layout: string;
  setLayout: (value: string) => void;
}

export const TokensHeader = ({ layout, setLayout }: IProps) => {
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
          <XImage src="/venom.svg" width={26} height={26} alt="Venom" />
          <Text>Venom</Text>
        </Flex>

        <InputGroup minW="220px">
          <InputLeftElement
            pointerEvents="none"
            color="text.50"
            w="44px"
            h="32px"
          >
            <Icon as={SlidersIcon} w="20px" h="20px" />
          </InputLeftElement>
          <Input
          pl='40px'
            borderColor="text.600"
            placeholder={t("filter_tokens") || ""}
            _placeholder={{ color: "text.500" }}
          />
        </InputGroup>
        <Flex
          bg="text.700"
          borderRadius="50px"
          p="3px"
          h="32px"
          minW="132px"
          gap="8px"
          justify="center"
          align="center"
        >
          <Text fontSize="sm" color="text.400">
            {t("view_by")}
          </Text>

          <Flex gap="2px">
            <Flex
              w="26px"
              h="26px"
              bg={layout === "table" ? "text.500" : "transparent"}
              borderRadius="50px"
              justify="center"
              align="center"
              onClick={() => setLayout("table")}
              cursor="pointer"
            >
              <Icon as={LayoutIcon} w="20px" h="20px" />
            </Flex>

            <Flex
              w="26px"
              h="26px"
              bg={layout === "cards" ? "text.500" : "transparent"}
              borderRadius="50px"
              justify="center"
              align="center"
              onClick={() => setLayout("cards")}
              cursor="pointer"
            >
              <Icon as={SquaresFourIcon} w="20px" h="20px" />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
