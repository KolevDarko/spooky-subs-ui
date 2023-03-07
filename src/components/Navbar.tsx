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
import { useAccount } from "wagmi";

const WalletInfo = () => {
  const { address, isConnecting, isDisconnected } = useAccount();
  if (isConnecting) return <div>Connecting...</div>;
  if (isDisconnected) return <div>Disconnected</div>;
  return <div>Connected Wallet: {address}</div>;
}

export default function Navbar() {
  return (
    <Flex as="nav" p="10px" mb="60px" alignItems="center">
      <Spacer />
    <WalletInfo/>
      <HStack spacing="20px"> 
        <ConnectKitButton label="Connect Wallet" />
      </HStack>
    </Flex>
  )
}