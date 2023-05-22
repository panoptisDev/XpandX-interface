import {
  Box,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import { NAVIGATION_MORE, MORE } from "@/constants/navigation";
import { ChevronDownIcon } from "@/icons";

export const MoreDropdown = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { asPath, pathname } = router;

  return (
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
  );
};
