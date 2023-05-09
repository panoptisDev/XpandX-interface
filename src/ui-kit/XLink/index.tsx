import { Link, LinkProps } from "@chakra-ui/react";
import NextLink from "next/link";

interface XLinkProps extends LinkProps {}

export const XLink = ({ href, children, ...rest }: XLinkProps) => {
  return (
    <Link as={NextLink} href={href} fontSize={{ base: "sm" }} {...rest}>
      {children}
    </Link>
  );
};
