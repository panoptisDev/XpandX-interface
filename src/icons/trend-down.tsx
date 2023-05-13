import { createIcon } from "@chakra-ui/react";

export const TrendDownIcon = createIcon({
  displayName: "TrendDownIcon",
  viewBox: "0 0 20 20",
  defaultProps: {
    fill: "none",
    color: "white",
  },
  path: (
    <>
      <path
        d="M18.125 15.6251L10.625 8.12511L7.5 11.2501L1.875 5.62511"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.125 10.6251V15.6251H13.125"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});
