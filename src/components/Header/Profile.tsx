import { Flex, Avatar } from "@chakra-ui/react";
import Cookies from "universal-cookie";

export default function Profile() {
  const cookies = new Cookies();
  const user = cookies.get("user");

  return (
    <Flex align="center" ml="4">
      <Avatar size="md" name={user?.email} bgColor="orange.500"/>
    </Flex>
  );
}