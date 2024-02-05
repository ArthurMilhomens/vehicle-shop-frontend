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
import { useUpdateVehicleModal } from "@/contexts/UpdateVehicleModalContext";
import { RiDeleteBin2Line } from "react-icons/ri";
import { useMutation } from "react-query";
import { api } from "@/service/api";
import { queryClient } from "@/service/queryClient";

export default function UpdateVehicleModal() {
  const { isOpen, onClose, vehicle } = useUpdateVehicleModal();

  const handleDeleteVehicle = useMutation(
    async () => {
      const response = await api.delete(`vehicles?id=${vehicle.id}`);

      return response.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("vehicles");
        onClose();
      },
    }
  );

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
            <Text fontSize="30px">Editar veículo</Text>
            <Button
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
              onClick={() => handleDeleteVehicle.mutateAsync()}
            >
              Excluir veículo
            </Button>
          </Flex>
          <Text fontSize="18px" alignSelf="flex-start" fontWeight="300" color="gray.100" mt="2">Adicione as informações do seu veículo</Text>
          <VehicleForm />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
