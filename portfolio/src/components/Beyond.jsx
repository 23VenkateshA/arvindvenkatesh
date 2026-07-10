import { motion } from 'framer-motion'
import Section from './Section.jsx'
import { hobbies } from '../data.js'

export default function Beyond() {
  return (
    <Section id="beyond" eyebrow="Beyond work" title="When I'm not in a spreadsheet">
      <ul className="flex flex-wrap gap-3">
        {hobbies.map(({ label, note }, i) => (
          <motion.li
            key={label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            whileHover={{ rotate: -1.5, y: -3 }}
            className="rounded-full border border-line bg-white/50 px-5 py-2.5"
          >
            <span className="font-medium">{label}</span>
            <span className="text-ink-soft"> · {note}</span>
          </motion.li>
        ))}
      </ul>
      <p className="mt-10 max-w-xl leading-relaxed text-ink-soft">
        Seven-plus years of Indian classical violin taught me discipline; basketball taught me to
        love the numbers behind the game; chess, the weight room, and the track keep the thinking
        sharp and the progress measurable.
      </p>
    </Section>
  )
}
