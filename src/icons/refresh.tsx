import { createIcon } from "@chakra-ui/react";

export const RefreshIcon = createIcon({
  displayName: "RefreshIcon",
  viewBox: "0 0 18 18",
  defaultProps: {
    fill: "none",
    color: "white",
  },
  path: (
    <>
      <path
        d="M2.76969 5.4C4.02064 3.24792 6.35876 1.8 9.0367 1.8C12.073 1.8 14.6724 3.66136 15.7457 6.3M4.96707 6.3H1.34961V2.7M15.2295 12.6C13.9786 14.7521 11.6405 16.2 8.96252 16.2C5.92623 16.2 3.32678 14.3386 2.25351 11.7M13.0322 11.7H16.6496V15.3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});
