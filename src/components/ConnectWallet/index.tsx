import { ArrowRight, ChevronDownIcon } from "@/icons";
import { XButton, XImage } from "@/ui-kit";
import { ellipseAddress } from "@/utils";
import {
  Box,
  Flex,
  Icon,
  Stack,
  Text,
  useDisclosure,
  BoxProps,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { useRef } from "react";
import { Wallet } from "./components";
import { useConnectWallet } from "@/store/wallet";
import { useSwap } from "@/store/swap";

interface Props extends BoxProps {
  type: "inApp" | "header";
  filledConnectedBtn?: boolean;
}

export const ConnectWallet = ({ type, filledConnectedBtn, ...rest }: Props) => {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);
  const address = useConnectWallet((state) => state.address);
  const balance = useConnectWallet((state) => state.balance);
  const loading = useConnectWallet((state) => state.loading);
  const venomConnect = useConnectWallet((state) => state.venomConnect);
  const venomProvider = useConnectWallet((state) => state.venomProvider);

  const amount = useSwap((state) => state.amount);
  const swapLoading = useSwap((state) => state.loading);

  const onConnectButtonClick = async () => {
    venomConnect?.connect();
  };

  const onDisconnectButtonClick = async () => {
    venomProvider?.disconnect();
  };

  return (
    <Box {...rest}>
      {type === "inApp" && (
        <>
          {venomConnect && !address && (
            <XButton
              rightIcon={<Icon as={ArrowRight} />}
              size="md"
              onClick={onConnectButtonClick}
              isLoading={loading}
            >
              {t("connect_wallet")}
            </XButton>
          )}
          {venomConnect && !!address && (
            <XButton
              rightIcon={<Icon as={ArrowRight} />}
              size="md"
              disabled={!amount}
              isLoading={swapLoading}
            >
              {t("swap")}
            </XButton>
          )}
        </>
      )}

      {type === "header" && (
        <>
          {venomConnect && !address && (
            <XButton
              rightIcon={
                <Stack
                  w={26}
                  h={26}
                  bg="white"
                  rounded="50%"
                  ml={2}
                  align="center"
                  justify="center"
                >
                  <ArrowRight color="text.900" />
                </Stack>
              }
              size="sm"
              onClick={onConnectButtonClick}
              isLoading={loading}
            >
              {t("connect_wallet")}
            </XButton>
          )}
          {venomConnect && !!address && (
            <Flex
              bg="text.700"
              borderRadius="50px"
              p="3px 6px"
              align="center"
              gap="8px"
              cursor="pointer"
              ref={btnRef}
              onClick={onOpen}
              sx={
                filledConnectedBtn
                  ? {
                      rounded: "50px",
                      py: "10px",
                      display: "flex",
                    }
                  : {}
              }
            >
              <XImage src="/wallet.svg" alt="wallet" width="28" height="28" />
              <Text>{ellipseAddress(address, 4)}</Text>
              <Icon as={ChevronDownIcon} w="18px" h="18px" />
            </Flex>
          )}
        </>
      )}
      <Wallet
        isOpen={isOpen}
        onClose={onClose}
        btnRef={btnRef}
        address={address || ""}
        onDisconnectButtonClick={onDisconnectButtonClick}
        balance={balance || 0}
      />
    </Box>
  );
};
