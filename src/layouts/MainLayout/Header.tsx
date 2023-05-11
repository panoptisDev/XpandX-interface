import {
  Box,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
} from "@chakra-ui/react";

import { ArrowRight, ChevronDownIcon, SettingIcon } from "@/icons";
import { XButton, XLink } from "@/ui-kit";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useRouter } from "next/router";

const NAVIGATION = [
  {
    title: "swap",
    href: "/",
    feature: "/swap",
  },
  {
    title: "tokens",
    href: "/tokens",
    feature: "/token",
  },
  {
    title: "pools",
    href: "/pools",
    feature: "/pools",
  },
];

const NAVIGATION_MORE = [
  {
    title: "referral",
    href: "/referral",
    feature: "/referral",
    isComingSoon: true,
  },
  {
    title: "analytics",
    href: "/analytics",
    feature: "/analytics",
    isComingSoon: false,
  },
  {
    title: "earning_dashboard",
    href: "/earning-dashboard",
    feature: "/earning-dashboard",
    isComingSoon: false,
  },
  {
    title: "launchpad",
    href: "/launchpad",
    feature: "/launchpad",
    isComingSoon: false,
  },
  {
    title: "dividend",
    href: "/dividend",
    feature: "/dividend",
    isComingSoon: false,
  },
];

const MORE = [
  "/referral",
  "/analytics",
  "/earning-dashboard",
  "/launchpad",
  "/dividend",
];

export const Header = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { asPath, pathname } = router;

  return (
    <Stack
      direction="row"
      h="56px"
      w="100%"
      p="12px 84px"
      align="center"
      justify="space-between"
      pos="fixed"
      top="0"
      bg="secondary.4"
      backdropFilter="blur(4px)"
    >
      <Stack direction="row" align="center">
        <Box mr="50px">
          <Image src="/logo.svg" width={75.17} height={20} alt="Swap logo" />
        </Box>

        <Stack spacing="24px" direction="row" fontSize="sm">
          {NAVIGATION.map((item, idx) => {
            const isActive = asPath.startsWith(item.feature);
            return (
              <XLink
                href={item.href}
                key={idx}
                color={isActive ? "text.50" : "text.400"}
                fontWeight={isActive ? "bold" : "normal"}
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
            >
              More ({t(pathname.split("/")[1])}) <ChevronDownIcon />
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
                    onClick={() => !item.isComingSoon && router.push(item.href)}
                    bg={isActive ? "sec.1" : "text.600"}
                    color={isActive ? "text.900" : "text.50"}
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
        <Stack
          w="32px"
          h="32px"
          align="center"
          justify="center"
          rounded="50%"
          bg="text.700"
          p="8px"
          flexShrink="0"
          cursor="pointer"
          _hover={{
            filter: "brightness(0.95)",
          }}
        >
          <SettingIcon />
        </Stack>

        <Stack
          align="center"
          justify="space-between"
          rounded="50px"
          bg="text.700"
          p="4px"
          h="32px"
          w="117px"
          direction="row"
          spacing={0}
          cursor="pointer"
          flexShrink="0"
          _hover={{
            filter: "brightness(0.95)",
          }}
        >
          <Image
            src="/icons/venom-icon.svg"
            width={26}
            height={26}
            alt="Venom"
          />
          <Text>Venom</Text>
          <ChevronDownIcon color="#FAFAFA" fontSize="24px" ml="-10px" />
        </Stack>

        <XButton p="3px 3px 3px 14px">
          {t("connect_wallet")}
          <Stack
            w={26}
            h={26}
            bg="white"
            rounded="50%"
            ml={2}
            align="center"
            justify="center"
          >
            <ArrowRight color="text.900" />
          </Stack>
        </XButton>
      </Stack>
    </Stack>
  );
};
