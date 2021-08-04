import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Imagen_mi from '../public/pp.jpeg'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Andy Santisteban Blog</title>
        <meta name="description" content="Blog Andy Santisteban " />
        <meta name="description" content="Desarrollador Web " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <nav className={styles.nav}>
          <div>
            <ul>
              <Link href="/">
                <a>Andy Santisteban</a>
              </Link>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <a href="https://twitter.com/SantistebanAndy">
                  <img src="https://img.icons8.com/material-rounded/24/ffffff/facebook.png" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/SantistebanAndy">
                  <img src="https://img.icons8.com/ios-glyphs/24/ffffff/twitter--v1.png" />
                </a>
              </li>
              <li>
                <a href="https://github.com/AndySantisteban">
                  <img src="https://img.icons8.com/material-sharp/24/ffffff/github.png" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className={styles.main}>
          <Image
            src={Imagen_mi}
            alt="foto_andysantisteban"
            width="200px"
            height="200px"
            className={styles.imagen_mi}
          />
          <Link href="/blog">
            <a className={styles.link_blog}>ir a blog</a>
          </Link>
        </div>
      </main>
    </div>
  )
}