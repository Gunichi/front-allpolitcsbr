import { DashboardProvider } from '@/context/Dashboard'
import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <DashboardProvider>
        <Component {...pageProps} />
      </DashboardProvider>
    </ChakraProvider>
  )
}
