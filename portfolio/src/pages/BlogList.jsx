import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { posts, formatDate } from '../lib/posts.js'
import { Barcode } from '../components/Stamps.jsx'

// Posts styled as paper postcards pinned to the ivory page.
export default function BlogList() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <div className="text-center">
        <p className="font-hand mb-3 text-lg text-terra">the blog</p>
        <h1 className="font-display text-4xl text-ink sm:text-5xl">Notes, as they come up</h1>
      </div>

      {posts.length === 0 ? (
        <p className="mt-10 text-center text-ink-soft">No posts yet — check back soon.</p>
      ) : (
        <ul className="mt-14 space-y-10">
          {posts.map((post, i) => (
            <motion.li
              key={post.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ rotate: 0, y: -4 }}
              style={{ rotate: i % 2 ? 1 : -1 }}
              className="mx-auto max-w-xl"
            >
              <Link
                to={`/blog/${post.slug}`}
                className="group block rounded-lg bg-paper p-7 text-ink shadow-xl ring-1 ring-line"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="font-mono text-xs uppercase tracking-[0.15em] text-terra">
                    {formatDate(post.date)}
                  </p>
                  <Barcode className="h-4 w-16 opacity-60" />
                </div>
                <h2 className="font-display mt-2 text-3xl transition-colors group-hover:text-terra">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{post.excerpt}</p>
                <span className="font-hand mt-4 inline-block text-base text-terra">
                  read more →
                </span>
              </Link>
            </motion.li>
          ))}
        </ul>
      )}
    </section>
  )
}
