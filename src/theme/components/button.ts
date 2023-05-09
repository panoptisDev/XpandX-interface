import type { ComponentStyleConfig } from "@chakra-ui/theme";

const Button: ComponentStyleConfig = {
  baseStyle: {
    w: "100%",
    h: "32px",
    height: "32px",
    borderRadius: "50px",
    fontSize: "sm",
    fontWeight: "normal",
    lineHeight: 1,
    display: "flex",
    align: "center",
    transition: "0.2s",

    _hover: {
      filter: "brightness(0.95)",
    },

    _disabled: {
      opacity: 0.7,
    },
  },

  variants: {
    primary: {
      bg: "sec.1",
      background: "sec.1",
      color: "text.900",

      _hover: {
        bg: "#D1D359",
      },

      _active: {
        filter: "#C0C244",
      },

      _disabled: {
        opacity: 0.7,
      },
    },
    secondary: {
      bg: "sec.2",
      background: "sec.2",
      color: "text.50",

      _active: {
        filter: "brightness(0.9)",
      },

      _disabled: {
        opacity: 0.7,
      },
    },
  },

  sizes: {
    sm: {
      h: "32px",
    },

    md: {
      h: "44px",
    },
  },

  // The default variant value
  defaultProps: {
    variant: "primary",
  },
};

export default Button;
