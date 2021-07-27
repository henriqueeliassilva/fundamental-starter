import Head from 'next/head'
import Layout from '../components/layout'


export default function About () {
  return (
  <Layout>
    <Head>
        <title>About page</title>
    </Head>
       <h1>We are Fundamental</h1>
       <p>This project was built with top technologies in the market.</p>
  </Layout>
  )
}