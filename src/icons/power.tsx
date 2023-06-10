import { createIcon } from "@chakra-ui/react";

export const PowerIcon = createIcon({
  displayName: "PowerIcon",
  viewBox: "0 0 20 20",
  defaultProps: {
    fill: "none",
    color: "white",
  },
  path: (
    <>
      <path
        d="M10 3.75V9.6875"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.75 4.23438C14.9922 5.04277 15.9399 6.23092 16.4518 7.62174C16.9638 9.01256 17.0126 10.5316 16.5909 11.9524C16.1693 13.3732 15.2999 14.6198 14.1121 15.5062C12.9244 16.3927 11.4821 16.8716 10 16.8716C8.51795 16.8716 7.07557 16.3927 5.88786 15.5062C4.70014 14.6198 3.83068 13.3732 3.40907 11.9524C2.98745 10.5316 3.03625 9.01256 3.5482 7.62174C4.06015 6.23092 5.00783 5.04277 6.25 4.23438"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});
