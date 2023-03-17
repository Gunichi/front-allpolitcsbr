import Head from 'next/head'
import Dashboard from '@/components/Dashboard/Dashboard'

export default function Home() {
  return (
    <>
      <Head>
        <title>PoliticosBR</title>
        <meta name="description" content="Web app to show all Brazilian politicians" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Dashboard />
    </>  
  )
}
