"use client";
import { VehicleType } from "@/models/vehicles";
import { UseDisclosureReturn, useDisclosure } from "@chakra-ui/react";
import { createContext, ReactNode, useContext, useState } from "react";

interface UpdateVehicleModalProps {
  children: ReactNode;
}

interface UpdateVehicleModalContextData extends UseDisclosureReturn {
  vehicle: VehicleType;
  setVehicle: (vehicle: VehicleType) => void;
};

const UpdateVehicleModalContext = createContext(
  {} as UpdateVehicleModalContextData
);

export function UpdateVehicleModalProvider({
  children,
}: UpdateVehicleModalProps) {
  const disclosure = useDisclosure();
  const [vehicle, setVehicle] = useState<VehicleType>({} as VehicleType);

  return (
    <UpdateVehicleModalContext.Provider value={{...disclosure, vehicle, setVehicle}}>
      {children}
    </UpdateVehicleModalContext.Provider>
  );
}

export const useUpdateVehicleModal = () =>
  useContext(UpdateVehicleModalContext);
