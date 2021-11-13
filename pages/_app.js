 import '../styles/globals.css'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return (
    <div>
        <Head>
            {/* eslint-disable-next-line @next/next/no-page-custom-font */}
            <link
                href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
                rel="stylesheet"
            />
            <title>Blog Andy Santisteban</title>
        </Head>
        <Component {...pageProps} />
    </div>
  )
}

export default MyApp
