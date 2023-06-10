import {
  Box,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  List,
  ListItem,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import _ from "lodash";
import { useRouter } from "next/router";
import Image from "next/image";

import { BarIcon } from "@/icons";
import { NAVIGATION, NAVIGATION_MORE } from "@/constants/navigation";
import { ConnectWallet } from "@/components";
import { Setting } from "./";

export const MenuModal = () => {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const { asPath } = router;

  return (
    <>
      <Flex
        bg="white"
        w="34px"
        h="34px"
        rounded="50%"
        align="center"
        justify="center"
        onClick={onOpen}
      >
        <BarIcon color="text.900" />
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent bg="text.800">
          <ModalHeader textAlign="left">
            <Flex>
              <Box mr="50px" width={100} height={26} pos="relative">
                <Image src="/logo.svg" layout="fill" alt="Swap logo" />
              </Box>
            </Flex>
          </ModalHeader>

          <ModalCloseButton
            w="34px"
            h="34px"
            rounded="50%"
            bg="white"
            color="text.900"
          />
          <ModalBody>
            <List mb="20px">
              {[...NAVIGATION, ...NAVIGATION_MORE].map((item, idx) => {
                const isActive = asPath.startsWith(item.feature);
                return (
                  <ListItem
                    key={idx}
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    onClick={() => {
                      router.push(item.href);
                      onClose();
                    }}
                    color={isActive ? "sec.2" : "text.50"}
                    height="61px"
                    borderBottom="1px solid"
                    borderColor="color.700"
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
                  </ListItem>
                );
              })}
            </List>
            <Flex
              align="center"
              sx={{
                button: {
                  h: "46px",
                  pos: "relative",
                  fontWeight: "bold",
                  fontSize: "lg",
                },
                ".chakra-button__icon": {
                  ".chakra-stack": {
                    w: "40px",
                    h: "40px",
                    pos: "absolute",
                    right: "3px",
                    top: "3px",
                  },
                },
              }}
            >
              <ConnectWallet type="header" flex={1} filledConnectedBtn />
              <Setting w="46px" h="46px" bg="text.600" ml="14px" />
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
