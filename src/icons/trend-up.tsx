import { createIcon } from "@chakra-ui/react";

export const TrendUpIcon = createIcon({
  displayName: "TrendUpIcon",
  viewBox: "0 0 20 20",
  defaultProps: {
    fill: "none",
    color: "white",
  },
  path: (
    <>
      <path
        d="M18.125 4.37511L10.625 11.8751L7.5 8.75011L1.875 14.3751"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.125 9.37511V4.37511H13.125"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});
