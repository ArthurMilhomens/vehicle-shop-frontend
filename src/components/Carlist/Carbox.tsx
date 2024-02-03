import { VehicleType } from "@/models/vehicles";
import { Stack, Img, Text, Flex, Button } from "@chakra-ui/react";

interface CarboxProps {
  vehicle: VehicleType;
}

export default function Carbox({ vehicle }: CarboxProps) {
  const realCurrency = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  })

  return (
    <Flex
      direction="column"
      bgColor="gray.900"
      maxW={360}
      minW={360}
      maxH={414}
      borderRadius={8}
      boxShadow="lg"
      mb="4"
    >
      <Img
        src={`http://localhost:3333/images/${vehicle.image}`}
        maxW={360}
        maxH={196}
        objectFit="cover"
        alt="555f5664-da24-46f3-bdc3-4848ff6cfba3"
        borderTopRadius={8}
      />
      <Stack spacing={4} p="4" pb="6">
        <Stack spacing={1}>
          <Text fontWeight="600" fontSize="1em">
            {vehicle.brand} {vehicle.model}
          </Text>
          <Text fontSize="0.8em">{vehicle.name}</Text>
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
