import { useQuery } from "react-query";
import { api } from "../api";
import { VehicleType } from "@/models/vehicles";

type GetVehiclesResponse = {
    vehicles: VehicleType[];
}

interface GetVehiclesFilters {
    orderBy?: string;
    type?: "decreasing" | "increasing";
    minPrice?: string;
    maxPrice?: string;
    minMileage?: string;
    maxMileage?: string;
    name?: string;
}

export async function getVehicles({

}: GetVehiclesFilters): Promise<GetVehiclesResponse> {
    const { data } = await api.get('/vehicles');

    return { vehicles: data }
}

export function useVehicles(filters: GetVehiclesFilters){
    return useQuery(['vehicles'], () => getVehicles(filters), {
        staleTime: 1000 * 60 * 10, // 10 minutes
    });
}