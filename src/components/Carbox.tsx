import { Stack, Img, Text, Flex, Button } from "@chakra-ui/react";

export default function Carbox() {
  return (
    <Flex
      direction="column"
      bgColor="gray.900"
      maxW={260}
      borderRadius={8}
      boxShadow="lg"
      m="4"
    >
      <Img
        src="http://localhost:3333/images/239ddf3e-9004-4ed3-86f5-a56fd14a93b7.jpeg"
        width={260}
        height={170}
        alt="555f5664-da24-46f3-bdc3-4848ff6cfba3"
        borderTopRadius={8}
      />
      <Stack spacing={4} p="4" pb="6">
        <Stack spacing={1}>
          <Text fontWeight="600" fontSize="1em">
            AUDI A3
          </Text>
          <Text fontSize="0.8em">
            1.4 TFSI SPORTBACK 16V GASOLINA 4P S-TRONIC
          </Text>
        </Stack>
        <Text fontWeight="700" fontSize="1.4em">
          R$ 82.900
        </Text>
        <Button bgColor="orange.950" color="gray.50" w={200} alignSelf="center">
          Ver parcelas
        </Button>
      </Stack>
    </Flex>
  );
}
