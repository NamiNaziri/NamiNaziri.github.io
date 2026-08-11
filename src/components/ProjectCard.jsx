import { Link } from 'react-router-dom'
import { FaItchIo, FaGithub, FaSteam, FaArrowRight } from 'react-icons/fa'
import { IoGameController } from 'react-icons/io5'
import Gallery from './Gallery'
import TagChip from './TagChip'

const LINK_META = {
  itch: { label: 'itch.io', icon: FaItchIo },
  github: { label: 'GitHub', icon: FaGithub },
  steam: { label: 'Steam', icon: FaSteam },
  play: { label: 'Watch Demo', icon: IoGameController },
  blog: { label: 'Devlog', icon: FaArrowRight },
  more: { label: 'More', icon: FaArrowRight },
}

export default function ProjectCard({ project, reverse = false }) {
  return (
    <article className="panel overflow-hidden">
      <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
        <div className={`p-3 md:p-4 ${reverse ? 'md:order-2' : ''}`}>
          <Gallery items={project.gallery} title={project.title} />
        </div>
        <div className="flex flex-col justify-center p-6 md:p-8">
          {project.role && <p className="section-eyebrow mb-2">{project.role}</p>}
          <h3 className="text-xl font-bold text-ink-100 md:text-2xl">{project.title}</h3>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tags.map((t) => (
              <TagChip key={t}>{t}</TagChip>
            ))}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-ink-300">{project.description}</p>
          {project.highlights?.length > 0 && (
            <ul className="mt-4 space-y-1.5 text-sm text-ink-300">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-6 flex flex-wrap gap-2">
            {Object.entries(project.links || {}).map(([key, href]) => {
              const meta = LINK_META[key]
              if (!meta) return null
              const Icon = meta.icon
              return href.startsWith('http') ? (
                <a key={key} href={href} target="_blank" rel="noopener noreferrer" className="btn-link">
                  <Icon /> {meta.label}
                </a>
              ) : (
                <Link key={key} to={href} className="btn-link">
                  <Icon /> {meta.label}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </article>
  )
}
