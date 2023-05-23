import { LayoutIcon, PlusIcon, RefreshIcon, SquaresFourIcon } from "@/icons";
import { XButton, XContainer } from "@/ui-kit";
import {
  Box,
  Flex,
  Icon,
  Stack,
  Text,
  useDisclosure,
  Hide,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import {
  ModalNewPosition,
  ModalRefreshTable,
  PoolsActive,
  TokensCards,
  TokensTable,
} from "./components";
import { useConnectWallet } from "@/store/wallet";
import { useState } from "react";

export const Pools = () => {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenModalRefresh,
    onOpen: onOpenModalRefresh,
    onClose: onCloseModalRefresh,
  } = useDisclosure();
  const address = useConnectWallet((state) => state.address);
  const [layout, setLayout] = useState("cards");

  return (
    <XContainer>
      <Stack
        w="100%"
        margin="0 auto"
        spacing={4}
        maxW={!address ? { base: "100%", lg: "624px" } : "100%"}
      >
        <Flex
          w="100%"
          gap="8px"
          align={{ base: "flex-start", lg: "center" }}
          justify="space-between"
          direction={{ base: "column", lg: "row" }}
        >
          <Text color="text.50" fontSize="2xl" fontWeight="bold">
            {t("pools")}
          </Text>

          <Flex align="center" justify="space-between" gap="8px">
            <Flex
              bg="text.700"
              borderRadius="50px"
              align="center"
              p="5px 18px"
              gap="6px"
              cursor="pointer"
              onClick={onOpenModalRefresh}
            >
              <Icon as={RefreshIcon} />
              <Text>{t("refresh")}</Text>
            </Flex>
            <XButton
              bg="transparent"
              border="1px solid"
              borderColor="text.50"
              color="text.50"
              leftIcon={<Icon as={PlusIcon} />}
              minW={{ base: "140px", sm: "150px" }}
              onClick={onOpen}
            >
              {t("new_position")}
            </XButton>

            <Flex
              bg="text.700"
              borderRadius="50px"
              p={{ base: "3px 4px 3px 5px", sm: "3px" }}
              h="32px"
              minW={{ base: "unset", sm: "132px" }}
              gap="8px"
              justify="center"
              align="center"
            >
              <Hide below="sm">
                <Text fontSize="sm" color="text.400">
                  {t("view_by")}
                </Text>
              </Hide>

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

        {address ? (
          layout === "table" ? (
            <TokensTable />
          ) : (
            <TokensCards />
          )
        ) : (
          <PoolsActive />
        )}

        <ModalNewPosition isOpen={isOpen} onClose={onClose} />
        <ModalRefreshTable
          isOpen={isOpenModalRefresh}
          onClose={onCloseModalRefresh}
        />
      </Stack>
    </XContainer>
  );
};
