import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { RiArrowDownSLine } from "react-icons/ri";
import CustomMenuItem from "./CustomMenuItem";

export default function CustomSelect() {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<RiArrowDownSLine />}
        color="gray.50"
        w="200px"
        variant="outline"
        _hover={{
          bgColor: "gray.800",
        }}
        _focus={{
          bgColor: "gray.600",
          borderColor: "gray.50",
        }}
        _active={{
          bgColor: "gray.600",
          borderColor: "gray.50",
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
