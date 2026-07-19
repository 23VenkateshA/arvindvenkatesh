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
      <section className="mx-auto max-w-3xl px-6 py-16 text-center sm:py-24">
        <h1 className="font-display text-4xl text-cream">Post not found</h1>
        <p className="mt-4 text-tan">That post doesn&rsquo;t exist, or moved.</p>
        <Link to="/blog" className="font-hand mt-6 inline-block text-lg text-red hover:text-cream">
          ← back to the blog
        </Link>
      </section>
    )
  }

  return (
    <article className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
      <Link to="/blog" className="font-hand text-lg text-red hover:text-cream">
        ← back to the blog
      </Link>
      <p className="mt-10 font-mono text-xs uppercase tracking-[0.15em] text-tan">
        {formatDate(post.date)}
      </p>
      <h1 className="font-display mt-2 text-4xl leading-tight text-cream sm:text-5xl">
        {post.title}
      </h1>
      <div
        className="prose prose-headings:font-display mt-10 max-w-none"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </article>
  )
}
