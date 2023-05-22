import { ArrowRight } from "@/icons";
import { XButton } from "@/ui-kit";
import {
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
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { SetPriceRange, TokenPair } from "./components";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalNewPosition = ({ isOpen, onClose }: IProps) => {
  const { t } = useTranslation();

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={{ base: "full", sm: "xl" }}>
      <ModalOverlay />
      <ModalContent maxW={{ base: "640px", lg: "860px" }}>
        <ModalHeader>{t("add_liquidity")}</ModalHeader>
        <ModalCloseButton />
        <ModalBody maxH="670px">
          <Stack spacing={4}>
            <Flex gap="12px" flexDir={{ base: "column", lg: "row" }}>
              <TokenPair />
              <SetPriceRange />
            </Flex>
          </Stack>
        </ModalBody>

        <ModalFooter>
          <XButton rightIcon={<Icon as={ArrowRight} />} size="md" maxW="210px">
            {t("add_liquidity")}
          </XButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
