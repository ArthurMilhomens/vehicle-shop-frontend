import { Flex, Button } from "@chakra-ui/react";
import { CgProfile } from "react-icons/cg";

export default function LoginButton() {
  return (
    <Flex align="center">
      <Button leftIcon={<CgProfile />} colorScheme="orange">Entrar</Button>
    </Flex>
  );
}
