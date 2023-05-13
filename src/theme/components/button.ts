import type { ComponentStyleConfig } from "@chakra-ui/theme";

const Button: ComponentStyleConfig = {
  baseStyle: {
    w: "100%",
    borderRadius: "50px",
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

    "primary-outline": {
      bg: "transparent",
      background: "transparent",
      color: "text.50",
      border: "1px solid",
      borderColor: "text.300",

      _hover: {
        borderColor: "text.900",
      },

      _active: {
        bg: "100",
      },

      _disabled: {
        opacity: 0.7,
      },
    },

    secondary: {
      bg: "text.700",
      background: "text.700",
      color: "sec.1",
      rounded: "10px",

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
      height: "32px",
      fontSize: "sm",
    },

    md: {
      h: "46px",
      height: "46px",
      fontSize: "md",
      fontWeight: "bold",
    },
  },

  // The default variant value
  defaultProps: {
    variant: "primary",
  },
};

export default Button;
