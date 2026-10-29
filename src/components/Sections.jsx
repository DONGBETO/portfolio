import { useState } from 'react'
import { about, ai, experience, projects, skills, languages, links, profile } from '../data.js'
import { Arrow, Spark, Globe, Github } from './Icons.jsx'

const Title = ({ children }) => <h3 className="sec-title">{children}</h3>

export function About() {
  return (
    <section id="apropos" className="sec" aria-label="À propos">
      <Title>À propos</Title>
      {about.map((p, i) => <p key={i} className="prose" dangerouslySetInnerHTML={{ __html: p }} />)}
    </section>
  )
}

export function AI() {
  return (
    <section id="ia" className="sec" aria-label="Intelligence artificielle">
      <Title>IA appliquée</Title>
      <div className="ai-card">
        <div className="ai-head">
          <span className="ai-badge"><Spark /> Compétence clé</span>
          <p className="ai-intro">{ai.intro}</p>
        </div>
        <ol className="ai-steps">
          {ai.steps.map((s, i) => (
            <li key={s.t}>
              <span className="ai-n">{i + 1}</span>
              <div><strong>{s.t}</strong><p>{s.d}</p></div>
            </li>
          ))}
        </ol>
        <ul className="pills pills-ai">{ai.tools.map((t) => <li key={t}>{t}</li>)}</ul>
      </div>
    </section>
  )
}

export function Experience() {
  return (
    <section id="experience" className="sec" aria-label="Expérience">
      <Title>Expérience</Title>
      <ol className="list">
        {experience.map((e) => (
          <li key={e.role + e.date} className="item">
            <span className="item-date">{e.date}</span>
            <div>
              <h4>{e.role} <span className="at">· {e.org}</span></h4>
              {e.place && <span className="item-place">{e.place}</span>}
              <p>{e.text}</p>
              <ul className="pills">{e.tags.map((t) => <li key={t}>{t}</li>)}</ul>
            </div>
          </li>
        ))}
      </ol>
      <a className="more" href={profile.cv} target="_blank" rel="noreferrer">Voir le CV complet <Arrow /></a>
    </section>
  )
}

const ART = {
  app: <svg viewBox="0 0 200 120"><rect width="200" height="120" rx="6" fill="var(--surface-2)" /><rect x="10" y="10" width="180" height="12" rx="3" fill="var(--line)" /><rect x="10" y="30" width="86" height="80" rx="4" fill="var(--surface)" /><rect x="18" y="40" width="44" height="6" rx="3" fill="var(--accent)" /><rect x="18" y="52" width="66" height="4" rx="2" fill="var(--line)" /><rect x="18" y="60" width="54" height="4" rx="2" fill="var(--line)" /><rect x="18" y="92" width="34" height="10" rx="3" fill="var(--accent)" /><rect x="104" y="30" width="86" height="36" rx="4" fill="var(--surface)" /><rect x="104" y="74" width="86" height="36" rx="4" fill="var(--surface)" /><rect x="112" y="40" width="40" height="5" rx="2" fill="var(--ai)" /></svg>,
  library: <svg viewBox="0 0 200 120"><rect width="200" height="120" rx="6" fill="var(--surface-2)" /><g fill="var(--surface)"><rect x="14" y="14" width="36" height="54" rx="3" /><rect x="58" y="14" width="36" height="54" rx="3" /><rect x="102" y="14" width="36" height="54" rx="3" /><rect x="146" y="14" width="36" height="54" rx="3" /></g><rect x="14" y="14" width="36" height="8" fill="var(--accent)" /><rect x="58" y="14" width="36" height="8" fill="var(--ai)" /><rect x="102" y="14" width="36" height="8" fill="var(--line)" /><rect x="146" y="14" width="36" height="8" fill="var(--accent)" /><rect x="14" y="80" width="168" height="8" rx="3" fill="var(--line)" /><rect x="14" y="96" width="110" height="8" rx="3" fill="var(--line)" /></svg>,
  blog: <svg viewBox="0 0 200 120"><rect width="200" height="120" rx="6" fill="var(--surface-2)" /><rect x="24" y="14" width="152" height="10" rx="3" fill="var(--accent)" /><rect x="24" y="32" width="100" height="5" rx="2" fill="var(--muted)" opacity=".5" /><rect x="24" y="48" width="152" height="4" rx="2" fill="var(--line)" /><rect x="24" y="58" width="140" height="4" rx="2" fill="var(--line)" /><rect x="24" y="68" width="148" height="4" rx="2" fill="var(--line)" /><rect x="24" y="84" width="152" height="24" rx="4" fill="var(--surface)" /></svg>,
}

export function Projects() {
  return (
    <section id="projets" className="sec" aria-label="Projets">
      <Title>Projets</Title>
      <ul className="list">
        {projects.map((p) => {
          const href = p.url || p.repo
          const domain = p.url ? p.url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '') : ''
          return (
            <li key={p.name} className="item item-proj">
              <div className="thumb" aria-hidden="true">
                {p.image ? <img src={p.image} alt="" loading="lazy" /> : ART[p.art || 'app']}
              </div>
              <div>
                <h4>
                  {href ? <a href={href} target="_blank" rel="noreferrer" className="stretch">{p.name} <Arrow /></a> : p.name}
                </h4>
                <span className="item-place">{p.role}</span>
                <p>{p.text}</p>
                <ul className="pills">{p.tags.map((t) => <li key={t}>{t}</li>)}</ul>
                {(p.url || p.repo) && (
                  <div className="plinks">
                    {p.url && <a href={p.url} target="_blank" rel="noreferrer" className="plink plink-site"><Globe /> {domain} <Arrow /></a>}
                    {p.repo && <a href={p.repo} target="_blank" rel="noreferrer" className="plink"><Github /> Code source <Arrow /></a>}
                  </div>
                )}
              </div>
            </li>
          )
        })}
      </ul>
      <p className="soon">De nouveaux projets fullstack arrivent bientôt, avec code source et démo en ligne.</p>
    </section>
  )
}

export function Skills() {
  return (
    <section id="competences" className="sec" aria-label="Compétences">
      <Title>Compétences</Title>
      <dl className="skills">
        {skills.map(([k, v]) => (
          <div key={k} className={k === 'IA' ? 'is-ai' : ''}>
            <dt>{k}</dt>
            <dd><ul className="pills">{v.map((s) => <li key={s}>{s}</li>)}</ul></dd>
          </div>
        ))}
      </dl>
      <p className="langs">{languages.map(([l, n]) => <span key={l}><b>{l}</b> {n}</span>)}</p>
    </section>
  )
}

function CopyRow({ label, value, href }) {
  const [ok, setOk] = useState(false)
  const copy = async () => {
    try { await navigator.clipboard.writeText(value); setOk(true); setTimeout(() => setOk(false), 1600) } catch { /* sélection manuelle possible */ }
  }
  return (
    <div className="crow">
      <div>
        <span className="crow-k">{label}</span>
        {href ? <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{value}</a> : <span className="crow-v">{value}</span>}
      </div>
      <button type="button" onClick={copy} className={ok ? 'copied' : ''}>{ok ? 'Copié ✓' : 'Copier'}</button>
    </div>
  )
}

export function Contact() {
  return (
    <section id="contact" className="sec" aria-label="Contact">
      <Title>Contact</Title>
      <p className="cta-big">Vous cherchez un développeur motivé, à l'aise avec l'IA ? <span>Parlons-en.</span></p>
      <div className="crows">
        <CopyRow label="E-mail" value={links.email} href={`mailto:${links.email}`} />
        <CopyRow label="Téléphone · WhatsApp" value={links.phone} href={links.whatsapp} />
        <CopyRow label="Téléphone 2" value={links.phone2} />
      </div>
      <a className="btn btn-solid" href={`mailto:${links.email}?subject=Opportunit%C3%A9%20d%C3%A9veloppeur%20web`}>Envoyer un e-mail</a>
    </section>
  )
}
