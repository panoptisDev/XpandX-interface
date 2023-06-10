import { createIcon } from "@chakra-ui/react";

export const BarIcon = createIcon({
  displayName: "BarIcon",
  viewBox: "0 0 28 28",
  defaultProps: {
    fill: "none",
    color: "white",
  },
  path: (
    <>
      <path
        d="M4.375 14H23.625"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.375 7H23.625"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.375 21H23.625"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});
