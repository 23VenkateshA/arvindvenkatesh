import { motion } from 'framer-motion'
import Section from './Section.jsx'
import { leadership } from '../data.js'

export default function Leadership() {
  return (
    <Section id="leadership" eyebrow="Campus" title="Leadership at Rutgers">
      <ul className="space-y-8">
        {leadership.map(({ org, role, detail }, i) => (
          <motion.li
            key={org}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <div className="flex flex-wrap items-baseline gap-x-3">
              <h3 className="font-serif text-xl">{org}</h3>
              <p className="text-sm font-medium text-accent">{role}</p>
            </div>
            <p className="mt-1 text-ink-soft">{detail}</p>
          </motion.li>
        ))}
      </ul>
    </Section>
  )
}
