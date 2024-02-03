import {
  Button,
  Flex,
  HStack,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Section from "./Section";
import CustomInput from "./CustomInput";
import SelectButton from "./SelectButton";
import { RiFilter3Line } from "react-icons/ri";

export default function SidebarContent() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Stack
      spacing="12"
      align="flex-start"
      w="full"
      h="100%"
      bgColor="gray.800"
      p={isWideVersion ? "4" : "0"}
    >
      {isWideVersion && (
        <Flex alignItems="center" justifyContent="space-between" w="full">
          <HStack>
            <Text fontWeight="600" fontSize="xl">
              Filtro
            </Text>
            <RiFilter3Line color="#ff5100" fontSize="22px" />
          </HStack>
          <Button variant="outline" color="gray.100" borderColor="orange.950" borderRadius="full">
            Resetar
          </Button>
        </Flex>
      )}
      <Stack spacing="4" w="full">
        <Section>
          <Text fontWeight="600">Carros</Text>
          <Flex justifyContent="space-between" w="full">
            <SelectButton label="Novos" isActive={true} />
            <SelectButton label="Usados" isActive={false} />
          </Flex>
        </Section>
        <Section>
          <Text fontWeight="600">Preço</Text>
          <Flex justifyContent="space-between" w="full">
            <CustomInput placeholder="de" type="number" />
            <CustomInput placeholder="até" type="number" />
          </Flex>
        </Section>
        <Section>
          <Text fontWeight="600">Quilometragem</Text>
          <Flex justifyContent="space-between" w="full">
            <CustomInput placeholder="de" type="number" />
            <CustomInput placeholder="até" type="number" />
          </Flex>
        </Section>
      </Stack>
      {!isWideVersion && (
        <Button w="full" colorScheme="orange">
          Limpar
        </Button>
      )}
    </Stack>
  );
}
