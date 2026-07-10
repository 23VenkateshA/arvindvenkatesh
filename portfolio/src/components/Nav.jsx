const links = [
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#leadership', label: 'Leadership' },
  { href: '#beyond', label: 'Beyond work' },
]

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/80 backdrop-blur">
      <nav aria-label="Main" className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <a href="#top" className="link-slide font-serif text-lg italic">
          AV
        </a>
        <ul className="flex gap-5 text-sm sm:gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className="link-slide text-ink-soft hover:text-ink">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
