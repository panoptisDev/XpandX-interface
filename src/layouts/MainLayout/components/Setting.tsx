import { ChevronDownIcon, SettingIcon } from "@/icons";
import {
  Box,
  FlexProps,
  Flex,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  NumberInput,
  NumberInputField,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import { useState } from "react";

const TABS = [
  {
    title: "auto",
    value: "auto",
  },
  { title: "custom", value: "custom" },
];

export const Setting = (props: FlexProps) => {
  const [selectedTab, setSelectedTab] = useState("auto");
  const { t } = useTranslation();
  return (
    <Box>
      <Popover>
        <PopoverTrigger>
          <Flex
            w="34px"
            h="34px"
            align="center"
            justify="center"
            rounded="50%"
            bg="text.700"
            p="8px"
            flexShrink="0"
            cursor="pointer"
            color="#FAFAFA"
            _hover={{
              bg: "#E2E46F",
            }}
            role="group"
            {...props}
          >
            <SettingIcon
              w="22px"
              h="22px"
              _groupHover={{
                color: "text.900",
              }}
            />
          </Flex>
        </PopoverTrigger>
        <PopoverContent
          bg="text.600"
          borderRadius="14px"
          border="none"
          outline="none !important"
          boxShadow="none !important"
        >
          <PopoverHeader p="16px" borderColor="text.900">
            <Flex justify="space-between" align="center">
              <Text fontWeight="bold" color="text.50">
                XpandX Router
              </Text>
              <Flex
                justify="center"
                align="center"
                bg="text.500"
                borderRadius="50px"
                p="2px 10px"
              >
                {t("auto")}
              </Flex>
            </Flex>
          </PopoverHeader>
          <PopoverBody p="16px">
            <Flex justify="space-between" align="center">
              <Text fontWeight="bold" color="text.50">
                {t("slippage")}
              </Text>

              <Flex bg="text.700" borderRadius="50px" p="3px" h="32px">
                {TABS.map((item, idx) => (
                  <Box
                    key={idx}
                    onClick={() => setSelectedTab(item.value)}
                    w="100%"
                    textAlign="center"
                    cursor="pointer"
                    position="relative"
                  >
                    <Text
                      zIndex="1"
                      position="inherit"
                      p="2px 10px"
                      h="100%"
                      lineHeight="initial"
                    >
                      {t(item.title)}
                    </Text>
                    {item.value === selectedTab ? (
                      <Box
                        as={motion.div}
                        layoutId="tabUnderline"
                        bg="text.500"
                        borderRadius="50px"
                        position="absolute"
                        left="0"
                        right="0"
                        top="0"
                        w="100%"
                        h="100%"
                        p="2px 10px"
                        zIndex="0"
                      />
                    ) : null}
                  </Box>
                ))}
              </Flex>
            </Flex>

            <Flex mt="15px" gap="8px">
              <Menu>
                <MenuButton
                  as={Flex}
                  cursor="pointer"
                  rounded="50px"
                  align="center"
                  p="5px 14px"
                  bg="transparent"
                  color="text.50"
                  border="1px solid"
                  borderColor="text.500"
                  minW="fit-content"
                  h="32px"
                  fontSize="sm"
                >
                  0.1% <ChevronDownIcon w="16px" h="16px" color="text.50" />
                </MenuButton>
                <MenuList minW="120px" bg="text.700">
                  <MenuItem bg="text.700">0.1%</MenuItem>
                  <MenuItem bg="text.700">0.5%</MenuItem>
                  <MenuItem bg="text.700">1%</MenuItem>
                  <MenuItem bg="text.700">5%</MenuItem>
                </MenuList>
              </Menu>

              <InputGroup>
                <NumberInput max={5}>
                  <NumberInputField
                    placeholder="0.10"
                    textAlign="center"
                    h="32px"
                    borderRadius="50px"
                    _placeholder={{ color: "text.500" }}
                  />
                </NumberInput>
                <InputRightElement>%</InputRightElement>
              </InputGroup>
            </Flex>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
};
