import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Leadership from './components/Leadership.jsx'
import Beyond from './components/Beyond.jsx'

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Experience />
        <Projects />
        <Leadership />
        <Beyond />
      </main>
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-4 px-6 py-10 text-sm text-ink-soft">
          <p>© {new Date().getFullYear()} Arvind Venkatesh</p>
          <div className="flex gap-6">
            <a href="mailto:arvind.venkat28@gmail.com" className="link-slide text-accent">
              arvind.venkat28@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/arvindvenkatesh36"
              className="link-slide text-accent"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
