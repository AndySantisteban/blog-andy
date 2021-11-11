import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Imagen_mi from '../public/pp.jpeg'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Andy Santisteban Blog</title>
        <meta name="description" content="Blog Andy Santisteban " />
        <meta name="description" content="Desarrollador Web " />
        <link
            href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
            rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <nav>
            <ul>
              <li>
                <Link href="/">
                  <a>Andy Santisteban</a>
                </Link>
              </li>
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
              <li>
                <Link href="https://andysantisteban.com">
                  <a>Cv</a>
                </Link>
              </li>
            </ul>
        </nav>
       <div className={styles.containerHome}>
         <div  className={styles.card__body}>
           <Link href="https://www.andysantisteban.com">
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
             <a className={styles.link}>Ir a blog</a>
           </Link>
         </div>
       </div>
      </main>
    </div>
  )
}
