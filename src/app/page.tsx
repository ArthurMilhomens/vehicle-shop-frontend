'use client'
import Carlist from "@/components/Carlist";
import { useVehicles } from "@/service/hooks/useVehicles";
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
        <Carlist />
      </main>
    </>
  );
}
