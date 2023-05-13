import { Card, CardProps } from "@chakra-ui/react";

interface IXCardProps extends CardProps {}

export const XCard = ({ children, ...props }: IXCardProps) => {
  return (
    <Card
      bg="transparent"
      border="1px solid"
      borderColor="text.700"
      rounded="14px"
      p="20px"
      {...props}
    >
      {children}
    </Card>
  );
};
