import {
  ArrowRight,
  GearSixIcon,
  LayoutIcon,
  LightIcon,
  PlusIcon,
  PowerIcon,
  RefreshIcon,
  SlidersIcon,
  SquaresFourIcon,
  TrendDownIcon,
  TrendUpIcon,
  WalletIcon,
} from "@/icons";
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
      <TrendDownIcon />
      <TrendUpIcon />
      <RefreshIcon />
      <GearSixIcon />
      <PowerIcon />
      <LayoutIcon />
      <SquaresFourIcon />
      <SlidersIcon />
    </Box>
  );
};

export default Icons;
