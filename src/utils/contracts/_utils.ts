import { BigNumberish, ethers } from "ethers";

export const bigNumberAsFloat = (
  value: ethers.BigNumber,
  unit: string | BigNumberish
): number => {
  return parseFloat(ethers.utils.formatUnits(value, unit));
};

export const floatAsBigNumber = (
  value: number,
  unit?: string | BigNumberish
): ethers.BigNumber => {
  return ethers.utils.parseUnits(`${value}`, unit);
};
