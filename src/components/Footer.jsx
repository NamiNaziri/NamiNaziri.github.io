import { FaGithub, FaLinkedin, FaItchIo } from 'react-icons/fa'
import { personalInfo } from '../data/cv.jsx'

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-base-700/60 bg-base-900/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="section-eyebrow mb-2">Get in touch</p>
          <a href="mailto:naminaziri1@gmail.com" className="text-lg font-semibold text-ink-100 hover:text-accent">
            naminaziri1@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-5 text-xl text-ink-300">
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
      </div>
      <div className="border-t border-base-700/60 px-6 py-4 text-center font-mono text-[11px] text-ink-500">
        Built with React &amp; Vite, deployed on GitHub Pages.
      </div>
    </footer>
  )
}
