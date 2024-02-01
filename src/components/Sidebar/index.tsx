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
          <DrawerContent bg="gray.100" p="4">
            <DrawerCloseButton mt="6" />
            <DrawerHeader>Filtro</DrawerHeader>

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
      h="full"
      borderRightWidth="2px"
      borderColor="gray.300"
    >
      <SidebarContent />
    </Box>
  );
}
