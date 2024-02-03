"use client";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import SidebarContent from "./SidebarContent";
import { RiFilter3Line } from "react-icons/ri";

export default function Sidebar() {
  const { isOpen, onClose } = useSidebarDrawer();

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (isDrawerSidebar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg="gray.800" pt="4">
            <DrawerCloseButton mt="6" />
            <DrawerHeader display="flex" alignItems="center" justifyContent="space-between" maxW="125px">Filtro <RiFilter3Line color="#ff5100" fontSize="22px" /></DrawerHeader>

            <DrawerBody>
              <SidebarContent />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  }

  return (
    <Box
      as="aside"
      w="80"
      h="93vh"
      boxShadow="lg"
    >
      <SidebarContent />
    </Box>
  );
}
