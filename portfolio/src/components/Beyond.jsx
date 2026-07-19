import { motion } from 'framer-motion'
import Section from './Section.jsx'
import { hobbies } from '../data.js'
import {
  ViolinStamp,
  BasketballStamp,
  PawnStamp,
  DumbbellStamp,
  PlaneStamp,
} from './Stamps.jsx'

const stampFor = {
  violin: ViolinStamp,
  basketball: BasketballStamp,
  pawn: PawnStamp,
  dumbbell: DumbbellStamp,
  plane: PlaneStamp,
}

export default function Beyond() {
  return (
    <Section id="beyond" eyebrow="off the clock" title="The rest of me">
      <ul className="flex flex-wrap items-start justify-center gap-x-10 gap-y-12">
        {hobbies.map(({ stamp, label }, i) => {
          const Icon = stampFor[stamp]
          return (
            <motion.li
              key={label}
              initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ rotate: i % 2 ? 3 : -3, y: -4 }}
              className="flex flex-col items-center"
            >
              <Icon className="w-20" aria-label={label} />
            </motion.li>
          )
        })}
      </ul>
    </Section>
  )
}
