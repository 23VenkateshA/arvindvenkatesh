import { motion } from 'framer-motion'
import Section from './Section.jsx'
import { projects } from '../data.js'

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Things I've built">
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map(({ name, description, stack }) => (
          <motion.article
            key={name}
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            className="flex flex-col rounded-lg border border-line bg-white/50 p-7"
          >
            <h3 className="font-serif text-2xl">{name}</h3>
            <p className="mt-3 flex-1 leading-relaxed text-ink-soft">{description}</p>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${name} tech stack`}>
              {stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-line px-3 py-1 text-xs font-medium text-ink-soft"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
