import { BigNumberish, ethers } from "ethers";

export const bigNumberAsFloat = (
  value: ethers.BigNumber,
  unit: string | BigNumberish
): number => {
  return parseFloat(ethers.utils.formatUnits(value, unit));
};
