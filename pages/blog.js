import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { getAllFilesMetadata } from '../lib/mdx'
export default function Home({ posts }) {
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
          <h1 className={styles.title}>Blog</h1>
          <div className={styles.grid}>
            {posts.map((post) => (
              <Link key={post.slug} href={`/${post.slug}`}>
                <a className={styles.card}>
                  <h2>{post.title} &rarr;</h2>
                  <p>{post.date}</p>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
export async function getStaticProps() {
  const posts = await getAllFilesMetadata({})
  console.log(posts)
  return {
    props: { posts },
  }
}
