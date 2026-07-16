import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import Experience from '../components/Experience.jsx'
import Projects from '../components/Projects.jsx'
import Leadership from '../components/Leadership.jsx'
import Gallery from '../components/Gallery.jsx'
import Beyond from '../components/Beyond.jsx'

// Coming from another route (e.g. a blog post) via a link like /#experience —
// the browser only auto-scrolls to a hash on initial load, not on route change.
function useScrollToHash() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const el = document.querySelector(hash)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }, [hash])
}

export default function Home() {
  useScrollToHash()

  return (
    <>
      <Hero />
      <Experience />
      <Projects />
      <Leadership />
      <Gallery />
      <Beyond />
    </>
  )
}
