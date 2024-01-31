'use client'
import { useVehicles } from "@/service/hooks/useVehicles";
import { Stack, Text } from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  const { data } = useVehicles();
  console.log(data);
  return (
    <>
      <Head>
        <title>Veículos - Verzel</title>
      </Head>
      <main>
        <Stack>
          {data?.vehicles?.map((vehicle) => (
            <Text>{vehicle.brand} - {vehicle.model}</Text>
          ))}
        </Stack>
      </main>
    </>
  );
}
