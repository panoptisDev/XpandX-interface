import {
  Box,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Flex,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import { NAVIGATION, NAVIGATION_MORE } from "@/constants/navigation";
import { BarIcon } from "@/icons";

export const MenuDropdown = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { asPath } = router;

  return (
    <Menu>
      <MenuButton
        as={Flex}
        cursor="pointer"
        bg="white"
        w="34px"
        h="34px"
        rounded="50%"
        sx={{
          span: {
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
        }}
      >
        <BarIcon color="text.900" />
      </MenuButton>
      <MenuList ml="-180px">
        {[...NAVIGATION, ...NAVIGATION_MORE].map((item, idx) => {
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
