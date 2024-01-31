import { useQuery } from "react-query";
import { api } from "../api";
import { VehicleType } from "@/models/vehicles";

type GetVehiclesResponse = {
    vehicles: VehicleType[];
}

export async function getVehicles(): Promise<GetVehiclesResponse> {
    const { data } = await api.get('/vehicles');

    return { vehicles: data }
}

export function useVehicles() {
    return useQuery(['vehicles'], () => getVehicles(), {
        staleTime: 1000 * 60 * 10, // 10 minutes
    });
}