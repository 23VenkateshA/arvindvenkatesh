import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function Lightbox({ photos, index, onClose, onPrev, onNext }) {
  const closeRef = useRef(null)
  const photo = index === null ? null : photos[index]

  useEffect(() => {
    if (photo === null) return

    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', handleKey)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [photo, onClose, onPrev, onNext])

  return (
    <AnimatePresence>
      {photo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          className="fixed inset-0 z-50 flex items-center justify-center bg-night/95 p-4 sm:p-8"
          onClick={onClose}
        >
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close photo viewer"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full text-2xl text-cream/90 hover:text-sage focus-visible:outline focus-visible:outline-2 focus-visible:outline-cream sm:right-6 sm:top-6"
          >
            ×
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onPrev()
            }}
            aria-label="Previous photo"
            className="absolute left-2 flex h-11 w-11 items-center justify-center rounded-full text-2xl text-cream/90 hover:text-sage focus-visible:outline focus-visible:outline-2 focus-visible:outline-cream sm:left-6"
          >
            ‹
          </button>

          <motion.img
            key={photo.src}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            src={photo.src}
            alt={photo.alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-full rounded-sm object-contain shadow-2xl"
          />

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onNext()
            }}
            aria-label="Next photo"
            className="absolute right-2 flex h-11 w-11 items-center justify-center rounded-full text-2xl text-cream/90 hover:text-sage focus-visible:outline focus-visible:outline-2 focus-visible:outline-cream sm:right-6"
          >
            ›
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
