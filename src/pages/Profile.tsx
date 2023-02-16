import { 
  ChatIcon, 
  CheckCircleIcon, 
  EmailIcon, 
  StarIcon, 
  WarningIcon,
  LockIcon,
} from '@chakra-ui/icons'
import { 
  Tabs, 
  TabList, 
  Tab, 
  TabPanels, 
  TabPanel, 
  List, 
  ListItem, 
  ListIcon 
} from '@chakra-ui/react'
import {
  useAccount,
  useConnect,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
} from 'wagmi'

export default function Profile() {
    const { address, connector, isConnected } = useAccount()
    const { data: ensAvatar } = useEnsAvatar({ address })
    const { data: ensName } = useEnsName({ address })
    const { connect, connectors, error, isLoading, pendingConnector } =
      useConnect()
    const { disconnect } = useDisconnect()



  return (
    <Tabs mt="40px" p="20px" variant="enclosed" colorScheme="purple">
      <TabList>
        <Tab _selected={{ color: 'white', bg: 'purple.400' }}>Account Info</Tab>
        <Tab _selected={{ color: 'white', bg: 'purple.400' }}>Task History</Tab>
        <Tab _selected={{ color: 'white', bg: 'purple.400' }}>Wallet</Tab>
      </TabList>
      <TabPanels py="10px">
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={EmailIcon} />
              Email: mario@netninja.dev
            </ListItem>
            <ListItem>
              <ListIcon as={ChatIcon} />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </ListItem>
            <ListItem>
              <ListIcon as={StarIcon} />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
          </List>
        </TabPanel>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color="red.400" />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color="red.400" />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
          </List>
        </TabPanel>
        <TabPanel>
        <List spacing={4}>
          {
          isConnected ?         
          <ListItem>
            <img src={ensAvatar!} alt="ENS Avatar" />
            <div>{ensName ? `${ensName} (${address})` : address}</div>
            <div>Connected to {connector?.name}</div>
            <button onClick={() => disconnect()}>Disconnect</button>
          </ListItem>
        :
            connectors.map((connector) => (
              <ListItem>
              <button
                disabled={!connector.ready}
                key={connector.id}
                onClick={() => connect({ connector })}
              >
                {connector.name}
                {!connector.ready && ' (unsupported)'}
                {isLoading &&
                  connector.id === pendingConnector?.id &&
                  ' (connecting)'}
              </button>
              </ListItem>
            ))}
            {error && <div>{error.message}</div>}
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
