import { createIcon } from "@chakra-ui/react";

export const CheckBrokenIcon = createIcon({
  displayName: "CheckBrokenIcon",
  viewBox: "0 0 20 20",
  defaultProps: {
    fill: "none",
  },
  path: (
    <>
      <path
        d="M18 10.0001C18 14.4184 14.4183 18.0001 10 18.0001C5.58172 18.0001 2 14.4184 2 10.0001C2 5.58183 5.58172 2.00011 10 2.00011C11.2552 2.00011 12.4428 2.28916 13.5 2.80434M16.5 5.00011L9.5 12.0001L7.5 10.0001"
        stroke="#E2E46F"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});
