import { MenuItem } from "@chakra-ui/react";

export default function CustomMenuItem({ children }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <MenuItem
      bgColor="gray.800"
      borderRadius={8}
      _hover={{
        bgColor: "gray.400",
      }}
    >
      {children}
    </MenuItem>
  );
}
