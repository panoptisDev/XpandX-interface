import { createIcon } from "@chakra-ui/react";

export const ArrowRight = createIcon({
  displayName: "ArrowRight",
  viewBox: "0 0 14 14",
  defaultProps: {
    fill: "none",
    color: "white",
  },
  path: (
    <>
      <path
        d="M2.1875 7H11.8125"
        stroke="#18181B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.875 3.0625L11.8125 7L7.875 10.9375"
        stroke="#18181B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});
