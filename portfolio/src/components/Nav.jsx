import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Smiley, CONNECT_CIRCLE_PATH } from './Stamps.jsx'
import { socials } from '../data/socials.js'

const links = [
  { to: '/', label: 'About' },
  { to: '/blog', label: 'Blog' },
]

// Sideways scatter so the icon column reads hand-placed, not machine-stacked.
const iconOffsets = [-10, 10, -7, 12]

export default function Nav() {
  const { pathname } = useLocation()
  const [connectOpen, setConnectOpen] = useState(false)
  const reduceMotion = useReducedMotion()
  // On hover-capable devices mouseenter already opens the panel, so a click
  // must not toggle it straight back closed; on touch, tap toggles.
  const canHover =
    typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches

  return (
    <header className="relative z-40">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-3xl items-center justify-center gap-8 px-6 pt-10 sm:gap-12"
      >
        <Link to="/" aria-label="Back to top" className="text-cream transition-colors hover:text-sage">
          <Smiley className="h-6 w-6" />
        </Link>
        {links.map(({ to, label }) => {
          const active = to === '/' ? pathname === '/' : pathname.startsWith(to)
          return (
            <Link
              key={label}
              to={to}
              className={`font-hand text-lg transition-colors hover:text-sage ${
                active ? 'squiggle-under text-cream' : 'text-cream'
              }`}
            >
              {label}
            </Link>
          )
        })}

        <div
          className="relative"
          onMouseEnter={() => setConnectOpen(true)}
          onMouseLeave={() => setConnectOpen(false)}
        >
          <button
            type="button"
            onClick={() => setConnectOpen((v) => (canHover ? true : !v))}
            aria-expanded={connectOpen}
            aria-label={connectOpen ? 'Hide contact links' : 'Show contact links'}
            className="font-hand relative px-1 text-lg text-cream transition-colors hover:text-sage"
          >
            Connect
            <AnimatePresence>
              {connectOpen && (
                <svg
                  viewBox="0 0 136 52"
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-4 -top-2.5 h-[calc(100%+20px)] w-[calc(100%+32px)] text-cream"
                >
                  <motion.path
                    d={CONNECT_CIRCLE_PATH}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    exit={{ opacity: 0 }}
                    transition={reduceMotion ? { duration: 0 } : { duration: 0.45, ease: 'easeOut' }}
                  />
                </svg>
              )}
            </AnimatePresence>
          </button>

          <AnimatePresence>
            {connectOpen && (
              <ul className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3">
                <div className="relative flex flex-col items-center gap-4">
                  {socials.map(({ label, href, Icon }, i) => (
                    <motion.li
                      key={label}
                      initial={{ opacity: 0, y: -14, scale: 0.4, rotate: -10 }}
                      animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                      exit={{ opacity: 0, y: -8, scale: 0.4 }}
                      transition={
                        reduceMotion
                          ? { duration: 0 }
                          : { type: 'spring', stiffness: 420, damping: 24, delay: i * 0.05 }
                      }
                      style={{ x: iconOffsets[i % iconOffsets.length] }}
                    >
                      <a
                        href={href}
                        aria-label={label}
                        title={label}
                        className="block text-cream transition-colors hover:text-sage"
                      >
                        <Icon className="h-7 w-7" />
                      </a>
                    </motion.li>
                  ))}
                </div>
              </ul>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  )
}
