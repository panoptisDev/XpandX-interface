import {
  Box,
  Flex,
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
  BankIcon,
  MoneyIcon,
  HandIcon,
  WalletIconV2,
} from "@/icons";
import { BoxInfoV2, BoxInfoV3 } from "./";
import { XImage, XButton, XCard } from "@/ui-kit";

export const DetailBody = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <Flex mt="24px" gap="14px">
        <BoxInfoV2 name="whitelist_stage" value="200" icon={StarIcon} />
        <BoxInfoV2 name="star_date" value="9/4/2023" icon={CalendarIcon} />
        <BoxInfoV2 name="end_date" value="18/4/2023" icon={CalendarCheckIcon} />
        <BoxInfoV2 name="distribution_text" value="0%" icon={FolderStarIcon} />
      </Flex>

      <XButton
        fontWeight="bold"
        maxW="180px"
        m="24px auto"
        h="46px"
        fontSize="lg"
      >
        {t("join")}
      </XButton>

      <Flex gap="12px">
        <Flex
          align="center"
          justify="center"
          bg="text.700"
          rounded="14px"
          flex="1"
          p="35px 20px"
          direction="column"
        >
          <Text fontWeight="bold" fontSize="2xl">
            {t("claim")}
          </Text>
          <Stack direction="row">
            <XImage
              src="/icons/launchpad/coin.svg"
              width={40}
              height={40}
              alt=""
            />
            <Text fontSize="3xxl" color="text.50">
              5,000,000
            </Text>
            <Text fontSize="3xxl" color="text.500" textTransform="lowercase">
              {t("tokens")}
            </Text>
          </Stack>
        </Flex>

        <Flex
          align="center"
          justify="space-between"
          bg="text.700"
          rounded="14px"
          flex="1"
          p="22px 20px"
          flexWrap="wrap"
          gap="20px"
        >
          <BoxInfoV3
            name="total_raised_hardcap"
            value="500 / 500 ETH"
            icon={BankIcon}
          />
          <BoxInfoV3 name="lex_price" value="$0.02" icon={MoneyIcon} />
          <BoxInfoV3 name="circ_marketcap" value="$1.24M" icon={HandIcon} />
          <BoxInfoV3 name="fdv" value="$18.44M" icon={WalletIconV2} />
        </Flex>
      </Flex>

      <Flex gap="14px" mt="24px">
        <XCard gap="14px" color="text.400" flex="1">
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

        <XCard gap="14px" color="text.400" flex="1">
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

        <XCard gap="14px" color="text.400" flex="1">
          <Text mb="6px" fontWeight="bold" fontSize="lg" color="text.50">
            {t("claiming_process")}
          </Text>
          <Text>{t("claiming_process_content_1")}</Text>
          <Text>{t("claiming_process_content_2")}</Text>
          <Text>{t("claiming_process_content_3")}</Text>
        </XCard>
      </Flex>
    </Box>
  );
};
