import { useConverBigNummber } from "@/hooks";
import { CloseIcon, HourglassIcon, PowerIcon, TrendDownIcon } from "@/icons";
import { XButton, XImage } from "@/ui-kit";
import { ellipseAddress } from "@/utils";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Hide,
  Icon,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import { WalletActivity } from "./WalletActivity";
import { WalletToken } from "./WalletToken";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  btnRef: any;
  address: string;
  onDisconnectButtonClick: () => void;
  balance: number;
}

export const Wallet = ({
  isOpen,
  onClose,
  btnRef,
  address,
  onDisconnectButtonClick,
  balance,
}: IProps) => {
  const { t } = useTranslation();
  const [status, setStatus] = useState("tokens");

  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent
        margin={{ base: 0, sm: "14px" }}
        rounded={{ base: 0, sm: "14px" }}
        bg="text.600"
        minW={{ base: "100%", sm: "380px" }}
      >
        <DrawerBody p="0px">
          <Stack spacing={5}>
            <Flex
              align="center"
              gap="14px"
              justify="space-between"
              p="20px"
              pb="0px"
            >
              <Flex align="center" gap="12px">
                <XImage src="/wallet.svg" alt="wallet" width="40" height="40" />
                <Text color="text.50">{ellipseAddress(address, 4)}</Text>
              </Flex>

              <Flex gap="8px" align="center">
                <Icon
                  as={PowerIcon}
                  w="20px"
                  h="20px"
                  color="text.400"
                  onClick={async () => {
                    await onDisconnectButtonClick();
                    onClose();
                  }}
                  cursor="pointer"
                />
                <Hide above="sm">
                  <Icon
                    as={CloseIcon}
                    w="16px"
                    h="16px"
                    color="text.400"
                    onClick={onClose}
                    cursor="pointer"
                  />
                </Hide>
              </Flex>
            </Flex>

            <Divider
              bg="text.600"
              w="calc(100% - 40px)"
              left="50%"
              pos="relative"
              transform="translateX(-50%)"
            />

            <Stack spacing={2.5} p="0px 20px">
              <Box>
                <Text
                  color="text.50"
                  fontSize="2xxl"
                  fontWeight="bold"
                  lineHeight="140%"
                >
                  {balance}
                </Text>

                <Flex align="center" gap="6px">
                  <Icon as={TrendDownIcon} color="#FF796C" />
                  <Text color="#FF796C">1.65%</Text>
                  <Text color="text.400">$0.52</Text>
                </Flex>
              </Box>

              <Tooltip
                label={
                  <Flex align="center" gap="4px" minH="30px">
                    <Icon
                      as={HourglassIcon}
                      w="18px"
                      h="18px"
                      color="text.900"
                    />
                    {t("Coming soon")}
                  </Flex>
                }
                hasArrow
                placement="top"
                bg="text.0"
                borderRadius="5"
                color="text.900"
                fontSize="sm"
              >
                <Box>
                  <XButton size="md">{t("buy_crypto")}</XButton>
                </Box>
              </Tooltip>
            </Stack>

            <Breadcrumb
              fontSize="sm"
              fontWeight="bold"
              color="text.500"
              p="0px 20px"
              mb="10px"
            >
              <BreadcrumbItem>
                <BreadcrumbLink
                  color={status === "tokens" ? "text.50" : "text.400"}
                  onClick={() => setStatus("tokens")}
                >
                  {t("tokens")}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink
                  color={status === "activity" ? "text.50" : "text.400"}
                  onClick={() => setStatus("activity")}
                >
                  {t("activity")}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>

            {status === "tokens" && <WalletToken />}
            {status === "activity" && <WalletActivity />}
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
