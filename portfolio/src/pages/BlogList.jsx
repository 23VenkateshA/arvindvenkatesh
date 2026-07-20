import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { posts, formatDate } from '../lib/posts.js'
import { Barcode, VinylStamp } from '../components/Stamps.jsx'
import { onRepeat } from '../data/music.js'

// Current music rotation: a spinning vinyl over the title, then the songs
// as plain album covers linking out.
const coverTilts = [-2, 1.5, -1.5]

function OnRepeat() {
  return (
    <section aria-labelledby="on-repeat-title" className="mt-28 text-center">
      <div className="flex justify-center">
        <VinylStamp className="spin-slow w-24 sm:w-28" />
      </div>
      <h2 id="on-repeat-title" className="font-display mt-6 text-4xl text-cream sm:text-5xl">
        On repeat
      </h2>
      <div className="mt-12 flex flex-wrap items-start justify-center gap-x-8 gap-y-10">
        {onRepeat.map(({ title, artist, art, href }, i) => (
          <motion.a
            key={title}
            href={href}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            whileHover={{ rotate: 0, y: -6, scale: 1.03 }}
            style={{ rotate: coverTilts[i % coverTilts.length] }}
            className="block w-44 sm:w-52"
          >
            <img
              src={art}
              alt={`${title} album cover`}
              width={600}
              height={600}
              loading="lazy"
              decoding="async"
              className="aspect-square w-full rounded-md object-cover shadow-xl"
            />
            <span className="font-hand mt-3 block text-center text-base leading-snug text-cream">
              {title}
            </span>
            <span className="font-mono block text-center text-[0.65rem] uppercase tracking-[0.15em] text-muted">
              {artist}
            </span>
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
