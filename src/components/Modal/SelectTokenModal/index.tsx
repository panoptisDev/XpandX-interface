import { XInput } from "@/ui-kit";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Box,
  Text,
  Image,
  Icon,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import _ from "lodash";
import { useState } from "react";

import { SearchIcon, CheckIcon } from "@/icons";
import { useAvailableCoins } from "@/hooks";
import { Coin } from "@/typings/coin";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  selectedSymbol?: string;
  onChange?: (coin: Coin) => void;
  disabledSelectTokens?: string[];
}

export const SelectTokenModal = ({
  isOpen,
  onClose,
  selectedSymbol,
  onChange,
  disabledSelectTokens,
}: IProps) => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState("");
  const availableCoins = useAvailableCoins();

  const coins = _.filter(
    availableCoins,
    (c) =>
      (_.includes(_.toLower(c.name), filter) ||
        _.includes(_.toLower(c.symbol), filter)) &&
      !_.includes(disabledSelectTokens, c.symbol)
  );

  const handleSelectToken = (coin: Coin) => {
    onChange?.(coin);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalOverlay />
      <ModalContent mx="20px">
        <ModalHeader textAlign="left">{t("select_token")}</ModalHeader>
        <ModalCloseButton />
        <ModalBody p="0 0 10px">
          <Box px="16px">
            <XInput
              leftIcon={<SearchIcon />}
              mb={2}
              placeholder={t("search_token") || ""}
              onChange={(e) => setFilter(_.toLower(e.target.value))}
            />
          </Box>
          <Box>
            {coins.map((item) => (
              <Stack
                direction="row"
                align="center"
                justify="space-between"
                key={`token-${item.symbol}`}
                transition="0.2s"
                p="8px 16px"
                _hover={{
                  bgColor: "text.600",
                }}
                onClick={() => handleSelectToken(item)}
              >
                <Stack direction="row" align="center">
                  <Image w="32px" h="32px" src={item.img} alt={item.symbol} />
                  <Text fontSize="sm">{item.name}</Text>
                  <Text fontSize="sm" color="text.500">
                    {item.symbol}
                  </Text>
                </Stack>

                <Stack>
                  {selectedSymbol === item.symbol && (
                    <Stack
                      bg="sec.1"
                      w="20px"
                      h="20px"
                      align="center"
                      justify="center"
                      rounded="50%"
                      flexShrink="0"
                    >
                      <Icon as={CheckIcon} color="#181818" />
                    </Stack>
                  )}
                </Stack>
              </Stack>
            ))}
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
