import { motion } from 'framer-motion'
import Section from './Section.jsx'
import { sideQuests } from '../data.js'

// Projects and campus leadership, filed together the way Jackie files hers:
// a numbered quest log in monospace.
export default function SideQuests() {
  return (
    <Section id="quests" eyebrow="off the résumé" title="Side quests">
      <ol className="divide-y divide-line border-y border-line">
        {sideQuests.map(({ name, role, detail, tags }, i) => (
          <motion.li
            key={name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: (i % 3) * 0.06 }}
            className="grid gap-2 py-8 sm:grid-cols-[3rem_1fr] sm:gap-6"
          >
            <p aria-hidden="true" className="font-mono text-xs text-terra">
              {String(i + 1).padStart(2, '0')}
            </p>
            <div>
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h3 className="font-display text-2xl text-ink">{name}</h3>
                <p className="font-hand text-base text-terra">{role}</p>
              </div>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-soft">{detail}</p>
              <p className="mt-2 font-mono text-xs uppercase tracking-[0.15em] text-sage">
                {tags}
              </p>
            </div>
          </motion.li>
        ))}
      </ol>
    </Section>
  )
}
