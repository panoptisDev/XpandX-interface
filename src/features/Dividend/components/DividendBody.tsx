import { Flex, Text, Stack, Box, Image, FlexProps } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import { XImage } from "@/ui-kit";

const Countdown = dynamic(() => import("@/components/Countdown"), {
  ssr: false,
});

interface InfoItemProps extends FlexProps {
  color: string;
  name: string;
  value: React.ReactNode;
}

export const DividendBody = () => {
  const { t } = useTranslation();

  return (
    <Flex gap="12px" direction={{ base: "column", lg: "row" }}>
      <Box flex={6} rounded="14px" bg="text.700">
        <Box p="20px">
          <Text fontWeight="bold" mb="12px" fontSize="xl">
            {t("current_epoch")}
          </Text>
          <Flex
            justify="space-between"
            gap="8px"
            direction={{ base: "column", sm: "row" }}
          >
            <Stack direction="row">
              <Flex>
                <XImage
                  src="/icons/coins/venom.svg"
                  alt=""
                  width={40}
                  height={40}
                />
                <XImage
                  src="/icons/coins/xpandx.svg"
                  alt=""
                  width={40}
                  height={40}
                />
              </Flex>
              <Box>
                <Text color="text.500">VENOM/XPANDX</Text>
                <Text>
                  0.0005{" "}
                  <Text as="span" color="text.400">
                    ($49,287)
                  </Text>
                </Text>
              </Box>
            </Stack>

            <Stack direction="row">
              <XImage
                src="/icons/coins/xlxpx.svg"
                alt=""
                width={40}
                height={40}
              />
              <Box>
                <Text color="text.500">xLXPX</Text>
                <Text>
                  17{" "}
                  <Text as="span" color="text.400">
                    ($49,287)
                  </Text>
                </Text>
              </Box>
            </Stack>
          </Flex>
        </Box>

        <Box p="20px" borderTop="1px solid" borderColor="text.900">
          <Text fontWeight="bold" mb="12px" fontSize="xl">
            {t("next_epoch")}
          </Text>
          <Flex justify="space-between" flexWrap="wrap" gap="8px">
            <InfoItem
              name="min_estimated_value"
              value="$10"
              color="sec.1"
              w="100%"
            />
            <InfoItem name="apy" value="0%" color="sec.4" />
            <InfoItem
              name="remaining_time"
              value={<Countdown date={Date.now() + 100000000} />}
              color="#A7F984"
            />
          </Flex>
        </Box>
      </Box>

      <Flex
        flex={4}
        rounded="14px"
        bg="text.700"
        flexDir="column"
        pos="relative"
      >
        <Box
          maxW={{ base: "100%", sm: "60%", lg: "100%" }}
          pb={{ base: "100px", sm: 0 }}
        >
          <Flex p="20px" justify="space-between">
            <Text fontWeight="bold" fontSize="xl">
              {t("your_allocation")}
            </Text>
            <Flex
              color="text.400"
              h="26px"
              align="center"
              justify="center"
              bg="text.600"
              p="4px 6px"
              rounded="5px"
            >
              {t("not_connected")}
            </Flex>
          </Flex>

          <Flex
            justify="space-between"
            p="20px"
            borderTop="1px solid"
            borderColor="text.900"
            pos="relative"
            flex="1"
          >
            <Text fontWeight="bold" fontSize="xl">
              {t("your_dividends")}
            </Text>
            <Flex
              color="text.400"
              h="26px"
              align="center"
              justify="center"
              bg="text.600"
              p="4px 6px"
              rounded="5px"
            >
              {t("not_connected")}
            </Flex>
          </Flex>
        </Box>

        <Box
          w="60%"
          maxW="254px"
          pos="absolute"
          bottom="0"
          left={{ base: "50%", sm: "80%", lg: "50%" }}
          transform="translateX(-50%)"
        >
          <Image w="100%" src="/icons/dividend/cards.svg" alt="" />
        </Box>
      </Flex>
    </Flex>
  );
};

const InfoItem = ({ color, value, name, ...props }: InfoItemProps) => {
  const { t } = useTranslation();
  return (
    <Flex align="center" {...props}>
      <Box w="8px" h="8px" mr="14px" rounded="50%" bg={color} />
      <Box>
        <Text color="text.500">{t(name)}</Text>
        <Text>{value}</Text>
      </Box>
    </Flex>
  );
};
