import { motion, useReducedMotion } from 'framer-motion'
import { SealStamp } from './Stamps.jsx'
import heroPhoto from '../assets/arvindwebphoto.jpg'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="top" aria-label="Introduction" className="relative">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto flex max-w-3xl flex-col items-center px-6 pb-16 pt-16 text-center sm:pt-24"
      >
        <motion.div variants={item}>
          <SealStamp className="w-24 sm:w-28" />
        </motion.div>

        <motion.h1
          variants={item}
          className="font-display mt-10 text-5xl leading-[1.05] text-cream sm:text-7xl"
        >
          Things I&rsquo;ve built,
          <br />
          lessons I&rsquo;ve learnt
        </motion.h1>

        <motion.p variants={item} className="font-hand mt-6 text-lg text-tan">
          Arvind Venkatesh &middot; Business Analytics &amp; IT @ Rutgers &rsquo;27
        </motion.p>

        <motion.figure
          variants={item}
          whileHover={reduceMotion ? undefined : { rotate: 0, y: -4 }}
          transition={{ type: 'spring', stiffness: 220, damping: 16 }}
          className="mt-12 w-48 rotate-[-3deg] bg-paper p-2.5 pb-3 shadow-xl sm:w-56"
        >
          <img
            src={heroPhoto}
            alt="Arvind Venkatesh smiling outdoors"
            width={624}
            height={832}
            className="aspect-[3/4] w-full object-cover"
          />
          <figcaption className="font-hand mt-2.5 text-sm leading-snug text-night">
            hi, that&rsquo;s me — violinist, basketball analyst at heart
          </figcaption>
        </motion.figure>

        <motion.a
          variants={item}
          href="#work"
          className="font-hand mt-14 inline-flex items-center gap-2 text-lg text-red hover:text-cream"
        >
          see what I&rsquo;ve been up to ↓
        </motion.a>
      </motion.div>
    </section>
  )
}
