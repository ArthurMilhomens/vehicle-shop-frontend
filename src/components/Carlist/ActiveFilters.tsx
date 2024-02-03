import { Flex, HStack, Text } from "@chakra-ui/react";
import FilterTag from "./FilterTag";
import CustomSelect from "./CustomSelect";
import { RiArrowUpDownLine } from "react-icons/ri";

export default function ActiveFilters() {
  return (
    <Flex w="full" p="4" justifyContent="space-between">
      <HStack spacing={2}>
        <FilterTag onDelete={() => {}}>AUDI</FilterTag>
        <FilterTag onDelete={() => {}}>DE 2020 A 2022</FilterTag>
        <FilterTag onDelete={() => {}}>R$ 400.000</FilterTag>
        <FilterTag onDelete={() => {}}>
          <HStack>
            <RiArrowUpDownLine />
            <Text>PREÇO CRESCENTE</Text>
          </HStack>
        </FilterTag>
      </HStack>
      <CustomSelect />
    </Flex>
  );
}
