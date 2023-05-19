import {
  Box,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
} from "@chakra-ui/react";

import { ConnectWallet } from "@/components";
import { routes } from "@/constants/routes";
import { ChevronDownIcon } from "@/icons";
import { XLink } from "@/ui-kit";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useRouter } from "next/router";
import { Setting } from "./components";

const NAVIGATION = [
  {
    title: "swap",
    href: routes.Swap,
    feature: "/swap",
  },
  {
    title: "tokens",
    href: routes.Tokens,
    feature: "/token",
  },
  {
    title: "pools",
    href: routes.Pools,
    feature: "/pools",
  },
];

const NAVIGATION_MORE = [
  {
    title: "referral",
    href: routes.Referral,
    feature: "/referral",
    isComingSoon: true,
  },
  {
    title: "analytics",
    href: routes.Analytics,
    feature: "/analytics",
    isComingSoon: false,
  },
  {
    title: "earning_dashboard",
    href: routes.Earning,
    feature: "/earning-dashboard",
    isComingSoon: false,
  },
  {
    title: "launchpad",
    href: routes.Launchpad,
    feature: "/launchpad",
    isComingSoon: false,
  },
  {
    title: "dividend",
    href: routes.Dividend,
    feature: "/dividend",
    isComingSoon: false,
  },
];

const MORE = [
  routes.Referral,
  routes.Analytics,
  routes.Earning,
  routes.Launchpad,
  routes.Dividend,
] as string[];

export const Header = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { asPath, pathname } = router;

  return (
    <Stack
      direction="row"
      h="56px"
      w="100%"
      p="18px 84px"
      align="center"
      justify="space-between"
      pos="fixed"
      top="0"
      bg="secondary.4"
      backdropFilter="blur(4px)"
      zIndex="docked"
    >
      <Stack direction="row" align="center">
        <Box mr="50px">
          <Image src="/logo.svg" width={100} height={26} alt="Swap logo" />
        </Box>

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
          <Menu>
            <MenuButton
              // isActive={false}
              as={Text}
              cursor="pointer"
              color={MORE.includes(asPath) ? "text.50" : "text.400"}
              fontWeight={MORE.includes(asPath) ? "bold" : "normal"}
              fontSize="md"
              p="8px 24px"
              borderRadius="12px"
              _hover={{
                bg: "#99a1bd14",
              }}
            >
              More {MORE.includes(asPath) && `(${t(pathname.split("/")[1])})`}{" "}
              <ChevronDownIcon />
            </MenuButton>
            <MenuList>
              {NAVIGATION_MORE.map((item, idx) => {
                const isActive = asPath.startsWith(item.feature);
                return (
                  <MenuItem
                    key={idx}
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    onClick={() => router.push(item.href)}
                    bg={isActive ? "sec.1" : "text.600"}
                    color={isActive ? "text.900" : "text.50"}
                    fontSize="md"
                  >
                    {t(item.title)}
                    {item.isComingSoon && (
                      <Box
                        bg="text.50"
                        borderRadius="5px"
                        p="2px 6px"
                        fontWeight="bold"
                        color="sec.3"
                        fontSize="xxs"
                      >
                        {t("coming_soon")}
                      </Box>
                    )}
                  </MenuItem>
                );
              })}
            </MenuList>
          </Menu>
        </Stack>
      </Stack>

      <Stack direction="row" align="center">
        <Setting />

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

        <ConnectWallet type="header" />
      </Stack>
    </Stack>
  );
};
