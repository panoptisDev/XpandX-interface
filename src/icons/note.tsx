import { createIcon } from "@chakra-ui/react";

export const NoteIcon = createIcon({
  displayName: "NoteIcon",
  viewBox: "0 0 14 14",
  defaultProps: {
    fill: "none",
    color: "white",
  },
  path: (
    <>
      <path
        d="M7 12.25C9.8995 12.25 12.25 9.8995 12.25 7C12.25 4.10051 9.8995 1.75 7 1.75C4.10051 1.75 1.75 4.10051 1.75 7C1.75 9.8995 4.10051 12.25 7 12.25Z"
        stroke="#5C97D6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5625 6.5625H7V9.625H7.4375"
        stroke="#5C97D6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.89062 5.14062C7.19266 5.14062 7.4375 4.89578 7.4375 4.59375C7.4375 4.29172 7.19266 4.04688 6.89062 4.04688C6.58859 4.04688 6.34375 4.29172 6.34375 4.59375C6.34375 4.89578 6.58859 5.14062 6.89062 5.14062Z"
        fill="#5C97D6"
      />
    </>
  ),
});
