import {
  Box,
  Flex,
  Grid,
  GridItem,
  Text,
  Stack,
  OrderedList,
  ListItem,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

import {
  StarIcon,
  FolderStarIcon,
  CalendarCheckIcon,
  CalendarIcon,
} from "@/icons";
import { BoxInfoV2, TokenClaim } from "./";
import { XButton, XCard } from "@/ui-kit";

export const DetailBody = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <Grid
        mt="24px"
        gap="14px"
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
      >
        <BoxInfoV2 name="whitelist_stage" value="200" icon={StarIcon} />
        <BoxInfoV2 name="star_date" value="9/4/2023" icon={CalendarIcon} />
        <BoxInfoV2 name="end_date" value="18/4/2023" icon={CalendarCheckIcon} />
        <BoxInfoV2 name="distribution_text" value="0%" icon={FolderStarIcon} />
      </Grid>

      <XButton
        fontWeight="bold"
        maxW="180px"
        m="24px auto"
        h="46px"
        fontSize="lg"
      >
        {t("join")}
      </XButton>

      <Grid
        gap="14px"
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
      >
        <GridItem colSpan={{ base: 1, lg: 3 }}>
          <TokenClaim />
        </GridItem>

        <GridItem colSpan={1}>
          <XCard gap="14px" color="text.400" flex="1" h="100%">
            <Text mb="6px" fontWeight="bold" fontSize="lg" color="text.50">
              {t("how_price_is_determined")}
            </Text>
            <Text>{t("how_price_is_determined_content_1")}</Text>
            <Text>{t("how_price_is_determined_content_2")}</Text>
            <Text>{t("how_price_is_determined_content_3")}</Text>
            <Text>{t("how_price_is_determined_content_4")}</Text>
            <XButton variant="secondary" h="42px" fontWeight="bold">
              Total $ raised / 50,000,000
            </XButton>
          </XCard>
        </GridItem>

        <GridItem colSpan={1}>
          <XCard gap="14px" color="text.400" flex="1" h="100%">
            <Text mb="6px" fontWeight="bold" fontSize="lg" color="text.50">
              {t("three_stages_sale")}
            </Text>
            <Text>{t("three_stages_sale_content_1")}</Text>
            <OrderedList>
              <ListItem mb="14px">{t("three_stages_sale_content_2")}</ListItem>
              <ListItem mb="14px">{t("three_stages_sale_content_3")}</ListItem>
              <ListItem>{t("three_stages_sale_content_4")}</ListItem>
            </OrderedList>
          </XCard>
        </GridItem>

        <GridItem colSpan={1}>
          <XCard gap="14px" color="text.400" flex="1" h="100%">
            <Text mb="6px" fontWeight="bold" fontSize="lg" color="text.50">
              {t("claiming_process")}
            </Text>
            <Text>{t("claiming_process_content_1")}</Text>
            <Text>{t("claiming_process_content_2")}</Text>
            <Text>{t("claiming_process_content_3")}</Text>
          </XCard>
        </GridItem>
      </Grid>
    </Box>
  );
};
