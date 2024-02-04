import { useLoginModal } from "@/contexts/LoginModalContext";
import { Avatar } from "@chakra-ui/react";

export default function LoginButton() {
  const { onOpen } = useLoginModal();
  return (
    <Avatar size="md" src="https://bit.ly/broken-link" onClick={onOpen} cursor="Pointer" />
  );
}
