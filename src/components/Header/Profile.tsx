import { useLoginModal } from "@/contexts/LoginModalContext";
import { useVehicleModal } from "@/contexts/VehicleModalContext";
import { Flex, Avatar, Button } from "@chakra-ui/react";
import { RiAddLine } from "react-icons/ri";
import Cookies from "universal-cookie";

export default function Profile() {
  const { onOpen } = useVehicleModal();
  const cookies = new Cookies();
  const user = cookies.get("user");

  return (
    <Flex align="center" ml="4">
      <Button
        leftIcon={<RiAddLine fontSize="22px" />}
        bgColor="orange.950"
        color="gray.50"
        variant="filled"
        mr="8"
        _hover={{
          bgColor: "orange.700",
        }}
        _focus={{
          bgColor: "orange.950",
          borderColor: "orange.950",
        }}
        onClick={onOpen}
      >
        Cadastrar veículo
      </Button>
      <Avatar
        size="md"
        name={user?.email}
        bgColor="gray.300"
        color="gray.50"
      />
    </Flex>
  );
}
