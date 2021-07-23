import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import avatar from '../public/avatar.png'


export const siteTitle = 'Starter Next + TailwindCSS e Typography'

export default function Layout({ children, home }) {
  return (
    <div className="antialiased text-gray-900">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Next.js Web App!"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <nav>
  <div className="max-w-6xl mx-auto">
    <div className="flex justify-between">
      <div className="flex space-x-4">
        <div className="flex items-center text-gray-700">
          <a href="/" className="flex items-center py-2 px-2">
          <Image src={avatar} className="rounded-full"
              alt="Profile"
              width={70}
              height={70}
        />
          </a>
        </div>
      </div>
      <div className="flex items-center space-x-4 m-2">
        <Link href="/">
          <a className="text-gray-700 hover:text-gray-900 hover:underline">Home</a>
        </Link>
        <Link href="/about">
          <a className="text-gray-700 hover:text-gray-900 hover:underline">About</a>
        </Link>
      </div>
    </div>
  </div>
</nav> 
        <div className="w-full flex flex-col flex-grow px-5">
          <div>
          <main className="mx-auto max-w-screen-md lg:mt-14 md:mt-8 mt-3">
          <article className="prose dark:prose-dark sm:prose-lg lg:prose-xl mt-5 max-w-none">
          {children}
          </article>
          </main>
          </div>
          </div>

    </div>
  )
}