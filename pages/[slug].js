import { getFileBySlug, getFiles } from '../lib/mdx'
import { MDXRemote } from 'next-mdx-remote'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Post({ source, frontMatter }) {
  console.log(source)
  return (
    <div>
     <head>
       <link
           href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
           rel="stylesheet"
       />
     </head>
      <nav className={styles.nav}>
        <div>
          <ul>
            <li>
              <Link href="/blog">
                <a>Atrás</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Home</a>
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
          </ul>
        </div>
        <div>
        </div>

      </nav>
      <div className={styles.container__blog}>
        <MDXRemote {...source} />
      </div>
    </div>
  )
}

export async function getStaticProps({ params }) {
  const { source, frontmatter } = await getFileBySlug(params.slug)
  return {
    props: { source, frontmatter },
  }
}

export async function getStaticPaths() {
  const posts = await getFiles()
  const paths = posts.map((post) => ({
    params: {
      slug: post.replace(/\.mdx/, ''),
    },
  }))
  return {
    paths,
    fallback: false,
  }
}
