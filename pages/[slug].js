import { getFileBySlug, getFiles } from '../lib/mdx'
import { MDXRemote } from 'next-mdx-remote'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Imagen_mi from '../public/pp.jpeg'

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
                <a className={styles.link__navbar}><Image src="https://img.icons8.com/windows/24/ffffff/back.png" alt={"..."}/></a>
              </Link>
            </li>
            <li>
            </li>
          </ul>
        </div>
      </nav>
      <div className={styles.container__blog}>
        <div>
          <Image
              src={Imagen_mi}
              alt="foto_andysantisteban"
              width={400}
              height={400}
              className={styles.imagen_blog}
          />
        </div>
        <div className={styles.container__blog__mdx}>
          <MDXRemote {...source} />
        </div>
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
