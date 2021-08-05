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
                <Link href="https://twitter.com/SantistebanAndy">
                  <a>Twitter</a>
                </Link>
              </li>
              <li>
                <Link href="https://github.com/AndySantisteban">
                  <a>Github</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className={styles.main}>
          <Link href="https://www.andysantisteban.soy.pe">
            <a>
              <Image
                src={Imagen_mi}
                alt="foto_andysantisteban"
                width="200px"
                height="200px"
                className={styles.imagen_mi}
              />
            </a>
          </Link>
          <Link href="/blog">
            <a className={styles.link_blog}>Ir a blog</a>
          </Link>
        </div>
      </main>
    </div>
  )
}
