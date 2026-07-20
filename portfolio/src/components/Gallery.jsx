import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Lightbox from './Lightbox.jsx'
import { QRDoodle } from './Stamps.jsx'
import { photos } from '../data/gallery.js'

// Handwritten polaroid captions + a scattered rotation pattern.
const captions = [
  'Amsterdam, golden hour',
  'dusk tram, Amsterdam',
  'Old Québec from above',
  'café chairs, Québec',
  'Montmorency Falls',
  'quiet street, Old Québec',
  'D.C. sunset',
  'the St. Lawrence',
]

const tilts = [-3, 2, -2, 3, -2.5, 2.5, -3, 2]

// The whole section is one big admission ticket, tear-off stub and all,
// modeled on the reference site's HEYGO ticket.
export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null)
  const reduceMotion = useReducedMotion()

  return (
    <section id="photos" aria-labelledby="photos-title" className="mx-auto max-w-4xl px-6 py-20 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="rotate-[-1.2deg]"
      >
        <div className="flex overflow-hidden rounded-2xl border-2 border-paper bg-night-deep shadow-2xl">
          {/* Ticket body */}
          <div className="flex-1 p-6 sm:p-10">
            <p className="font-hand text-lg text-red">frames from the road</p>
            <h2 id="photos-title" className="font-display mt-1 text-4xl text-cream sm:text-5xl">
              Places I&rsquo;ve been
            </h2>

            <div className="mt-6 space-y-1">
              <p className="font-mono text-base font-bold tracking-[0.25em] text-cream">ADMIT 1</p>
              <p className="font-display text-lg italic text-tan">My ticket to see the world</p>
              <p className="font-mono text-[0.65rem] tracking-[0.2em] text-tan/70">ROW H0 · SEAT M3</p>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-x-5 gap-y-8">
              {photos.map((photo, i) => (
                <motion.button
                  key={photo.src}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.45, delay: (i % 3) * 0.07 }}
                  whileHover={reduceMotion ? undefined : { rotate: 0, y: -6, scale: 1.02 }}
                  style={{ rotate: tilts[i % tilts.length] }}
                  className="w-36 bg-paper p-2 pb-2.5 shadow-xl sm:w-44"
                  aria-label={`Open photo: ${photo.alt}`}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    width={photo.width}
                    height={photo.height}
                    loading="lazy"
                    decoding="async"
                    className="aspect-square w-full object-cover"
                  />
                  <span className="font-hand mt-2 block text-center text-sm leading-snug text-night">
                    {captions[i % captions.length]}
                  </span>
                </motion.button>
              ))}
            </div>

            <p className="mt-8 text-right font-mono text-xl tracking-[0.3em] text-cream/70">
              {new Date().getFullYear()}
            </p>
          </div>

          {/* Tear-off stub */}
          <div
            aria-hidden="true"
            className="hidden w-20 flex-col items-center justify-between border-l-2 border-dashed border-night bg-paper py-6 text-night sm:flex"
          >
            <p
              className="font-mono text-[0.6rem] font-bold tracking-[0.25em]"
              style={{ writingMode: 'vertical-rl' }}
            >
              ROW H0 SEAT M3
            </p>
            <QRDoodle className="h-14 w-14" />
            <p
              className="font-mono text-[0.6rem] tracking-[0.2em]"
              style={{ writingMode: 'vertical-rl' }}
            >
              12312312322 1
            </p>
          </div>
        </div>
      </motion.div>

      <Lightbox
        photos={photos}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onPrev={() => setActiveIndex((i) => (i - 1 + photos.length) % photos.length)}
        onNext={() => setActiveIndex((i) => (i + 1) % photos.length)}
      />
    </section>
  )
}
