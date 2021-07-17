import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'


export default function About () {
  return (
    <Layout>
      <Head>
        <title>About page</title>
      </Head>
        <h1>About</h1>
        <p>Aqui vão as informações sobre o projeto.
        </p>
        <footer>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </footer>
    </Layout>
  )
}