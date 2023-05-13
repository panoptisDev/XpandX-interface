import { createIcon } from "@chakra-ui/react";

export const StackIcon = createIcon({
  displayName: "StackIcon",
  viewBox: "0 0 34 34",
  defaultProps: {
    fill: "none",
    color: "white",
  },
  path: (
    <>
      <path
        d="M4.25 23.375L17 30.8125L29.75 23.375"
        stroke="#E2E46F"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.25 17L17 24.4375L29.75 17"
        stroke="#E2E46F"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.25 10.625L17 18.0625L29.75 10.625L17 3.1875L4.25 10.625Z"
        stroke="#E2E46F"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});
