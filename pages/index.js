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
  <h1>👋 Olá, seja bem vindo.</h1>
  <p>Starter utilizando Next.js + TailwindCSS and Typography.
        </p>
    </>
    </Layout>
  )
}





