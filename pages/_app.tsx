import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'




function Layout({ children }: { children: ReactElement }) {
  return (
    <>
    <nav style={{ padding: '20px 25px', borderBottom: '1px solid #fff'}}>
      navBar
      </nav>
      <main>{children}</main>
    <footer>Footer</footer>
    </>
  )
}

type NextpageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextpageWithLayout
}
function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>)

  return getLayout(<Component {...pageProps} />)
}

export default MyApp
