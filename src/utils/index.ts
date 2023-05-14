import { NextRouter } from "next/router";

export const getCurrentUnixTime = () => new Date().valueOf() / 1000;

export const handleBackRouter = (router: NextRouter, defaultURL = "") => {
  if (typeof window !== "undefined") {
    if (window.history.length > 1) {
      router.back();
    } else if (defaultURL) {
      router.push(defaultURL);
    }
  }
};

export function ellipseAddress(address = "", width = 3) {
  return `${address.slice(0, 6)}...${address.slice(-width)}`;
}
