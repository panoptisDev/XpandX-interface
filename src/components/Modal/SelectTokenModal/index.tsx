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
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import _ from "lodash";

import { COINS } from "@/constants/coin";
import { SearchIcon } from "@/icons";
import { useState } from "react";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SelectTokenModal = ({ isOpen, onClose }: IProps) => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState("");

  const coins = _.filter(
    COINS,
    (c) =>
      _.includes(_.toLower(c.name), filter) ||
      _.includes(_.toLower(c.symbol), filter)
  );

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
                key={`token-${item.symbol}`}
                transition="0.2s"
                p="8px 16px"
                _hover={{
                  bgColor: "text.600",
                }}
              >
                <Image w="32px" h="32px" src={item.img} alt={item.symbol} />
                <Text fontSize="sm">{item.name}</Text>
                <Text fontSize="sm" color="text.500">
                  {item.symbol}
                </Text>
              </Stack>
            ))}
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
