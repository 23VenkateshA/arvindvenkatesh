import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { posts, formatDate } from '../lib/posts.js'
import { Barcode } from '../components/Stamps.jsx'
import { onRepeat } from '../data/music.js'

// "// on repeat" — current music rotation, each cover linking out.
function OnRepeat() {
  return (
    <section aria-labelledby="on-repeat-title" className="mt-24">
      <h2 id="on-repeat-title" className="font-display text-3xl text-cream sm:text-4xl">
        <span aria-hidden="true" className="font-mono font-bold text-sage">
          //{' '}
        </span>
        on repeat
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-3">
        {onRepeat.map(({ title, artist, art, href }, i) => (
          <motion.a
            key={title}
            href={href}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            whileHover={{ y: -5 }}
            className="group mx-auto w-full max-w-56 sm:mx-0 sm:max-w-none"
          >
            <img
              src={art}
              alt={`${title} album cover`}
              width={600}
              height={600}
              loading="lazy"
              decoding="async"
              className="aspect-square w-full rounded-lg object-cover shadow-xl"
            />
            <p className="mt-4 font-mono text-sm font-bold text-sage transition-colors group-hover:text-cream">
              {title}
            </p>
            <p className="mt-1 text-sm text-muted">{artist}</p>
          </motion.a>
        ))}
      </div>
    </section>
  )
}

// Posts styled as paper postcards pinned to the dark page.
export default function BlogList() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <div className="text-center">
        <p className="font-hand mb-3 text-lg text-sage">the blog</p>
        <h1 className="font-display text-4xl text-cream sm:text-5xl">Notes, as they come up</h1>
      </div>

      {posts.length === 0 ? (
        <p className="mt-10 text-center text-muted">No posts yet — check back soon.</p>
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
                className="group block rounded-lg bg-paper p-7 text-ink shadow-xl"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="font-mono text-xs uppercase tracking-[0.15em] text-sage">
                    {formatDate(post.date)}
                  </p>
                  <Barcode className="h-4 w-16 opacity-60" />
                </div>
                <h2 className="font-display mt-2 text-3xl transition-colors group-hover:text-sage">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{post.excerpt}</p>
                <span className="font-hand mt-4 inline-block text-base text-sage">
                  read more →
                </span>
              </Link>
            </motion.li>
          ))}
        </ul>
      )}

      <OnRepeat />
    </section>
  )
}
