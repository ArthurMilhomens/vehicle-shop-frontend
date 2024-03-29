'use client'
import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import Logo from "./Logo";
import SearchBox from "./SearchBox";
import Profile from "./Profile";
import Cookies from "universal-cookie";
import LoginButton from "./LoginButton";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from "@/contexts/SidebarDrawerContext";
import { useEffect, useState } from "react";
import { useLoginModal } from "@/contexts/LoginModalContext";

export default function Header() {
  const cookies = new Cookies();
  const [user, setUser] = useState(cookies.get("user"));
  const { onOpen } = useSidebarDrawer();
  const { isOpen } = useLoginModal();

  const isWideVersion = useBreakpointValue({
      base: false,
      lg: true
  })

  useEffect(() => {
    let newuser = cookies.get("user");
    newuser && setUser(newuser); 
  }, [isOpen])

  return (
    <Flex
      as="header"
      w="100%"
      h="24"
      mx="auto"
      px="8"
      align="center"
      bgColor="gray.900"
      boxShadow="lg"
    >
      {!isWideVersion ? (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} color="#ff5100" />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        ></IconButton>
      ) : (
        <Logo />
      )}
      <SearchBox />
      <Flex align="center" ml="auto">
        {user ? <Profile /> : <LoginButton />}
      </Flex>
    </Flex>
  );
}
