import { motion } from 'framer-motion'
import Section from './Section.jsx'
import { experience } from '../data.js'

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked">
      <ol className="divide-y divide-line border-y border-line">
        {experience.map(({ company, role, summary }, i) => (
          <motion.li
            key={company}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group py-8"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-serif text-2xl transition-colors group-hover:text-accent">
                {company}
              </h3>
              <p className="text-sm font-medium text-ink-soft">{role}</p>
            </div>
            <p className="mt-3 max-w-xl leading-relaxed text-ink-soft">{summary}</p>
          </motion.li>
        ))}
      </ol>

      <div className="mt-12">
        <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-accent">Education</h3>
        <p className="mt-3 font-serif text-xl">Rutgers University — Honors College</p>
        <p className="mt-1 text-ink-soft">
          B.S. Business Analytics &amp; Information Technology, and Data Science · Class of 2027
        </p>
      </div>
    </Section>
  )
}
