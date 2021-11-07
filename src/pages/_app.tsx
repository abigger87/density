import { ChakraProvider } from '@chakra-ui/react'

// import {
//   ConnectionProvider,
//   useConnection,
//   useWallet,
//   WalletProvider,
// } from "@solana/wallet-adapter-react";
// import * as web3 from "@solana/web3.js";

// import {
//   getLedgerWallet,
//   getPhantomWallet,
//   getSlopeWallet,
//   getSolflareWallet,
// } from "@solana/wallet-adapter-wallets";

// import {
//   WalletModalProvider,
// } from "@solana/wallet-adapter-react-ui";

import theme from '../theme'
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
