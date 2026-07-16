import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { posts, formatDate } from '../lib/posts.js'

export default function BlogList() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
      <p className="mb-2 font-sans text-sm font-medium uppercase tracking-[0.2em] text-accent">
        Blog
      </p>
      <h1 className="font-serif text-3xl sm:text-4xl">Notes, as they come up</h1>

      {posts.length === 0 ? (
        <p className="mt-10 text-ink-soft">No posts yet — check back soon.</p>
      ) : (
        <ul className="mt-10 space-y-6">
          {posts.map((post, i) => (
            <motion.li
              key={post.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <Link
                to={`/blog/${post.slug}`}
                className="group block rounded-lg border border-line bg-surface/70 p-7 transition-colors hover:border-accent/40"
              >
                <p className="text-sm font-medium text-ink-soft">{formatDate(post.date)}</p>
                <h2 className="mt-1 font-serif text-2xl transition-colors group-hover:text-accent">
                  {post.title}
                </h2>
                <p className="mt-3 max-w-xl leading-relaxed text-ink-soft">{post.excerpt}</p>
                <span className="link-slide mt-4 inline-block text-sm font-medium text-accent">
                  Read more →
                </span>
              </Link>
            </motion.li>
          ))}
        </ul>
      )}
    </section>
  )
}
