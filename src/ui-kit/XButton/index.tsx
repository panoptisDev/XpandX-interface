import { Button, ButtonProps } from "@chakra-ui/react";

interface IXButtonProps extends ButtonProps {}

export const XButton = ({ children, ...props }: IXButtonProps) => {
  return (
    <Button size={{ base: "sm" }} {...props}>
      {children}
    </Button>
  );
};
