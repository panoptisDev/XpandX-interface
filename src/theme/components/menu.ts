import type { ComponentStyleConfig } from "@chakra-ui/theme";

const Menu: ComponentStyleConfig = {
  baseStyle: {
    list: {
      background: "text.600",
      color: "text.50",
      border: "none",
      borderRadius: '10px'
    },
    item: {
      background: "text.600",
      "&:hover": {
        background: "sec.1",
        color: "text.900",
      },
    },
  },
};

export default Menu;
