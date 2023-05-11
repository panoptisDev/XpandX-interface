import { createIcon } from "@chakra-ui/react";

export const SearchIcon = createIcon({
  displayName: "SearchIcon",
  viewBox: "0 0 20 21",
  defaultProps: {
    fill: "none",
    color: "white",
  },
  path: (
    <>
      <path
        d="M14.1057 14.7L17 17.5M16.0667 10.0333C16.0667 13.6416 13.1416 16.5667 9.53333 16.5667C5.92507 16.5667 3 13.6416 3 10.0333C3 6.42507 5.92507 3.5 9.53333 3.5C13.1416 3.5 16.0667 6.42507 16.0667 10.0333Z"
        stroke="#FAFAFA"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </>
  ),
});
