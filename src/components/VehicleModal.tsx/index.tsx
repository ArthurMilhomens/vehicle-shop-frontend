import { useVehicleModal } from "@/contexts/VehicleModalContext";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Text,
  Flex,
} from "@chakra-ui/react";
import VehicleForm from "./VehicleForm";

export default function VehicleModal() {
  const { isOpen, onClose } = useVehicleModal();

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent
        bgColor="gray.900"
        borderRadius="30px"
        p="40px"
        minW="596px"
        maxW="596px"
      >
        <ModalBody
          p="0"
          display="flex"
          alignItems="center"
          flexDirection="column"
        >
          <Flex alignItems="flex-start" justifyContent="space-between" w="full">
            <Text fontSize="30px">Cadastrar veículo</Text>
          </Flex>
          <Text fontSize="18px" alignSelf="flex-start" fontWeight="300" color="gray.100" mt="2">Adicione as informações do seu veículo</Text>
          <VehicleForm />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
