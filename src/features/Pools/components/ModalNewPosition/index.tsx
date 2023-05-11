import { ArrowRight } from "@/icons";
import { XButton } from "@/ui-kit";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import { PoolInformation, TokenPair, TokenSingle } from "./components";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalNewPosition = ({ isOpen, onClose }: IProps) => {
  const { t } = useTranslation();
  const [pool, setPool] = useState("pair");

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent maxW="860px">
        <ModalHeader>{t("new_position")}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack spacing={4}>
            <Flex justify="space-between" align="center" w="100%">
              <Breadcrumb fontSize="sm" fontWeight="bold" color="text.500">
                <BreadcrumbItem>
                  <BreadcrumbLink
                    color={pool === "pair" ? "sec.1" : "text.500"}
                    onClick={() => setPool("pair")}
                  >
                    {t("token_pair")}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    color={pool === "single" ? "sec.1" : "text.500"}
                    onClick={() => setPool("single")}
                  >
                    {t("single_token")}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>

              <Text fontSize="sm" color="text.500">
                USDC - USDT pool
              </Text>
            </Flex>

            <Flex gap="12px">
              {pool === "pair" ? <TokenPair /> : <TokenSingle />}

              <PoolInformation />
            </Flex>
          </Stack>
        </ModalBody>

        <ModalFooter>
          <XButton rightIcon={<Icon as={ArrowRight} />} size="md" maxW="210px">
            {t("connect_a_wallet")}
          </XButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
