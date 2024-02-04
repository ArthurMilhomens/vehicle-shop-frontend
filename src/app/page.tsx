'use client'
import Carlist from "@/components/Carlist";
import LoginForm from "@/components/LoginForm";
import VehicleModal from "@/components/VehicleModal.tsx";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Veículos - Verzel</title>
      </Head>
      <main>
        <Carlist />
        <LoginForm />
        <VehicleModal />
      </main>
    </>
  );
}
