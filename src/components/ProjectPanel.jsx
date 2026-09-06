import { Link } from 'react-router-dom'
import { FaItchIo, FaGithub, FaSteam, FaArrowRight } from 'react-icons/fa'
import { IoGameController } from 'react-icons/io5'
import Gallery from './Gallery'

// Each link type keeps the accent colour it had in the reference design.
const LINK_META = {
  steam: { label: 'Steam', icon: FaSteam, className: 'border-sky-400/70 text-sky-300 hover:bg-sky-400/15' },
  itch: { label: 'Itch.io', icon: FaItchIo, className: 'border-rose-400/70 text-rose-300 hover:bg-rose-400/15' },
  github: { label: 'GitHub', icon: FaGithub, className: 'border-white/40 text-ink-100 hover:bg-white/10' },
  play: { label: 'Play', icon: IoGameController, className: 'border-amber-400/70 text-amber-300 hover:bg-amber-400/15' },
  more: { label: 'More', icon: FaArrowRight, className: 'border-amber-400/70 text-amber-300 hover:bg-amber-400/15' },
  blog: { label: 'Devlog', icon: FaArrowRight, className: 'border-amber-400/70 text-amber-300 hover:bg-amber-400/15' },
}

export default function ProjectPanel({ project }) {
  return (
    <section id={project.slug} data-panel={project.title} className="snap-panel overflow-hidden">
      {/* Blurred key art fills the panel, then is darkened so the copy stays readable. */}
      <div className="absolute inset-0" aria-hidden="true">
        {project.poster && (
          <img
            src={project.poster}
            alt=""
            className="h-full w-full scale-110 object-cover blur-xl md:blur-2xl"
          />
        )}
        {/* Darkest behind the gallery, easing off to the right so the key art still reads. */}
        <div className="absolute inset-0 bg-base-950/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-base-950/90 via-base-950/60 to-base-950/35" />
      </div>

      {/* Three blocks in source order title -> media -> detail, which is how it
          reads stacked on a phone. From md up, grid placement puts the gallery in
          its own column beside the two text blocks. */}
      <div className="relative z-10 mx-auto grid max-h-full w-full max-w-7xl items-center gap-6 overflow-y-auto px-6 py-24 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] md:grid-rows-[auto_auto] md:gap-x-12 md:gap-y-0 md:py-20">
        <div className="min-w-0 [text-shadow:0_1px_12px_rgba(0,0,0,0.85)] md:col-start-2 md:row-start-1">
          {project.role && <p className="section-eyebrow mb-3">{project.role}</p>}

          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">{project.title}</h2>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span key={t} className="pill">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="min-w-0 md:col-start-1 md:row-start-1 md:row-span-2 md:self-center">
          <Gallery items={project.gallery} title={project.title} />
        </div>

        <div className="min-w-0 [text-shadow:0_1px_12px_rgba(0,0,0,0.85)] md:col-start-2 md:row-start-2">
          <p className="text-sm leading-relaxed text-ink-100/85 md:mt-6 md:text-base md:text-justify">
            {project.description}
          </p>

          {project.highlights?.length > 0 && (
            <ul className="mt-5 hidden space-y-2 text-sm text-ink-100/75 lg:block">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-2.5">
                  <span className="mt-[0.45rem] h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-8 flex flex-wrap gap-3">
            {Object.entries(project.links || {}).map(([key, href]) => {
              const meta = LINK_META[key]
              if (!meta) return null
              const Icon = meta.icon
              const className = `btn-panel ${meta.className}`
              return href.startsWith('http') ? (
                <a key={key} href={href} target="_blank" rel="noopener noreferrer" className={className}>
                  <Icon /> {meta.label}
                </a>
              ) : (
                <Link key={key} to={href} className={className}>
                  <Icon /> {meta.label}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
