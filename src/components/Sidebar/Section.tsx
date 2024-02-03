import { Stack } from "@chakra-ui/react";

export default function Section({ children }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <Stack w="full" pb="8" spacing="4">
          {children}
        </Stack>
    )
}