"use client";

import { queryClient } from "@/service/queryClient";
import { theme } from "@/styles/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClientProvider } from "react-query";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </QueryClientProvider>
  );
}
