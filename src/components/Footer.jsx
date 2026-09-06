import { FaGithub, FaLinkedin, FaItchIo } from 'react-icons/fa'
import { personalInfo } from '../data/cv.jsx'

const EMAIL = 'naminaziri1@gmail.com'

function Socials({ className = '' }) {
  return (
    <div className={`flex items-center gap-5 text-xl text-ink-300 ${className}`}>
      <a href={personalInfo.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-accent">
        <FaGithub />
      </a>
      <a href={personalInfo.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-accent">
        <FaLinkedin />
      </a>
      <a href={personalInfo.links.itch} target="_blank" rel="noopener noreferrer" aria-label="itch.io" className="hover:text-accent">
        <FaItchIo />
      </a>
    </div>
  )
}

/**
 * `variant="panel"` renders contact as a full-height scroll-snap page for the
 * home page; the default renders the normal page footer everywhere else.
 */
export default function Footer({ variant = 'page' }) {
  if (variant === 'panel') {
    return (
      <section id="contact" data-panel="Contact" className="snap-panel items-center overflow-hidden text-center">
        <div className="bg-grid-fade pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative z-10 px-6">
          <p className="section-eyebrow mb-4">Get in touch</p>
          <a href={`mailto:${EMAIL}`} className="text-2xl font-semibold text-ink-100 hover:text-accent md:text-4xl">
            {EMAIL}
          </a>
          <Socials className="mt-8 justify-center text-2xl" />
          <p className="mt-16 font-mono text-[11px] text-ink-500">
            Built with React &amp; Vite, deployed on GitHub Pages.
          </p>
        </div>
      </section>
    )
  }

  return (
    <footer id="contact" className="border-t border-base-700/60 bg-base-900/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="section-eyebrow mb-2">Get in touch</p>
          <a href={`mailto:${EMAIL}`} className="text-lg font-semibold text-ink-100 hover:text-accent">
            {EMAIL}
          </a>
        </div>
        <Socials />
      </div>
      <div className="border-t border-base-700/60 px-6 py-4 text-center font-mono text-[11px] text-ink-500">
        Built with React &amp; Vite, deployed on GitHub Pages.
      </div>
    </footer>
  )
}
