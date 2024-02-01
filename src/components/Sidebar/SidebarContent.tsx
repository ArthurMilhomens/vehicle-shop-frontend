import {
  Button,
  Flex,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

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
      h="100vh"
      bgColor="gray.100"
      p={isWideVersion ? "4" : "0"}
    >
      {isWideVersion && <Flex alignItems="center" justifyContent="space-between" w="full">
        <Text fontWeight="600" fontSize="xl">
          Filtro
        </Text>
        <Button variant="unstyle" color="red.400">
          Resetar
        </Button>
      </Flex>}
      <Button w="full" colorScheme="orange">Limpar</Button>
    </Stack>
  );
}
