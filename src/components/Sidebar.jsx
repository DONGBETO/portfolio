import { useEffect, useState } from 'react'
import Photo from './Photo.jsx'
import { profile, links } from '../data.js'
import { Mail, Whatsapp, Linkedin, Github } from './Icons.jsx'

const NAV = [
  ['apropos', 'À propos'],
  ['ia', 'IA'],
  ['experience', 'Expérience'],
  ['projets', 'Projets'],
  ['competences', 'Compétences'],
  ['contact', 'Contact'],
]

export default function Sidebar() {
  const [active, setActive] = useState('apropos')

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-30% 0px -60% 0px' }
    )
    NAV.forEach(([id]) => { const el = document.getElementById(id); if (el) io.observe(el) })
    return () => io.disconnect()
  }, [])

  const socials = [
    { href: `mailto:${links.email}`, label: 'E-mail', icon: <Mail /> },
    { href: links.whatsapp, label: 'WhatsApp', icon: <Whatsapp /> },
    links.linkedin && { href: links.linkedin, label: 'LinkedIn', icon: <Linkedin /> },
    links.github && { href: links.github, label: 'GitHub', icon: <Github /> },
  ].filter(Boolean)

  return (
    <header className="side">
      <div>
        <Photo />
        <h1>{profile.firstName} <span>{profile.lastName}</span></h1>
        <h2>{profile.title}</h2>
        <p className="side-sub">{profile.subtitle}</p>
        <p className="side-tag">{profile.tagline}</p>

        <nav className="nav" aria-label="Sections">
          <ul>
            {NAV.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} className={active === id ? 'on' : ''} aria-current={active === id ? 'true' : undefined}>
                  <span className="nav-line" />
                  <span className="nav-text">{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="side-foot">
        <p className="avail"><span className="pulse" />{profile.availability}</p>
        <div className="side-actions">
          <a className="btn" href={profile.cv} target="_blank" rel="noreferrer">Voir mon CV</a>
          <ul className="socials">
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" aria-label={s.label} title={s.label}>{s.icon}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}
