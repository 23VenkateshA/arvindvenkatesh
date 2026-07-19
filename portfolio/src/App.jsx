import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import StampBorder from './components/StampBorder.jsx'
import { RoughDefs } from './components/Stamps.jsx'
import Home from './pages/Home.jsx'
import BlogList from './pages/BlogList.jsx'
import BlogPost from './pages/BlogPost.jsx'

// Sargam — the Indian classical scale I grew up practicing on violin.
const marqueeLine = 'sa · ri · ga · ma · pa · dha · ni · sa'

function Footer() {
  return (
    <footer id="connect" className="mt-10">
      <div className="mx-auto max-w-3xl px-6 pb-16 pt-10 text-center">
        <p className="font-hand text-lg text-red">say hello</p>
        <h2 className="font-display mt-2 text-4xl text-cream sm:text-5xl">
          Let&rsquo;s make something
        </h2>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          <a
            href="mailto:arvind.venkat28@gmail.com"
            className="font-hand link-slide text-lg text-cream hover:text-red"
          >
            arvind.venkat28@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/arvindvenkatesh36"
            className="font-hand link-slide text-lg text-cream hover:text-red"
          >
            LinkedIn
          </a>
        </div>
        <p className="mt-10 font-mono text-xs text-tan/60">
          © {new Date().getFullYear()} Arvind Venkatesh
        </p>
      </div>

      <div aria-hidden="true" className="overflow-hidden border-t border-line py-4">
        <div className="marquee-x-track">
          {[0, 1].map((copy) => (
            <p key={copy} className="font-hand shrink-0 whitespace-nowrap text-lg text-tan/70">
              {Array.from({ length: 6 }, () => `🎶 ${marqueeLine} 🎻 `).join(' ')}
            </p>
          ))}
        </div>
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
