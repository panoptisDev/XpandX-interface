import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
} from "@chakra-ui/react";

import { ArrowRight, ChevronDownIcon, SettingIcon } from "@/icons";
import { XLink } from "@/ui-kit";
import { useTranslation } from "next-i18next";
import Image from "next/image";

const NAVIGATION = [
  {
    title: "swap",
    href: "/",
  },
  {
    title: "tokens",
    href: "/tokens",
  },
  {
    title: "pools",
    href: "/pools",
  },
];

export const Header = () => {
  const { t } = useTranslation();

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
    >
      <Stack direction="row" align="center">
        <Box mr="50px">
          <Image src="/logo.svg" width={75.17} height={20} alt="Swap logo" />
        </Box>

        <Stack spacing="24px" direction="row" fontSize="sm">
          {NAVIGATION.map((item, idx) => (
            <XLink href={item.href} key={idx}>
              {t(item.title)}
            </XLink>
          ))}
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton
                  // isActive={false}
                  as={Text}
                  cursor="pointer"
                >
                  More <ChevronDownIcon />
                </MenuButton>
                {/* <MenuList>
                  <MenuItem>Download</MenuItem>
                  <MenuItem onClick={() => alert("Kagebunshin")}>
                    Create a Copy
                  </MenuItem>
                </MenuList> */}
              </>
            )}
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

        <Button p="3px 3px 3px 14px">
          {t('connect_wallet')}
          <Stack
            w={26}
            h={26}
            bg="white"
            rounded="50%"
            ml={2}
            align="center"
            justify="center"
          >
            <ArrowRight />
          </Stack>
        </Button>
      </Stack>
    </Stack>
  );
};
