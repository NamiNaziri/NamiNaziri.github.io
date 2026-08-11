import { Link } from 'react-router-dom'
import { FaAward } from 'react-icons/fa'
import Hero from '../components/Hero'
import Section from '../components/Section'
import ProjectCard from '../components/ProjectCard'
import TagChip from '../components/TagChip'
import TimelineItem from '../components/TimelineItem'
import { featuredProjects, otherProjects } from '../data/projects'
import { skills, experience, awards } from '../data/cv.jsx'

export default function Home() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Hero onViewProjects={scrollToProjects} />

      <Section
        id="projects"
        eyebrow="Selected Work"
        title="Featured Projects"
        description="Gameplay and animation systems shipped in Unreal Engine — motion matching, combat, AI, and procedural interaction."
      >
        <div className="space-y-8">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} reverse={i % 2 === 1} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Also Built" title="Other Projects" description="Smaller technical explorations in animation math, rendering, and engine prototyping.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
                  <p className="mt-1 flex-1 text-sm text-ink-300">{project.description}</p>
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

      <Section eyebrow="Toolbox" title="Skills">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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

      <Section eyebrow="Career" title="Experience" description="The full history, including education and certificates, lives on the CV page.">
        <div className="space-y-4">
          {experience.map((item) => (
            <TimelineItem key={item.title} item={item} compact />
          ))}
        </div>
        <Link to="/cv" className="btn-link mt-6 inline-flex">
          View Full CV
        </Link>
      </Section>

      <Section eyebrow="Recognition" title="Awards">
        <ul className="space-y-4">
          {awards.map((award) => (
            <li key={award.title} className="panel flex gap-3 p-4">
              <FaAward className="mt-1 flex-shrink-0 text-accent" />
              <div>
                <p className="font-semibold text-ink-100">{award.title}</p>
                <div className="mt-1 text-sm text-ink-300">{award.body}</div>
              </div>
            </li>
          ))}
        </ul>
      </Section>
    </>
  )
}
