'use client'
import { Flex, Icon, Input } from "@chakra-ui/react";
import { useRef } from "react";
import { RiSearchLine } from "react-icons/ri";

export default function SearchBox() {
  const searchInputRef = useRef<HTMLInputElement>(null)

  return (
    <Flex
      as="label"
      flex="1"
      py="4"
      px={["4", "8"]}
      ml="auto"
      maxW={400}
      alignSelf="center"
      color="gray.200"
      position="relative"
      bg="gray.700"
      borderRadius="8px"
    >
      <Input
        color="gray.50"
        variant="unstyled"
        mr="4"
        placeholder="Pesquisar veículo"
        _placeholder={{ color: "gray.400" }}
        ref={searchInputRef}
      />
      <Icon as={RiSearchLine} color="gray.400" fontSize="20" />
    </Flex>
  );
}