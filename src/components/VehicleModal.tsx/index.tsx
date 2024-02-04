import { useVehicleModal } from "@/contexts/VehicleModalContext";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalHeader,
  Stack,
  Text,
  Flex,
  Button,
} from "@chakra-ui/react";
import VehicleForm from "./VehicleForm";
import { RiDeleteBin2Line } from "react-icons/ri";

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
            {/* <Button
              w="220px"
              bgColor="warning.500"
              color="gray.50"
              variant="filled"
              leftIcon={<RiDeleteBin2Line />}
              fontSize="18px"
              fontWeight="400"
              _hover={{
                bgColor: "red.500",
              }}
              _focus={{
                bgColor: "warning.500",
                borderColor: "warning.500",
              }}
            >
              Excluir veículo
            </Button> */}
          </Flex>
          <Text fontSize="18px" alignSelf="flex-start" fontWeight="300" color="gray.100">Adicione as informações do seu veículo</Text>
          <VehicleForm />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
