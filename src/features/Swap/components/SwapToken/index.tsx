import { Box, Stack, Text, StackProps, useToast } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import _ from "lodash";
import { Address } from "everscale-inpage-provider";
import { useQueryClient } from "@tanstack/react-query";

import { ConnectWallet, InputSwapToken } from "@/components";
import { SwapIcon } from "@/icons";
import { useSwap } from "@/store/swap";
import { useConnectWallet } from "@/store/wallet";
import { useCoinPrice } from "@/hooks";
import { exchange } from "@/utils/contracts/dexpair";
import {
  deployDexAccount,
  getExpectedAccountAddress,
  getWallets,
  addPair,
  withdraw,
} from "@/utils/contracts/dexroot";
import { transfer, deployWallet } from "@/utils/contracts/token";
import { useTokenData } from "@/apis/coin";
import { QueryKeysEnum } from "@/typings/query-key";

interface Props extends StackProps {}

export const SwapToken = ({ ...rest }: Props) => {
  const { t } = useTranslation();
  const toast = useToast();
  const queryClient = useQueryClient();

  const swapTokens = useSwap((state) => state.swapTokens);
  const amount = useSwap((state) => state.amount);
  const reverseTokens = useSwap((state) => state.reverseTokens);
  const setAmount = useSwap((state) => state.setAmount);
  const onChangeSwapTokens = useSwap((state) => state.onChangeSwapTokens);
  const swapInfo = useSwap((state) => state.swapInfo);
  const setLoading = useSwap((state) => state.setLoading);
  const address = useConnectWallet((state) => state.address);
  const venomProvider = useConnectWallet((state) => state.venomProvider);

  const leftRootPrice = useCoinPrice(swapTokens[0].symbol);
  const rightRootPrice = useCoinPrice(swapTokens[1].symbol);
  const rightRootAmount = (leftRootPrice / rightRootPrice) * _.toNumber(amount);

  const { data } = useTokenData();
  const deployedTokenAddress = _.find(
    data,
    (c) => c.address === swapTokens[0].address
  )?.deployedAddress;

  const handleDeployToken = async () => {
    await deployWallet(swapTokens[0].address, address!, venomProvider!);
    await deployWallet(swapTokens[1].address, address!, venomProvider!);
  };

  const handleTransferToken = async (dexAccount?: Address) => {
    if (!swapInfo || !address || !venomProvider || !deployedTokenAddress)
      return;

    await handleDeployToken();
    await deployDexAccount(address, venomProvider);

    if (dexAccount) {
      const wallets = await getWallets(dexAccount, venomProvider);

      if (_.size(wallets) === 0) {
        await addPair(
          swapTokens[0].address,
          swapTokens[1].address,
          dexAccount,
          address,
          venomProvider
        );
      }
      await transfer({
        amount: swapInfo.spentAmount,
        address: deployedTokenAddress.toString(),
        recipient: dexAccount,
        provider: venomProvider,
        walletAddress: address,
        deployWalletValue: _.size(wallets) > 0 ? "0" : undefined,
      });
    }
  };

  const handleSwapToken = async () => {
    try {
      if (!swapInfo || !address || !venomProvider || !deployedTokenAddress)
        return;
      setLoading(true);

      const dexAccount = await getExpectedAccountAddress(
        address,
        venomProvider
      );

      await handleTransferToken(dexAccount);
      await exchange({
        dexAccountAddress: dexAccount as Address,
        spent_amount: swapInfo.spentAmount,
        spent_token_root: swapInfo.spentToken,
        receive_token_root: swapInfo.receiveToken,
        send_gas_to: address,
        expected_amount: swapInfo?.expectedAmountAsNumber,
        provider: venomProvider,
      });
      await withdraw(
        swapInfo.spentAmount,
        swapTokens[1].address,
        address,
        dexAccount as Address,
        venomProvider
      );
      await queryClient.resetQueries([QueryKeysEnum.GET_COIN_BALANCES]);
      toast({
        description: "Swap successfully",
        status: "success",
      });
    } catch (err) {
      toast({
        description: "Swap failed",
        status: "error",
      });
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Stack zIndex="0" w={{ base: "335px", sm: "500px", lg: "408px" }} {...rest}>
      <Box position="relative">
        <Box
          bgColor="text.700"
          borderBottom="1px solid #18181B"
          rounded="14px 14px 0 0"
          p="16px"
        >
          <Text fontWeight="bold">{t("swap")}</Text>
        </Box>
        <InputSwapToken
          hideRate
          borderRadius="0 0 14px 14px"
          border="none"
          bgColor="text.700"
          pb="32px"
          symbol={swapTokens[0].symbol}
          address={swapTokens[0].address}
          selectEnabled={swapTokens[0].symbol !== "USDT"}
          onChangeCoin={(coin) => onChangeSwapTokens([coin, swapTokens[1]])}
          disabledSelectTokens={[swapTokens[1].symbol]}
          inputProps={{
            value: amount,
            onChange: (val) => setAmount(val),
          }}
        />
        <Stack
          bg="sec.1"
          w="44px"
          h="44px"
          rounded="50%"
          align="center"
          justify="center"
          pos="absolute"
          bottom="0"
          left="50%"
          transform="translate(-50%, 50%)"
          cursor="pointer"
          onClick={reverseTokens}
        >
          <SwapIcon fontSize="24px" />
        </Stack>
      </Box>

      <Box borderRadius="14px" bgColor="text.700" mt="1.2" pt="16px">
        <InputSwapToken
          hideRate
          border="none"
          symbol={swapTokens[1].symbol}
          address={swapTokens[1].address}
          selectEnabled={swapTokens[1].symbol !== "USDT"}
          onChangeCoin={(coin) => onChangeSwapTokens([swapTokens[0], coin])}
          disabledSelectTokens={[swapTokens[0].symbol]}
          inputProps={{
            value: amount && rightRootAmount,
            userSelect: "none",
            pointerEvents: "none",
          }}
        />
        <Box p="0 16px 16px">
          <ConnectWallet type="inApp" onSwap={handleSwapToken} />
        </Box>
      </Box>
    </Stack>
  );
};
