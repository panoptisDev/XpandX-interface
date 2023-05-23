import { createIcon } from "@chakra-ui/react";

export const CloseIcon = createIcon({
  displayName: "CloseIcon",
  viewBox: "0 0 16 16",
  defaultProps: {
    fill: "none",
  },
  path: (
    <>
      <path
        d="M14.4168 1.58399L1.5835 14.4173M14.4168 14.4173L1.5835 1.58398"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </>
  ),
});
