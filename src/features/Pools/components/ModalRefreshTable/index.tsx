import { XButton } from "@/ui-kit";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalRefreshTable = ({ isOpen, onClose }: IProps) => {
  const { t } = useTranslation();

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{t("refresh_this_table")}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text color="text.400" textAlign="center">
            {t("this_will_clear_all_current_information_in_the_table")}
          </Text>
        </ModalBody>

        <ModalFooter pt="0px !important" gap="12px">
          <XButton
            size="md"
            maxW="178px"
            variant="primary-outline"
            onClick={onClose}
          >
            {t("cancel")}
          </XButton>
          <XButton size="md" maxW="178px" onClick={onClose}>
            {t("refresh")}
          </XButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
