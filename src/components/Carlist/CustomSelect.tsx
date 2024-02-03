import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { RiArrowDownSLine } from "react-icons/ri";
import CustomMenuItem from "./CustomMenuItem";

export default function CustomSelect() {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<RiArrowDownSLine />}
        bgColor="orange.950"
        color="gray.50"
        w="200px"
        variant="filled"
        _hover={{
          bgColor: "orange.700",
        }}
        _focus={{
          bgColor: "orange.950",
          borderColor: "orange.950",
        }}
      >
        Ordenação da lista
      </MenuButton>
      <MenuList bgColor="gray.800" p="1" borderRadius={8}>
        <CustomMenuItem>Preço crescente</CustomMenuItem>
        <CustomMenuItem>Preço decrescente</CustomMenuItem>
        <CustomMenuItem>Quilometragem crescente</CustomMenuItem>
        <CustomMenuItem>Quilometragem decrescente</CustomMenuItem>
      </MenuList>
    </Menu>
  );
}
