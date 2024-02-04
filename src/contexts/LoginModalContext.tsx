'use client'
import { UseDisclosureReturn, useDisclosure } from "@chakra-ui/react";
import { createContext, ReactNode, useContext } from "react";

interface LoginModalProps {
  children: ReactNode
}

type LoginModalContextData = UseDisclosureReturn

const LoginModalContext = createContext({} as LoginModalContextData);

export function LoginModalProvider({ children }: LoginModalProps){
  const disclosure = useDisclosure();

  return (
    <LoginModalContext.Provider value={disclosure}>
      {children}
    </LoginModalContext.Provider>
  )
}

export const useLoginModal = () => useContext(LoginModalContext);