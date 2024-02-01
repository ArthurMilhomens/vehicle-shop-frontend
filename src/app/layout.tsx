import { Flex, SimpleGrid } from "@chakra-ui/react";
import { inter, kanit, roboto_mono } from "./fonts";
import { Providers } from "./providers";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
