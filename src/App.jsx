import { useEffect, useRef } from 'react'
import Sidebar from './components/Sidebar.jsx'
import { About, AI, Experience, Projects, Skills, Contact } from './components/Sections.jsx'
import { profile } from './data.js'

export default function App() {
  const glow = useRef(null)

  // Halo lumineux qui suit la souris (désactivé sur écrans tactiles et si mouvement réduit)
  useEffect(() => {
    const el = glow.current
    if (!el || matchMedia('(pointer: coarse), (prefers-reduced-motion: reduce)').matches) return
    const move = (e) => {
      el.style.setProperty('--x', `${e.clientX}px`)
      el.style.setProperty('--y', `${e.clientY}px`)
    }
    window.addEventListener('pointermove', move, { passive: true })
    return () => window.removeEventListener('pointermove', move)
  }, [])

  return (
    <div className="page">
      <div className="glow" ref={glow} aria-hidden="true" />
      <a className="skip" href="#apropos">Aller au contenu</a>
      <div className="layout">
        <Sidebar />
        <main>
          <About />
          <AI />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
          <footer className="foot">
            Conçu et développé par {profile.fullName} avec React et Vite, déployé sur Vercel.
            <br />© {new Date().getFullYear()} · {profile.location}
          </footer>
        </main>
      </div>
    </div>
  )
}
