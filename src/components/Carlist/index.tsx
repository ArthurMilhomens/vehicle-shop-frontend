import { Box, SimpleGrid } from "@chakra-ui/react";
import Carbox from "./Carbox";
import ActiveFilters from "./ActiveFilters";
import { useVehicles } from "@/service/hooks/useVehicles";

export default function Carlist() {
  const { data } = useVehicles();
  return (
    <>
      <ActiveFilters />
      <Box
        maxH="80vh"
        minH="80vh"
        maxW="98%"
        margin="auto"
        overflowY="scroll"
        css={{
          "&::-webkit-scrollbar": {
            width: "4px",
          },
          "&::-webkit-scrollbar-track": {
            width: "6px",
            background: "#1c1c1c",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#767676",
            borderRadius: "24px",
          },
        }}
      >
        <SimpleGrid minChildWidth={360} spacing="5px" mt="15px">
          {data?.vehicles?.map((vehicle) => (
            <Carbox vehicle={vehicle} />
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
}
