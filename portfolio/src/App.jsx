import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import StampBorder from './components/StampBorder.jsx'
import { RoughDefs } from './components/Stamps.jsx'
import { socials } from './data/socials.js'
import Home from './pages/Home.jsx'
import BlogList from './pages/BlogList.jsx'
import BlogPost from './pages/BlogPost.jsx'

function Footer() {
  return (
    <footer id="connect" className="mt-10 border-t border-line">
      <div className="mx-auto max-w-3xl px-6 pb-14 pt-12 text-center">
        <p className="font-hand text-lg text-red">say hello</p>
        <div className="mt-6 flex items-center justify-center gap-8">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              title={label}
              className="text-cream transition-colors hover:text-red"
            >
              <Icon className="h-7 w-7" />
            </a>
          ))}
        </div>
        <p className="mt-10 font-mono text-xs text-tan/60">
          © {new Date().getFullYear()} Arvind Venkatesh
        </p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="grain">
      <RoughDefs />
      <StampBorder />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-red focus:px-4 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
