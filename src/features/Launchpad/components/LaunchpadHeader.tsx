import { Flex, Text, Box } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { XInput } from "@/ui-kit";
import { SearchIcon } from "@/icons";
import { BoxInfo } from "./BoxInfo";

export const LaunchpadHeader = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <Flex w="100%" align="center" justify="space-between">
        <Box>
          <Text color="text.50" fontSize="2xl" fontWeight="bold">
            {t("launchpad")}
          </Text>
          <Text color="text.500">{t("custom_built_in_launchpad")}</Text>
        </Box>

        <Flex align="center" justify="space-between" gap="8px">
          <BoxInfo icon="/icons/launchpad/trophy.svg" value="$1,3971.39" />
          <BoxInfo icon="/icons/launchpad/coin.svg" value="$84.298M TVL" />
        </Flex>
      </Flex>
      <XInput
        leftIcon={<SearchIcon />}
        inputGroupProps={{ mt: 2, maxW: "408px" }}
        placeholder={t("search") || ""}
      />
    </Box>
  );
};
