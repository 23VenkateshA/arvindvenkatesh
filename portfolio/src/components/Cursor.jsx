import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'

// Custom dot cursor: fine pointers only, disabled for reduced-motion users.
export default function Cursor() {
  const reduceMotion = useReducedMotion()
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { stiffness: 500, damping: 40 })
  const springY = useSpring(y, { stiffness: 500, damping: 40 })

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches
    if (!finePointer || reduceMotion) return

    setEnabled(true)
    document.body.classList.add('custom-cursor')

    const onMove = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setHovering(Boolean(e.target.closest('a, button')))
    }
    window.addEventListener('mousemove', onMove)
    return () => {
      window.removeEventListener('mousemove', onMove)
      document.body.classList.remove('custom-cursor')
    }
  }, [reduceMotion, x, y])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-50 rounded-full bg-accent mix-blend-multiply"
      style={{ x: springX, y: springY, translateX: '-50%', translateY: '-50%' }}
      animate={{
        width: hovering ? 40 : 12,
        height: hovering ? 40 : 12,
        opacity: hovering ? 0.45 : 1,
      }}
      transition={{ type: 'spring', stiffness: 400, damping: 28 }}
    />
  )
}
