import { Box } from "@chakra-ui/react";

import { Header } from "./Header";

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Box
      minH="100vh"
      bgAttachment="fixed"
      bgImage="url(/background.jpg)"
      bgSize="100vw 100vh"
    >
      <Box>
        <Header />
        <Box p="64px 84px" minH="100vh">
          {children}
        </Box>
      </Box>
    </Box>
  );
};
