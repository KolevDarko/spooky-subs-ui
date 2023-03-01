import { 
  Flex, 
  Heading, 
  Text, 
  Spacer, 
  HStack, 
  AvatarBadge,
  Avatar
} from "@chakra-ui/react"
import { ConnectKitButton } from "connectkit"

export default function Navbar() {
  return (
    <Flex as="nav" p="10px" mb="60px" alignItems="center">
      <Heading as="h1" fontSize="1.5em">Dojo Tasks</Heading>
      <Spacer />

      <HStack spacing="20px"> 
        <Avatar name="mario" src="/img/mario.png">
          <AvatarBadge width="1.3em" bg="teal.500">
            <Text fontSize="xs" color="white">3</Text>
          </AvatarBadge>
        </Avatar>
        <ConnectKitButton label="Connect Wallet" />
      </HStack>
    </Flex>
  )
}