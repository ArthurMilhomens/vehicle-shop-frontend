'use client'
import { Flex, SimpleGrid } from "@chakra-ui/react";
import { inter, kanit, roboto_mono } from "./fonts";
import { Providers } from "./providers";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { useEffect } from "react";
import { api } from "@/service/api";
import Cookies from "universal-cookie";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookies = new Cookies();
  const user = cookies.get('user');

  useEffect(() => {
    user && (api.defaults.headers.common['Authorization'] = `${user.accessToken}`);
  },[]);

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
