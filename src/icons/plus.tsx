import { createIcon } from "@chakra-ui/react";

export const PlusIcon = createIcon({
  displayName: "PlusIcon",
  viewBox: "0 0 18 18",
  defaultProps: {
    fill: "none",
    color: "white",
  },
  path: (
    <>
      <path
        d="M8.99961 3.6L8.99961 14.4M14.3996 9L3.59961 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </>
  ),
});
