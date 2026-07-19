import { Link, useLocation } from 'react-router-dom'
import { Smiley } from './Stamps.jsx'

const links = [
  { to: '/', label: 'Work' },
  { to: '/blog', label: 'Blog' },
  { to: '/#connect', label: 'Connect', hash: true },
]

export default function Nav() {
  const { pathname } = useLocation()

  return (
    <header className="relative z-40">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-3xl items-center justify-center gap-8 px-6 pt-10 sm:gap-12"
      >
        <Link to="/" aria-label="Back to top" className="text-cream transition-colors hover:text-red">
          <Smiley className="h-6 w-6" />
        </Link>
        {links.map(({ to, label, hash }) => {
          const active = !hash && (to === '/' ? pathname === '/' : pathname.startsWith(to))
          return hash && pathname === '/' ? (
            <a key={label} href="#connect" className="font-hand text-lg text-cream transition-colors hover:text-red">
              {label}
            </a>
          ) : (
            <Link
              key={label}
              to={to}
              className={`font-hand text-lg transition-colors hover:text-red ${
                active ? 'squiggle-under text-cream' : 'text-cream'
              }`}
            >
              {label}
            </Link>
          )
        })}
      </nav>
    </header>
  )
}
