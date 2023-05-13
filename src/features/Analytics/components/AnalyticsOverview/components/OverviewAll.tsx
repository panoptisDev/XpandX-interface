import { TrendDownIcon, TrendUpIcon } from "@/icons";
import { Divider, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

export const OverviewAll = () => {
  const { t } = useTranslation();

  return (
    <Stack spacing="11px" p="12px 16px" bg="white" borderRadius="14px">
      <Stack spacing="4px">
        <Text color="text.500" fontSize="sm">
          {t("volume24h")}
        </Text>
        <Flex gap="8px" align="center">
          <Text fontSize="lg" color="text.900" fontWeight="bold">
            $720.50M
          </Text>
          <Flex
            bg="#FF796C"
            borderRadius="50px"
            justify="center"
            align="center"
            gap="4px"
            p="2px 8px"
          >
            <Icon as={TrendDownIcon} w="16px" h="16px" color="text.0" />
            <Text>1.65%</Text>
          </Flex>
        </Flex>
      </Stack>

      <Divider borderStyle="dashed" />

      <Stack spacing="4px">
        <Text color="text.500" fontSize="sm">
          {t("fees24h")}
        </Text>
        <Flex gap="8px" align="center">
          <Text fontSize="lg" color="text.900" fontWeight="bold">
            $1.77M
          </Text>
          <Flex
            bg="#A7F984"
            borderRadius="50px"
            justify="center"
            align="center"
            gap="4px"
            p="2px 8px"
            color="text.900"
          >
            <Icon as={TrendUpIcon} w="16px" h="16px" />
            <Text>1.65%</Text>
          </Flex>
        </Flex>
      </Stack>

      <Divider borderStyle="dashed" />

      <Stack spacing="4px">
        <Text color="text.500" fontSize="sm">
          {t("TVL")}
        </Text>
        <Flex gap="8px" align="center">
          <Text fontSize="lg" color="text.900" fontWeight="bold">
            $3.19B
          </Text>
          <Flex
            bg="#FF796C"
            borderRadius="50px"
            justify="center"
            align="center"
            gap="4px"
            p="2px 8px"
          >
            <Icon as={TrendDownIcon} w="16px" h="16px" color="text.0" />
            <Text>1.65%</Text>
          </Flex>
        </Flex>
      </Stack>
    </Stack>
  );
};
