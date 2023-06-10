import { Box, Stack, Text, Hide, useMediaQuery } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Image from "next/image";

import { ConnectWallet } from "@/components";
import { NAVIGATION } from "@/constants/navigation";
import { ChevronDownIcon } from "@/icons";
import { XLink } from "@/ui-kit";
import { Setting, MenuDropdown, MoreDropdown, MenuModal } from "./components";
import breakpoints from '@/theme/foundations/breakpoints';

export const Header = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { asPath } = router;
  const [isLargerLg] = useMediaQuery(`(min-width: ${breakpoints.lg})`);
  const [isSmallerSm] = useMediaQuery(`(max-width: ${breakpoints.sm})`);


  return (
    <Stack
      direction="row"
      h="56px"
      w="100%"
      p={{ base: "20px", sm: "20px 40px", xl: "20px 84px" }}
      align="center"
      justify="space-between"
      pos="fixed"
      top="0"
      bg="secondary.4"
      backdropFilter="blur(4px)"
      zIndex="docked"
    >
      <Stack direction="row" align="center">
        <Hide below="sm">
          <Box mr="50px" width={100} height={26} pos="relative">
            <Image src="/logo.svg" layout="fill" alt="Swap logo" />
          </Box>
        </Hide>

        <Hide above="sm">
          <Box mr="50px" width={30} height={30} pos="relative">
            <Image src="/mobile-logo.svg" layout="fill" alt="XpandX" />
          </Box>
        </Hide>

        <Hide below="lg">
          <Stack spacing="0px" direction="row" fontSize="sm">
            {NAVIGATION.map((item, idx) => {
              const isActive = asPath.startsWith(item.feature);
              return (
                <XLink
                  href={item.href}
                  key={idx}
                  color={isActive ? "text.50" : "text.400"}
                  fontWeight={isActive ? "bold" : "normal"}
                  fontSize="md"
                  p="8px 24px"
                  borderRadius="10px"
                  _hover={{
                    bg: "#99a1bd14",
                  }}
                >
                  {t(item.title)}
                </XLink>
              );
            })}
            <MoreDropdown />
          </Stack>
        </Hide>
      </Stack>

      <Stack direction="row" align="center">
        <Hide below="sm">
          <Setting />
        </Hide>

        <Stack
          align="center"
          justify="space-between"
          rounded="50px"
          bg="text.700"
          p="4px"
          h="34px"
          w="117px"
          direction="row"
          spacing={0}
          cursor="pointer"
          flexShrink="0"
          _hover={{
            filter: "brightness(0.95)",
          }}
        >
          <Image src="/venom.svg" width={26} height={26} alt="Venom" />
          <Text>Venom</Text>
          <ChevronDownIcon color="#FAFAFA" fontSize="24px" ml="-10px" />
        </Stack>

        <Hide below="sm">
          <ConnectWallet type="header" />
        </Hide>

        {(!isLargerLg && !isSmallerSm) && <MenuDropdown />}

        <Hide above="sm">
          <MenuModal />
        </Hide>
      </Stack>
    </Stack>
  );
};
