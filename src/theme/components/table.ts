import type { ComponentStyleConfig } from "@chakra-ui/theme";

const Table: ComponentStyleConfig = {
  baseStyle: {
    td: {
      maxW: "125px",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
  },
  sizes: {
    xs: {
      table: {
        border: "none",

        tr: {
          h: "44px",
        },

        th: {
          whiteSpace: "normal",
          maxW: "150px",
          p: "14px 0px",
          pr: "30px",
          borderColor: "rgba(63, 63, 70, 0.4)",
          color: "text.500",
          fontSize: "12px",
          textTransform: "uppercase",
          // borderRadius: "14px",

          _first: {
            paddingLeft: "24px",
          },
          _last: {
            paddingRight: "24px",
          },
        },
      },

      tbody: {
        tr: {
          td: {
            border: "none",
            _first: {
              paddingLeft: "24px",
            },
            _last: {
              paddingRight: "24px",
            },
          },

          "&:nth-of-type(2n+1)": {
            td: {
              bg: "blackAlpha.50",
            },
          },
        },
      },

      th: {
        fontWeight: "bold",
        textTransform: "inherit",
        fontSize: "sm",
        color: "text.100",
        lineHeight: "160%",
      },

      td: {
        fontSize: "sm",
        color: "text.50",
        lineHeight: "160%",
        h: "52px",
      },
    },
  },
  defaultProps: {
    size: "xs",
    variant: "unstyled",
  },
};

export default Table;
