import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { featuredProjects } from '../data/projects'

// The projects link targets the first project panel, which is the top of that run.
const PROJECTS_ID = featuredProjects[0]?.slug ?? 'other-projects'

function scrollToSection(id, navigate, pathname) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
    return
  }
  if (pathname !== '/') {
    navigate('/')
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }, 80)
  }
}

export default function Nav({ transparent = false }) {
  const navigate = useNavigate()
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // The nav only stays see-through at the very top. Without snapping (mobile,
  // short viewports) content scrolls under it, so it needs a solid backdrop.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goTo = (id) => (e) => {
    e.preventDefault()
    setIsOpen(false)
    scrollToSection(id, navigate, location.pathname)
  }

  const linkClass = 'rounded px-3 py-2 text-ink-300 transition-colors hover:text-accent'
  const mobileLinkClass = 'rounded px-3 py-3.5 text-ink-300 transition-colors hover:text-accent'
  const shellClass =
    transparent && !isOpen && !scrolled
      ? 'border-transparent bg-gradient-to-b from-base-950/80 to-transparent'
      : 'border-base-700/60 bg-base-950/85 backdrop-blur'

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-colors ${shellClass}`}>
      {/* Fixed row height keeps the bar the same size on every breakpoint, so the
          top padding <main> reserves for it stays correct. */}
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="text-sm font-semibold tracking-wide text-ink-100" onClick={() => setIsOpen(false)}>
          Nami Naziri
        </Link>

        <div className="hidden items-center gap-1 font-mono text-xs uppercase tracking-widest md:flex">
          <a href={`#${PROJECTS_ID}`} onClick={goTo(PROJECTS_ID)} className={linkClass}>
            Projects
          </a>
          <Link to="/blog" className={linkClass}>
            Blog
          </Link>
          <Link to="/cv" className={linkClass}>
            CV
          </Link>
          <a href="#contact" onClick={goTo('contact')} className={linkClass}>
            Contact
          </a>
        </div>

        <button
          type="button"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
          className="-mr-3 p-3.5 text-ink-100 md:hidden"
        >
          {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>
      </nav>

      {isOpen && (
        <div className="flex flex-col border-t border-base-700/60 bg-base-950/95 px-6 pb-3 font-mono text-xs uppercase tracking-widest md:hidden">
          <a href={`#${PROJECTS_ID}`} onClick={goTo(PROJECTS_ID)} className={mobileLinkClass}>
            Projects
          </a>
          <Link to="/blog" className={mobileLinkClass} onClick={() => setIsOpen(false)}>
            Blog
          </Link>
          <Link to="/cv" className={mobileLinkClass} onClick={() => setIsOpen(false)}>
            CV
          </Link>
          <a href="#contact" onClick={goTo('contact')} className={mobileLinkClass}>
            Contact
          </a>
        </div>
      )}
    </header>
  )
}
