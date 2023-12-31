import { Container, ContainerProps } from "@chakra-ui/react";
import React from "react";

interface IProps extends ContainerProps {}

export const XContainer = ({ children }: IProps) => {
  return (
    <Container
      maxW={{
        lg: "container.lg",
        xl: "container.xl",
        "2xl": "container.2xl",
      }}
    >
      {children}
    </Container>
  );
};
