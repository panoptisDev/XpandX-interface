import { ArrowRight, LightIcon, PlusIcon, WalletIcon } from "@/icons";
import { ChevronDownIcon } from "@/icons";
import { SettingIcon } from "@/icons";
import { Box } from "@chakra-ui/react";
import React from "react";

const Icons = () => {
  return (
    <Box>
      <SettingIcon />
      <ArrowRight />
      <ChevronDownIcon />
      <PlusIcon />
      <LightIcon />
      <WalletIcon />
    </Box>
  );
};

export default Icons;
