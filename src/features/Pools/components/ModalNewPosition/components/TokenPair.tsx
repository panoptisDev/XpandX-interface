import { InputSwapToken } from "@/components";
import { Coin } from "@/typings/coin";
import { Stack, Text } from "@chakra-ui/react";
import _ from "lodash";
import { useTranslation } from "next-i18next";

type TAmount = { left_amount: string; right_amount: string };
interface ITokenPair {
  swapTokens: Coin[];
  onChangeSwapTokens: (tokens: Coin[]) => void;
  amount: TAmount;
  setAmount: (value: TAmount) => void;
}

export const TokenPair = ({
  swapTokens,
  onChangeSwapTokens,
  amount,
  setAmount,
}: ITokenPair) => {
  const { t } = useTranslation();

  return (
    <Stack
      spacing={3}
      w="100%"
      border="1px solid"
      borderColor="text.600"
      borderRadius="14px"
      p="16px"
      maxW="350px"
    >
      <Text fontWeight="bold">{t("deposit_amounts")}</Text>

      <InputSwapToken
        hideRate
        symbol={swapTokens[0].symbol}
        address={swapTokens[0].address}
        selectEnabled={swapTokens[0].symbol !== "USDT"}
        onChangeCoin={(coin) => onChangeSwapTokens([coin, swapTokens[1]])}
        disabledSelectTokens={[swapTokens[1].symbol]}
        inputProps={{
          value: amount.left_amount,
          onChange: (val) => setAmount({ ...amount, left_amount: val }),
        }}
        border="1px solid"
        borderColor="text.600"
        borderRadius="14px"
      />
      <InputSwapToken
        hideRate
        symbol={swapTokens[1].symbol}
        address={swapTokens[1].address}
        selectEnabled={swapTokens[1].symbol !== "USDT"}
        onChangeCoin={(coin) => onChangeSwapTokens([swapTokens[0], coin])}
        disabledSelectTokens={[swapTokens[0].symbol]}
        inputProps={{
          value: amount.right_amount,
          onChange: (val) => setAmount({ ...amount, right_amount: val }),
        }}
      />

      {/* <Flex
        p="18px"
        bg="text.600"
        borderRadius="14px"
        color="text.50"
        align="center"
        justify="space-between"
      >
        <Box>
          <Text fontSize="sm">{t("fee_tier", { fee: 0.3 })}</Text>
          <Box fontSize="sm" bg="text.900" rounded="5px" p="2px 8px" mt="2px">
            65% {t("select")}
          </Box>
        </Box>
        <Text fontWeight="bold">
          <Button
            bg="text.500"
            h="36px"
            p="7px 18px"
            fontWeight="normal"
            color="text.50"
            _hover={{
              filter: "brightness(0.95)",
            }}
            _active={{
              filter: "brightness(0.9)",
            }}
          >
            <EditIcon mr="1" />
            Edit
          </Button>
        </Text>
      </Flex> */}
    </Stack>
  );
};
