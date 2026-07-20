import { motion } from 'framer-motion'

// Shared section shell: handwritten eyebrow, big centered serif heading,
// and a scroll-triggered reveal.
export default function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="text-center">
          <p className="font-hand mb-3 text-lg text-terra">{eyebrow}</p>
          <h2 id={`${id}-title`} className="font-display text-4xl text-ink sm:text-5xl">
            {title}
          </h2>
        </div>
        <div className="mt-14">{children}</div>
      </motion.div>
    </section>
  )
}
