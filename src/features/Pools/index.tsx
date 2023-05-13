import {
  Box,
  Button,
  Flex,
  Icon,
  Menu,
  MenuButton,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "next-i18next";
import {
  ArrowRight,
  ChevronDownIcon,
  LightIcon,
  PlusIcon,
  RefreshIcon,
} from "@/icons";
import { XButton, XImage } from "@/ui-kit";
import { ModalNewPosition, ModalRefreshTable } from "./components";

export const Pools = () => {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenModalRefresh,
    onOpen: onOpenModalRefresh,
    onClose: onCloseModalRefresh,
  } = useDisclosure();

  return (
    <Stack w="100%" maxW="624px" margin="0 auto" spacing={4}>
      <Flex w="100%" align="center" justify="space-between">
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
            minW="150px"
            onClick={onOpen}
          >
            {t("new_position")}
          </XButton>
        </Flex>
      </Flex>

      <Box borderRadius="14px" bg="text.700">
        <Stack
          spacing={4}
          p="24px 20px"
          borderBottom="1px solid"
          borderColor="text.900"
          justify="center"
          align="center"
        >
          <XImage
            src="/pools-cards.webp"
            alt="pools-cards"
            width="242"
            height="211"
          />

          <Text fontSize="xl" color="text.50">
            {t("your_active_v3_liquidity_positions_will_appear_here")}
          </Text>

          <XButton rightIcon={<Icon as={ArrowRight} />} size="md" maxW="210px">
            {t("connect_a_wallet")}
          </XButton>
        </Stack>

        <Flex p="24px 20px">
          <Flex gap="4px" w="100%">
            <Icon as={LightIcon} w="20px" h="20px" />

            <Box>
              <Text
                fontSize="sm"
                fontWeight="bold"
                lineHeight="160%"
                color="text.200"
              >
                {t("learn_about_providing_liquidity")}
              </Text>
              <Text lineHeight="160%" color="text.400">
                {t("check_out_our_v3_lp_walkthrough_and_migration_guides")}
              </Text>
            </Box>
          </Flex>

          <Flex gap="4px" w="100%">
            <Icon as={LightIcon} w="20px" h="20px" />

            <Box>
              <Text
                fontSize="sm"
                fontWeight="bold"
                lineHeight="160%"
                color="text.200"
              >
                {t("top_pools")}
              </Text>
              <Text lineHeight="160%" color="text.400">
                {t("explore_xpand_x_analytics")}
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Box>
      <ModalNewPosition isOpen={isOpen} onClose={onClose} />
      <ModalRefreshTable
        isOpen={isOpenModalRefresh}
        onClose={onCloseModalRefresh}
      />
    </Stack>
  );
};
