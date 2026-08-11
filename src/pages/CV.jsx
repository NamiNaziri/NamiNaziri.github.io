import { FaGithub, FaLinkedin, FaItchIo, FaAward } from 'react-icons/fa'
import TagChip from '../components/TagChip'
import TimelineItem from '../components/TimelineItem'
import { personalInfo, experience, education, skills, awards, certificates } from '../data/cv.jsx'

function CVHeading({ children }) {
  return <h2 className="section-eyebrow mb-4 border-b border-base-700/60 pb-2">{children}</h2>
}

export default function CV() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <div className="panel flex flex-col items-center gap-5 p-8 text-center md:flex-row md:text-left">
        <img
          src={personalInfo.photo}
          alt={personalInfo.name}
          className="h-28 w-28 flex-shrink-0 rounded-full border-2 border-accent/40 object-cover"
        />
        <div>
          <h1 className="text-2xl font-bold text-ink-100 md:text-3xl">{personalInfo.name}</h1>
          <p className="section-eyebrow mt-1">{personalInfo.title}</p>
          <div className="mt-3 flex justify-center gap-4 text-lg text-ink-300 md:justify-start">
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
      </div>

      <p className="mt-8 text-sm leading-relaxed text-ink-300 md:text-base">{personalInfo.summary}</p>

      <div className="mt-12">
        <CVHeading>Skills</CVHeading>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {skills.map((group) => (
            <div key={group.title}>
              <h3 className="mb-2 text-sm font-semibold text-ink-100">{group.title}</h3>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <TagChip key={item}>{item}</TagChip>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <CVHeading>Experience</CVHeading>
        <div className="space-y-4">
          {experience.map((item) => (
            <TimelineItem key={item.title} item={item} />
          ))}
        </div>
      </div>

      <div className="mt-12">
        <CVHeading>Education</CVHeading>
        <div className="space-y-4">
          {education.map((item) => (
            <TimelineItem key={item.title} item={item} />
          ))}
        </div>
      </div>

      <div className="mt-12">
        <CVHeading>Awards</CVHeading>
        <ul className="space-y-4">
          {awards.map((award) => (
            <li key={award.title} className="flex gap-3">
              <FaAward className="mt-1 flex-shrink-0 text-accent" />
              <div>
                <p className="font-semibold text-ink-100">{award.title}</p>
                <div className="mt-1 text-sm text-ink-300">{award.body}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12">
        <CVHeading>Certificates</CVHeading>
        <ul className="space-y-2">
          {certificates.map((cert) => (
            <li key={cert.text}>
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-ink-100 hover:text-accent">
                {cert.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
