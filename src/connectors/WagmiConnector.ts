import { WagmiConfig, createClient, configureChains, mainnet } from 'wagmi'

import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
 
import { InjectedConnector } from 'wagmi/connectors/injected'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'


// Configure chains & providers with the Alchemy provider.
// Two popular providers are Alchemy (alchemy.com) and Infura (infura.io)
const { chains, provider, webSocketProvider } = configureChains(
    [mainnet],
    [alchemyProvider({ apiKey: 'yourAlchemyApiKey' }), publicProvider()],
  )

// Set up client
export const client = createClient({
    autoConnect: true,
    connectors: [
      new MetaMaskConnector({ chains }),
      new WalletConnectConnector({
        chains,
        options: {
          qrcode: true,
        },
      }),
      new InjectedConnector({
        chains,
        options: {
          name: 'Injected',
          shimDisconnect: true,
        },
      }),
    ],
    provider,
    webSocketProvider,
  })
