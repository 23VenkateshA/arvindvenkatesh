import { motion, useReducedMotion } from 'framer-motion'
import { projects } from '../data/projects.js'
import { ChartStamp, CoinStamp, VinylStamp, GitHubIcon } from '../components/Stamps.jsx'

const stampFor = { chart: ChartStamp, coin: CoinStamp, vinyl: VinylStamp }

// Poster tilts, same trick as the blog postcards — hand-placed, not machine-stacked.
const tilts = [-1.5, 1, -1]

export default function Projects() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <div className="text-center">
        <p className="font-hand mb-3 text-lg text-sage">things I&rsquo;ve built</p>
        <h1 className="font-display text-4xl text-cream sm:text-5xl">Projects</h1>
      </div>

      <ul className="mt-16 space-y-12">
        {projects.map((project, i) => {
          const Stamp = stampFor[project.stamp]
          return (
            <motion.li
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              whileHover={reduceMotion ? undefined : { rotate: 0, y: -5 }}
              style={{ rotate: tilts[i % tilts.length] }}
            >
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="group block overflow-hidden rounded-xl bg-paper text-ink shadow-xl transition-shadow hover:shadow-2xl"
              >
                <div className="flex flex-col gap-6 p-7 sm:flex-row sm:items-center sm:p-9">
                  <div className="shrink-0">
                    <Stamp className="w-16 sm:w-20" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <h2 className="font-display text-3xl leading-none transition-colors group-hover:text-sage sm:text-4xl">
                        {project.name}
                      </h2>
                      <p className="font-hand text-base text-sage">{project.tagline}</p>
                    </div>

                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink/70">
                      {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                      <ul className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <li
                            key={tag}
                            className="rounded-full border border-ink/15 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.1em] text-ink/60"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>

                      <span className="font-hand inline-flex shrink-0 items-center gap-1.5 text-base text-sage">
                        <GitHubIcon className="h-4 w-4" />
                        view on github
                        <span
                          aria-hidden="true"
                          className="transition-transform group-hover:translate-x-1"
                        >
                          →
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </motion.li>
          )
        })}
      </ul>
    </section>
  )
}
