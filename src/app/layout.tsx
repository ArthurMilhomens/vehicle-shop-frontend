'use client'
import { Flex, SimpleGrid } from "@chakra-ui/react";
import { inter, kanit, roboto_mono } from "./fonts";
import { Providers } from "./providers";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { useEffect } from "react";
import { api } from "@/service/api";
import Cookies from "universal-cookie";
import { SubmitHandler } from "react-hook-form";
import { useMutation } from "react-query";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookies = new Cookies();
  const user = cookies.get('user');

  useEffect(() => {
    user ? (api.defaults.headers.common['Authorization'] = `${user.accessToken}`) : handleCreateAdmin.mutateAsync();
  },[]);

  const handleCreateAdmin = useMutation(
    async () => {
      const response = await api.post("users/create", {
        email: "admin@admin.com",
        password: "admin",
      });

      return response.data;
    }
  );

  return (
    <html
      lang="en"
      className={`${inter.variable} ${roboto_mono.variable} ${kanit.variable}`}
    >
      <body>
        <Providers>
          <Header />
          <Flex w="100%">
            <Sidebar />

            <SimpleGrid
              flex="1"
              gap="4"
              minChildWidth="360px"
              alignItems="flex-start"
            >
              {children}
            </SimpleGrid>
          </Flex>
        </Providers>
      </body>
    </html>
  );
}
