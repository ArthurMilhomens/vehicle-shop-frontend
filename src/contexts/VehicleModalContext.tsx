'use client'
import { UseDisclosureReturn, useDisclosure } from "@chakra-ui/react";
import { createContext, ReactNode, useContext } from "react";

interface VehicleModalProps {
  children: ReactNode
}

type VehicleModalContextData = UseDisclosureReturn

const VehicleModalContext = createContext({} as VehicleModalContextData);

export function VehicleModalProvider({ children }: VehicleModalProps){
  const disclosure = useDisclosure();

  return (
    <VehicleModalContext.Provider value={disclosure}>
      {children}
    </VehicleModalContext.Provider>
  )
}

export const useVehicleModal = () => useContext(VehicleModalContext);