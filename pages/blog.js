import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { getAllFilesMetadata } from '../lib/mdx'
import Image from 'next/image'
import BackIcon from '../public/back.png'

export default function Home({ posts }) {
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
        <nav >
            <ul>

              <li>
                <Link href="/">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <a className={styles.link__navbar}><Image src={BackIcon} alt={"..."} width={30} height={30}/>Andy Santisteban</a>
                </Link>
              </li>
            </ul>
        </nav>
        <div  className={'headline'}>
          <h1  align={'center'}>Blog</h1>
            <div className={styles.container}>
            {posts.map((post) => (
                <div key={post.slug}>
                  <Link  href={`/${post.slug}`}>
                    <a>
                      <div  className={styles.card}>
                        <div className={styles.card__body}>
                          <h4>{post.title}</h4>
                          <p> Fecha: {post.date}</p>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
            ))}
            </div>
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesMetadata({})
  return {
    props: { posts },

  }
}
