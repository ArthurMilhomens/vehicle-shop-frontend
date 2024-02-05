import { Box, SimpleGrid } from "@chakra-ui/react";
import Carbox from "./Carbox";
import ActiveFilters from "./ActiveFilters";
import { useVehicles } from "@/service/hooks/useVehicles";

export default function Carlist() {
  const { data } = useVehicles({});
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
        <SimpleGrid minChildWidth={360} gridTemplateColumns="repeat(auto-fit, minmax(360px, 360px))" gap="24px" spacing="5px" mt="15px" paddingLeft="5px">
          {data?.vehicles?.map((vehicle) => (
            <Carbox key={vehicle.id} vehicle={vehicle} />
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
}
