import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaItchIo } from 'react-icons/fa'
import { personalInfo } from '../data/cv.jsx'

const focusAreas = ['Motion Matching', 'Procedural Animation', 'Inverse Kinematics', 'Behavior Trees & AI', 'Combat Systems']

export default function Hero({ onViewProjects }) {
  return (
    <section id="home" className="relative overflow-hidden border-b border-base-700/60">
      <div className="bg-grid-fade pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl px-6 py-24 text-center md:py-32">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="section-eyebrow mb-4">Gameplay &amp; Animation Programmer</p>
          <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-ink-100 md:text-5xl">
            {personalInfo.name}
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-ink-300 md:text-base">{personalInfo.summary}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {focusAreas.map((f) => (
              <span key={f} className="tag-chip">
                {f}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button type="button" onClick={onViewProjects} className="btn-link border-accent text-accent">
              View Projects
            </button>
            <Link to="/cv" className="btn-link">
              Full CV
            </Link>
            <div className="ml-1 flex items-center gap-4 text-lg text-ink-300">
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
        </motion.div>
      </div>
    </section>
  )
}
