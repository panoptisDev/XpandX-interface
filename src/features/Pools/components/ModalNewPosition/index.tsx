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
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent maxW="860px">
        <ModalHeader>{t("add_liquidity")}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack spacing={4}>
            <Flex gap="12px">
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
