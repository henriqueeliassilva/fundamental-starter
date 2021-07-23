import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'


export default function Home() {
  return (
    <Layout>
    <>
      <Head>
      <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
  <h1>👋 Hello!</h1>
   <p>I build Websites, Web Apps and connect technologies to help companies to grow.</p>  
    </>
    </Layout>
  )
}





