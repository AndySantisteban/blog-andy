import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import fs from 'fs'
import path from 'path'

const root = process.cwd()
export const getFiles = () => fs.readdirSync(path.join(root, 'data'))

export const getFileBySlug = async (slug) => {
  const sourceMdx = fs.readFileSync(
    path.join(root, 'data', `${slug}.mdx`),
    'utf-8'
  )
  const { data, content } = await matter(sourceMdx)

  const source = await serialize(content, {})

  return {
    source,
    frontmatter: {
      slug,
      ...data,
    },
  }
}
export const getAllFilesMetadata = () => {
  const files = getFiles()

  return files.reduce((allPosts, postSlug) => {
    const sourceMdx = fs.readFileSync(
      path.join(root, 'data', postSlug),
      'utf-8'
    )

    const { data } = matter(sourceMdx)

    return [{ ...data, slug: postSlug.replace('.mdx', '') }, ...allPosts]
  }, [])
}
