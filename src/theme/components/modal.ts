import type { ComponentStyleConfig } from "@chakra-ui/theme";

const Modal: ComponentStyleConfig = {
  baseStyle: {
    dialog: {
      borderRadius: "14px",
      background: "text.700",
    },
    header: {
      textAlign: "center",
      boxShadow: "800",
      padding: "16px",
    },
    body: {
      padding: "16px",
      maxHeight: "600px",
      overflowX: "auto",
    },
    footer: {
      padding: "16px",
      justifyContent: "center",
    },
    overlay: {
      backdropFilter: "blur(10px)",
      background: "rgba(33, 32, 40, 0.5)",
    },
  },
};

export default Modal;
