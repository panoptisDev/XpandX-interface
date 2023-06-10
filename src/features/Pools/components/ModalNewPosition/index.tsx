import { useTokenData } from "@/apis/coin";
import { ArrowRight } from "@/icons";
import { useSwap } from "@/store/swap";
import { useConnectWallet } from "@/store/wallet";
import { XButton } from "@/ui-kit";
import {
  depositLiquidity,
  expectedDepositLiquidity,
} from "@/utils/contracts/dexpair";
import { getPair } from "@/utils/contracts/dexroot";
import {
  Flex,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { Address, ProviderRpcClient } from "everscale-inpage-provider";
import _ from "lodash";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import { TokenPair } from "./components";
import { useDebounce } from "@/hooks";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalNewPosition = ({ isOpen, onClose }: IProps) => {
  const { t } = useTranslation();
  const swapTokens = useSwap((state) => state.swapTokens);
  const onChangeSwapTokens = useSwap((state) => state.onChangeSwapTokens);
  const venomProvider = useConnectWallet((state) => state.venomProvider);
  const toast = useToast();

  const walletAddress = useConnectWallet((state) => state.address);
  const setLoading = useSwap((state) => state.setLoading);
  const loading = useSwap((state) => state.loading);

  const { data } = useTokenData();
  const leftBalance =
    _.find(data, (c) => c.address === swapTokens[0].address)?.balance || 0;
  const rightBalance =
    _.find(data, (c) => c.address === swapTokens[1].address)?.balance || 0;

  const [amount, setAmount] = useState({ left_amount: "0", right_amount: "0" });
  const leftAmount = useDebounce(amount.left_amount, 500);
  const rightAmount = useDebounce(amount.right_amount, 500);

  const handleGetExpectedDepositLiquidity = async () => {
    try {
      console.log("123");
      setLoading(true);

      const address = await getPair(
        swapTokens[0].address,
        swapTokens[1].address,
        venomProvider as ProviderRpcClient
      );

      const data = await expectedDepositLiquidity({
        provider: venomProvider as ProviderRpcClient,
        left_amount: amount.left_amount,
        right_amount: amount.right_amount,
        pair_address: address as Address,
      });

      setAmount({
        left_amount: data.step_1_left_deposit,
        right_amount: data.step_1_right_deposit,
      });
      console.log({ data: data });
    } catch (err) {
      console.log({ err });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    Number(leftAmount) &&
      Number(rightAmount) &&
      handleGetExpectedDepositLiquidity();
  }, [rightAmount, rightAmount]);

  const handleDepositLiquidity = async () => {
    try {
      setLoading(true);

      const address = await getPair(
        swapTokens[0].address,
        swapTokens[1].address,
        venomProvider as ProviderRpcClient
      );

      await depositLiquidity({
        provider: venomProvider as ProviderRpcClient,
        left_amount: amount.left_amount,
        right_root: swapTokens[1].address,
        left_root: swapTokens[0].address,
        right_amount: amount.right_amount,
        expected_lp_root: address as Address,
        owner: walletAddress as string,
      });

      toast({
        description: "Add liquidity successfully",
        status: "success",
      });
      onClose();
    } catch (error) {
      toast({
        description: "Add liquidity failed",
        status: "error",
      });
      console.log({ error });
    } finally {
      setLoading(false);
    }
  };

  const insufficientLeft =
    Number(amount.left_amount) > leftBalance
      ? `Insufficient ${swapTokens[0].symbol} balance`
      : "";

  const insufficientRight =
    Number(amount.right_amount) > rightBalance
      ? `Insufficient ${swapTokens[1].symbol} balance`
      : "";

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={{ base: "full", sm: "md" }}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{t("add_liquidity")}</ModalHeader>
        <ModalCloseButton />
        <ModalBody maxH="670px">
          <Stack spacing={4}>
            <Flex
              gap="12px"
              flexDir={{ base: "column", lg: "row" }}
              justify="center"
            >
              <TokenPair
                swapTokens={swapTokens}
                onChangeSwapTokens={onChangeSwapTokens}
                amount={amount}
                setAmount={setAmount}
                // rightRootAmount={rightRootAmount}
              />
              {/* <SetPriceRange /> */}
            </Flex>
          </Stack>
        </ModalBody>

        <ModalFooter>
          <XButton
            rightIcon={
              <Icon
                as={ArrowRight}
                display={
                  !insufficientLeft && !insufficientRight ? "block" : "none"
                }
              />
            }
            size="md"
            w="fit-content"
            onClick={handleDepositLiquidity}
            isLoading={loading}
            isDisabled={!!insufficientLeft || !!insufficientRight}
          >
            {t(insufficientLeft || insufficientRight || "add_liquidity")}
          </XButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
