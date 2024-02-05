import { useUpdateVehicleModal } from "@/contexts/UpdateVehicleModalContext";
import { VehicleType } from "@/models/vehicles";
import { Stack, Img, Text, Flex, Button } from "@chakra-ui/react";

interface CarboxProps {
  vehicle: VehicleType;
}

export default function Carbox({ vehicle }: CarboxProps) {
  const { onOpen, setVehicle } = useUpdateVehicleModal();
  const realCurrency = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const handleOpenUpdateVehicleModal = () => {
    setVehicle(vehicle);
    onOpen();
  };

  return (
    <Flex
      direction="column"
      bgColor="gray.900"
      maxW={360}
      minW={360}
      maxH={414}
      borderRadius={20}
      boxShadow="lg"
      mb="4"
      cursor="pointer"
      _hover={{
        boxShadow: "0 0 0 3px #ff5100",
      }}
      onClick={handleOpenUpdateVehicleModal}
    >
      <Img
        src={`http://localhost:3333/images/${vehicle.image}`}
        maxW={360}
        maxH={196}
        objectFit="cover"
        alt="car"
        borderTopRadius={20}
      />
      <Stack spacing={4} p="4" pb="6">
        <Stack spacing={1}>
          <Text fontWeight="600" fontSize="1em" fontFamily="">
            {vehicle.brand} {vehicle.model}
          </Text>
          <Text h="39px" maxH="39px" fontSize="0.8em" textOverflow="ellipsis" noOfLines={2} overflowY="hidden">{vehicle.name}</Text>
        </Stack>
        <Text fontWeight="700" fontSize="1.4em">
          {realCurrency.format(vehicle.price)}
        </Text>
        <Button bgColor="orange.950" color="gray.50" w={200} alignSelf="center">
          Ver parcelas
        </Button>
      </Stack>
    </Flex>
  );
}
