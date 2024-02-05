"use client";

import { LoginModalProvider } from "@/contexts/LoginModalContext";
import { SidebarDrawerProvider } from "@/contexts/SidebarDrawerContext";
import { UpdateVehicleModalProvider } from "@/contexts/UpdateVehicleModalContext";
import { VehicleModalProvider } from "@/contexts/VehicleModalContext";
import { queryClient } from "@/service/queryClient";
import { theme } from "@/styles/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClientProvider } from "react-query";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <SidebarDrawerProvider>
        <LoginModalProvider>
          <VehicleModalProvider>
            <UpdateVehicleModalProvider>
              <ChakraProvider theme={theme}>{children}</ChakraProvider>
            </UpdateVehicleModalProvider>
          </VehicleModalProvider>
        </LoginModalProvider>
      </SidebarDrawerProvider>
    </QueryClientProvider>
  );
}
