import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import heroPhoto from '../assets/arvindwebphoto.jpg'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const photoIn = {
  hidden: { opacity: 0, y: 16, rotate: 0 },
  show: { opacity: 1, y: 0, rotate: -3, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 } },
}

export default function Hero() {
  const reduceMotion = useReducedMotion()
  const { scrollY } = useScroll()
  const drift = useTransform(scrollY, [0, 600], [0, reduceMotion ? 0 : 90])

  return (
    <section id="top" aria-label="Introduction" className="relative overflow-hidden">
      <motion.div
        aria-hidden="true"
        style={{ y: drift }}
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-clay/20 blur-3xl"
      />
      <div className="mx-auto grid max-w-3xl gap-10 px-6 pb-24 pt-28 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-12 sm:pb-32 sm:pt-36">
        <motion.div variants={container} initial="hidden" animate="show" className="order-2 sm:order-1">
          <motion.p variants={item} className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Hello, I&rsquo;m
          </motion.p>
          <motion.h1 variants={item} className="font-serif text-5xl leading-tight sm:text-7xl">
            Arvind Venkatesh
          </motion.h1>
          <motion.p variants={item} className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft">
            I solve real-world problems with <em className="font-serif text-ink">data</em> and{' '}
            <em className="font-serif text-ink">design</em> — studying Business Analytics &amp;
            Information Technology at Rutgers University, and building things that make both
            numbers and people make sense.
          </motion.p>
          <motion.div variants={item} className="mt-10">
            <a
              href="#experience"
              className="group inline-flex items-center gap-2 text-sm font-medium text-accent"
            >
              <span className="link-slide">See what I&rsquo;ve been up to</span>
              <span aria-hidden="true" className="transition-transform group-hover:translate-y-1">
                ↓
              </span>
            </a>
          </motion.div>
        </motion.div>

        <motion.figure
          variants={photoIn}
          initial="hidden"
          animate="show"
          whileHover={reduceMotion ? undefined : { rotate: 0 }}
          transition={{ type: 'spring', stiffness: 220, damping: 18 }}
          className="order-1 mx-auto w-40 shrink-0 rounded-sm bg-surface p-2 shadow-lg ring-1 ring-line sm:order-2 sm:mx-0 sm:w-52"
        >
          <img
            src={heroPhoto}
            alt="Arvind Venkatesh smiling outdoors"
            width={624}
            height={832}
            className="aspect-[3/4] w-full rounded-[2px] object-cover"
          />
          <figcaption className="mt-2 text-center font-serif text-sm italic text-ink-soft sm:text-left">
            Rutgers &rsquo;27 · violinist · basketball analyst at heart
          </figcaption>
        </motion.figure>
      </div>
    </section>
  )
}
