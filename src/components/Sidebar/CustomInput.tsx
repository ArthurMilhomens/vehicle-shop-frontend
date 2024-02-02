import { Input, InputProps } from "@chakra-ui/react";

export default function CustomInput({ ...props }: InputProps) {
  return (
    <Input
      {...props}
      w="135px"
      py="2"
      px="2"
      _focus={{ borderColor: "orange.950" }}
      _placeholder={{
        color: "gray.200"
      }}
      border="2px"
      borderColor="gray.300"
      variant="unstyled"
      fontWeight="600"
    />
  );
}
