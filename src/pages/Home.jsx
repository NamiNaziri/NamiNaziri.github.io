import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Section from '../components/Section'
import ProjectPanel from '../components/ProjectPanel'
import SectionDots from '../components/SectionDots'
import Footer from '../components/Footer'
import TagChip from '../components/TagChip'
import TimelineItem from '../components/TimelineItem'
import { featuredProjects, otherProjects } from '../data/projects'
import { skills, experience } from '../data/cv.jsx'

export default function Home() {
  // Full-page snapping is a document-level behaviour, so it is scoped to this
  // route by a class on <html> rather than baked into the global stylesheet.
  useEffect(() => {
    document.documentElement.classList.add('snap-home')
    return () => document.documentElement.classList.remove('snap-home')
  }, [])

  const scrollToProjects = () => {
    document.getElementById(featuredProjects[0]?.slug)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <SectionDots />

      <Hero onViewProjects={scrollToProjects} />

      {featuredProjects.map((project) => (
        <ProjectPanel key={project.slug} project={project} />
      ))}

      <Section
        panel
        id="other-projects"
        panelLabel="Other Projects"
        eyebrow="Also Built"
        title="Other Projects"
        description="Smaller technical explorations in animation math, rendering, and engine prototyping."
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {otherProjects.map((project) => {
            const external = project.link.startsWith('http')
            const CardTag = external ? 'a' : Link
            const linkProps = external
              ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' }
              : { to: project.link }
            return (
              <CardTag
                key={project.slug}
                {...linkProps}
                className="panel group flex flex-col overflow-hidden transition-colors hover:border-accent/60"
              >
                <div className="aspect-video w-full overflow-hidden bg-base-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="font-semibold text-ink-100">{project.title}</h3>
                  <p className="mt-1 flex-1 text-sm text-ink-300 line-clamp-3">{project.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.tags.map((t) => (
                      <TagChip key={t}>{t}</TagChip>
                    ))}
                  </div>
                </div>
              </CardTag>
            )
          })}
        </div>
      </Section>

      <Section panel id="skills" eyebrow="Toolbox" title="Skills">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group) => (
            <div key={group.title} className="panel p-4">
              <h4 className="mb-3 font-mono text-xs uppercase tracking-widest text-accent/80">{group.title}</h4>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <TagChip key={item}>{item}</TagChip>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        panel
        id="experience"
        eyebrow="Career"
        title="Experience"
        description="The full history, including education and certificates, lives on the CV page."
      >
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {experience.map((item) => (
            <TimelineItem key={item.title} item={item} compact />
          ))}
        </div>
        <Link to="/cv" className="btn-link mt-6 inline-flex">
          View Full CV
        </Link>
      </Section>

      <Footer variant="panel" />
    </>
  )
}
