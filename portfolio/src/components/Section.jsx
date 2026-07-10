import { motion } from 'framer-motion'

// Shared section shell: eyebrow label, heading, and a scroll-triggered reveal.
export default function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="mb-2 font-sans text-sm font-medium uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
        <h2 id={`${id}-title`} className="font-serif text-3xl sm:text-4xl">
          {title}
        </h2>
        <div className="mt-10">{children}</div>
      </motion.div>
    </section>
  )
}
