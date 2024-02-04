import { Modal, ModalBody, ModalContent, ModalOverlay, Text } from "@chakra-ui/react";
import Logo from "../Header/Logo";
import Form from "./CustomForm";
import { useLoginModal } from "@/contexts/LoginModalContext";

export default function LoginForm() {
  const { isOpen, onClose } = useLoginModal();

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent bgColor="gray.900" borderRadius="30px" p="40px" minW="596px" maxW="596px">
        <ModalBody p="0" display="flex" alignItems="center" flexDirection="column">
          <Logo />
          <Text mt="24px" fontWeight="300">Acesse sua conta fornecendo seus detalhes de login</Text>
          <Form />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
