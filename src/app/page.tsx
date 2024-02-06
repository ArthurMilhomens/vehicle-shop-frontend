"use client";
import Carlist from "@/components/Carlist";
import LoginForm from "@/components/LoginForm";
import UpdateVehicleModal from "@/components/UpdateVehicleModal.tsx";
import VehicleModal from "@/components/VehicleModal.tsx";
import { api } from "@/service/api";
import Head from "next/head";
import { useEffect } from "react";
import { useMutation } from "react-query";
import Cookies from "universal-cookie";

export default function Home() {
  const cookies = new Cookies();
  const user = cookies.get('user');
  
  useEffect(() => {
    !user && handleCreateAdmin.mutateAsync()
  }, []);

  const handleCreateAdmin = useMutation(async () => {
    const response = await api.post("users/create", {
      email: "admin@admin.com",
      password: "admin",
    });

    return response.data;
  });

  return (
    <>
      <Head>
        <title>Veículos - Verzel</title>
      </Head>
      <main>
        <Carlist />
        <LoginForm />
        <VehicleModal />
        <UpdateVehicleModal />
      </main>
    </>
  );
}
