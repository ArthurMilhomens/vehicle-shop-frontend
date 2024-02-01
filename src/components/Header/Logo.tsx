import { kanit } from '@/app/fonts';
import { Heading, Text } from '@chakra-ui/react'

export default function Logo() {
  return (
    <Text
      bgGradient='linear(to-l, #ee956c, #ff5100)'
      bgClip='text'
      fontSize='3xl'
      fontWeight="900"
      p="2"
      className={kanit.variable}
    >
      VHCShop
    </Text>
  );
}