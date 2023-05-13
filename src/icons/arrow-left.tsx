import { createIcon } from "@chakra-ui/react";

export const ArrowLeftIcon = createIcon({
  displayName: "ArrowLeftIcon",
  viewBox: "0 0 20 20",
  defaultProps: {
    fill: "none",
    color: "#71717A",
  },
  path: (
    <>
      <path
        d="M16.875 10H3.125"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.75 4.375L3.125 10L8.75 15.625"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});
