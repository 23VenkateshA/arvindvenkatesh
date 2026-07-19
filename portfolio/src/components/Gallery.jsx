import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Section from './Section.jsx'
import Lightbox from './Lightbox.jsx'
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

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null)
  const reduceMotion = useReducedMotion()

  return (
    <Section id="photos" eyebrow="frames from the road" title="Places I've been">
      <p className="mx-auto max-w-xl text-center text-sm leading-relaxed text-tan">
        Travel is one of my hobbies and I like carrying a camera along for it — a handful of
        favorites, straight off the fridge door.
      </p>

      <div className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-10">
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
            className="w-40 bg-paper p-2 pb-2.5 shadow-xl sm:w-48"
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

      <Lightbox
        photos={photos}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onPrev={() => setActiveIndex((i) => (i - 1 + photos.length) % photos.length)}
        onNext={() => setActiveIndex((i) => (i + 1) % photos.length)}
      />
    </Section>
  )
}
