import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { marked } from 'marked'
import { getPost, formatDate } from '../lib/posts.js'

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPost(slug)
  const html = useMemo(() => (post ? marked.parse(post.content) : ''), [post])

  if (!post) {
    return (
      <section className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
        <h1 className="font-serif text-3xl">Post not found</h1>
        <p className="mt-4 text-ink-soft">That post doesn&rsquo;t exist, or moved.</p>
        <Link to="/blog" className="link-slide mt-6 inline-block text-sm font-medium text-accent">
          ← Back to the blog
        </Link>
      </section>
    )
  }

  return (
    <article className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
      <Link to="/blog" className="link-slide text-sm font-medium text-accent">
        ← Back to the blog
      </Link>
      <p className="mt-8 text-sm font-medium text-ink-soft">{formatDate(post.date)}</p>
      <h1 className="mt-1 font-serif text-4xl leading-tight sm:text-5xl">{post.title}</h1>
      <div
        className="prose prose-headings:font-serif mt-10 max-w-none"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </article>
  )
}
