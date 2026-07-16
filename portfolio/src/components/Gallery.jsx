import { useState } from 'react'
import { motion } from 'framer-motion'
import Section from './Section.jsx'
import Lightbox from './Lightbox.jsx'
import { photos } from '../data/gallery.js'

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <Section id="gallery" eyebrow="Photography" title="A few frames from the road">
      <p className="max-w-xl leading-relaxed text-ink-soft">
        Travel is one of my hobbies and I like carrying a camera along for it — a handful of
        favorites below.
      </p>

      <div className="mt-8 columns-2 gap-4 sm:columns-3">
        {photos.map((photo, i) => (
          <motion.button
            key={photo.src}
            type="button"
            onClick={() => setActiveIndex(i)}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
            whileHover={{ y: -3 }}
            className="group mb-4 block w-full break-inside-avoid overflow-hidden rounded-lg ring-1 ring-line focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
            aria-label={`Open photo: ${photo.alt}`}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              loading="lazy"
              decoding="async"
              className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
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
