import { XImage } from "@/ui-kit";
import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import _ from "lodash";

import { COINS } from "@/constants/coin";
import { Symbol } from "@/typings/coin";
import { SelectTokenModal } from "@/components";
import { ChevronDownIcon } from "@/icons";

interface Props {
  symbol: Symbol;
  selectEnabled?: boolean;
}

export const SelectToken = ({ symbol, selectEnabled }: Props) => {
  const coin = _.find(COINS, (c) => c.symbol === symbol);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenSelectTokenModal = () => {
    if (!selectEnabled) return;
    setIsOpenModal(true);
  };

  return (
    <Flex
      p="2px"
      borderRadius="50px"
      bg="text.900"
      w="76px"
      align="center"
      onClick={handleOpenSelectTokenModal}
    >
      <Box w="20px" h="20px" position="relative" flexShrink="0" mr="6px">
        <XImage src={coin?.img} alt={coin?.name} layout="fill" />
      </Box>
      <Text fontSize="xs" color="text.50" lineHeight="160%">
        {coin?.symbol}
      </Text>
      {selectEnabled && <ChevronDownIcon fontSize="12px" ml="0" />}
      <SelectTokenModal
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
      />
    </Flex>
  );
};
