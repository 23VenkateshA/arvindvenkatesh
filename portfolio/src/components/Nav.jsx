import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

const sectionLinks = [
  { hash: '#experience', label: 'Experience' },
  { hash: '#projects', label: 'Projects' },
  { hash: '#leadership', label: 'Leadership' },
  { hash: '#gallery', label: 'Gallery' },
  { hash: '#beyond', label: 'Beyond Work' },
]

export default function Nav() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const onHome = pathname === '/'

  // Close the mobile menu on route change and on Escape.
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return
    const handleKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [open])

  const linkClass = 'link-slide text-ink-soft hover:text-ink'

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/80 backdrop-blur">
      <nav aria-label="Main" className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <Link to="/" className="link-slide font-serif text-lg italic">
          AV
        </Link>

        <ul className="hidden gap-x-8 text-sm sm:flex">
          {sectionLinks.map(({ hash, label }) => (
            <li key={hash}>
              {onHome ? (
                <a href={hash} className={linkClass}>
                  {label}
                </a>
              ) : (
                <Link to={`/${hash}`} className={linkClass}>
                  {label}
                </Link>
              )}
            </li>
          ))}
          <li>
            <Link
              to="/blog"
              className={`link-slide hover:text-ink ${pathname.startsWith('/blog') ? 'text-ink' : 'text-ink-soft'}`}
            >
              Blog
            </Link>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="flex h-11 w-11 items-center justify-center text-ink sm:hidden"
        >
          <svg width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden="true">
            <motion.line
              x1="0" x2="20" y1="1" y2="1" stroke="currentColor" strokeWidth="1.5"
              animate={open ? { y1: 7, y2: 7, rotate: 45 } : { y1: 1, y2: 1, rotate: 0 }}
              style={{ originX: '10px', originY: '7px' }}
            />
            <motion.line
              x1="0" x2="20" y1="7" y2="7" stroke="currentColor" strokeWidth="1.5"
              animate={open ? { opacity: 0 } : { opacity: 1 }}
            />
            <motion.line
              x1="0" x2="20" y1="13" y2="13" stroke="currentColor" strokeWidth="1.5"
              animate={open ? { y1: 7, y2: 7, rotate: -45 } : { y1: 13, y2: 13, rotate: 0 }}
              style={{ originX: '10px', originY: '7px' }}
            />
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line sm:hidden"
          >
            <ul className="mx-auto flex max-w-3xl flex-col gap-1 px-6 py-4 text-base">
              {sectionLinks.map(({ hash, label }) => (
                <li key={hash}>
                  {onHome ? (
                    <a href={hash} onClick={() => setOpen(false)} className="block py-2 text-ink-soft">
                      {label}
                    </a>
                  ) : (
                    <Link to={`/${hash}`} onClick={() => setOpen(false)} className="block py-2 text-ink-soft">
                      {label}
                    </Link>
                  )}
                </li>
              ))}
              <li>
                <Link to="/blog" onClick={() => setOpen(false)} className="block py-2 text-ink-soft">
                  Blog
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
