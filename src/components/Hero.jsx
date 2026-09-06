import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaItchIo, FaChevronDown } from 'react-icons/fa'
import { personalInfo } from '../data/cv.jsx'

const focusAreas = ['Motion Matching', 'Procedural Animation', 'Inverse Kinematics', 'Behavior Trees & AI', 'Combat Systems']

export default function Hero({ onViewProjects }) {
  return (
    <section id="home" data-panel="Intro" className="snap-panel items-center overflow-hidden">
      <div className="bg-grid-fade pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="section-eyebrow mb-4">{personalInfo.title}</p>
          <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-ink-100 md:text-7xl">
            {personalInfo.name}
          </h1>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {focusAreas.map((f) => (
              <span key={f} className="pill">
                {f}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
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

      <button
        type="button"
        onClick={onViewProjects}
        aria-label="Scroll to projects"
        className="hide-when-short absolute inset-x-0 bottom-8 z-10 mx-auto animate-bounce text-ink-500 transition-colors hover:text-accent"
      >
        <FaChevronDown className="mx-auto" />
      </button>
    </section>
  )
}
