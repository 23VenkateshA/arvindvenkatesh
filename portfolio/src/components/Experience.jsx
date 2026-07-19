import { motion, useReducedMotion } from 'framer-motion'
import Section from './Section.jsx'
import { Barcode } from './Stamps.jsx'
import { experience } from '../data.js'

// Each employer is rendered as a physical scrapbook object: a bank card for
// Capital One, a prescription label for BMS, a clothing tag for L'Oréal.

function BankCard() {
  return (
    <div className="w-72 rotate-[-2deg] rounded-xl bg-paper p-5 text-night shadow-xl">
      <div className="flex items-center justify-between">
        <p className="font-mono text-[0.65rem] font-bold tracking-[0.2em]">CAPITAL ONE</p>
        <div className="flex" aria-hidden="true">
          <span className="h-5 w-5 rounded-full bg-red" />
          <span className="-ml-2 h-5 w-5 rounded-full border-2 border-red" />
        </div>
      </div>
      <div className="mt-5 h-8 w-11 rounded border-2 border-red bg-tan">
        <div className="mx-auto mt-1.5 h-4 w-7 border-x-2 border-red" aria-hidden="true" />
      </div>
      <p className="mt-4 font-mono text-sm tracking-[0.18em]">•••• •••• 2026 INTERN</p>
      <div className="mt-4 flex items-end justify-between">
        <p className="font-mono text-[0.65rem] tracking-[0.15em]">A. VENKATESH</p>
        <p className="font-mono text-[0.65rem] font-bold text-red">PM</p>
      </div>
    </div>
  )
}

function RxLabel() {
  return (
    <div className="w-72 rotate-[1.5deg] overflow-hidden rounded-lg bg-paper text-night shadow-xl">
      <div className="flex items-center justify-between bg-red px-4 py-2">
        <p className="font-mono text-[0.7rem] font-bold tracking-[0.15em] text-paper">
          ℞ BRISTOL MYERS SQUIBB
        </p>
      </div>
      <div className="space-y-1.5 px-4 py-4 font-mono text-[0.7rem] leading-relaxed">
        <p>RX #0010 — PRODUCTIVITY</p>
        <p>W/ POWER BI + COPILOT</p>
        <p className="text-red">REFILLS: AUTOMATED (∞)</p>
      </div>
      <div className="flex items-end justify-between px-4 pb-4">
        <Barcode className="h-6 w-24" />
        <p className="font-mono text-[0.6rem] tracking-[0.1em]">DATA ANALYST</p>
      </div>
    </div>
  )
}

function ClothingTag() {
  return (
    <div className="relative h-64 w-64">
      {/* string through the punch hole */}
      <svg
        viewBox="0 0 120 90"
        className="absolute -top-14 left-2 w-32 text-tan"
        aria-hidden="true"
      >
        <path
          d="M112 84 C 96 60, 66 22, 44 26 C 26 30, 30 52, 48 48 C 62 45, 58 20, 34 14"
          fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
        />
      </svg>
      <div className="absolute left-8 top-2 h-56 w-44 rotate-[3deg] rounded-xl bg-red shadow-lg" />
      <div className="absolute left-2 top-4 flex h-56 w-48 rotate-[-4deg] flex-col rounded-xl bg-paper p-4 text-night shadow-xl">
        <div className="mx-auto h-3.5 w-3.5 rounded-full border-2 border-night bg-night/10" aria-hidden="true" />
        <p className="mt-3 text-center font-mono text-[0.65rem] font-bold tracking-[0.2em]">
          L&rsquo;ORÉAL BRANDSTORM
        </p>
        <p className="font-display mt-3 text-center text-4xl leading-none">150+</p>
        <p className="mt-1 text-center font-mono text-[0.62rem] tracking-[0.1em]">
          UNIVERSITIES · 64 COUNTRIES
        </p>
        <div className="mt-auto flex items-end justify-between">
          <Barcode className="h-5 w-20" />
          <p className="font-mono text-[0.55rem] text-red">FELLOW</p>
        </div>
      </div>
    </div>
  )
}

const objects = { card: BankCard, rx: RxLabel, tag: ClothingTag }

export default function Experience() {
  const reduceMotion = useReducedMotion()

  return (
    <Section id="work" eyebrow="places I've worked" title="Work, stamped & filed">
      <div className="space-y-24 sm:space-y-32">
        {experience.map((job, i) => {
          const Obj = objects[job.object]
          const flip = i % 2 === 1
          return (
            <motion.article
              key={job.company}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={`flex flex-col items-center gap-10 sm:flex-row sm:gap-14 ${
                flip ? 'sm:flex-row-reverse' : ''
              }`}
            >
              <motion.div
                whileHover={reduceMotion ? undefined : { rotate: 0, y: -5 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                className="shrink-0"
              >
                <Obj />
              </motion.div>

              <div className="text-center sm:text-left">
                <h3 className="font-display text-3xl text-cream sm:text-4xl">{job.company}</h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-red">
                  {job.role}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-tan">{job.blurb}</p>
                <div className="mt-5">
                  <p className="font-hand text-base text-red">notable work</p>
                  <ul className="mt-2 space-y-1 font-mono text-xs text-tan">
                    {job.notable.map((n) => (
                      <li key={n}>
                        <span aria-hidden="true" className="text-red">✳ </span>
                        {n}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          )
        })}
      </div>
    </Section>
  )
}
