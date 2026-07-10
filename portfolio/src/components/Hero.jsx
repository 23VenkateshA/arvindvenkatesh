import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
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
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
      />
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-3xl px-6 pb-24 pt-28 sm:pb-32 sm:pt-36"
      >
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
    </section>
  )
}
