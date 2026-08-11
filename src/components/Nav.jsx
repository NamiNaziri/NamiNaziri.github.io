import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

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

export default function Nav() {
  const navigate = useNavigate()
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  const goTo = (id) => (e) => {
    e.preventDefault()
    setIsOpen(false)
    scrollToSection(id, navigate, location.pathname)
  }

  const linkClass = 'rounded px-3 py-2 text-ink-300 transition-colors hover:text-accent'

  return (
    <header className="sticky top-0 z-50 border-b border-base-700/60 bg-base-950/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link to="/" className="text-sm font-semibold tracking-wide text-ink-100" onClick={() => setIsOpen(false)}>
          Nami Naziri
        </Link>

        <div className="hidden items-center gap-1 font-mono text-xs uppercase tracking-widest md:flex">
          <a href="#projects" onClick={goTo('projects')} className={linkClass}>
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
          className="p-2 text-ink-100 md:hidden"
        >
          {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>
      </nav>

      {isOpen && (
        <div className="flex flex-col border-t border-base-700/60 px-6 py-2 font-mono text-xs uppercase tracking-widest md:hidden">
          <a href="#projects" onClick={goTo('projects')} className={linkClass}>
            Projects
          </a>
          <Link to="/blog" className={linkClass} onClick={() => setIsOpen(false)}>
            Blog
          </Link>
          <Link to="/cv" className={linkClass} onClick={() => setIsOpen(false)}>
            CV
          </Link>
          <a href="#contact" onClick={goTo('contact')} className={linkClass}>
            Contact
          </a>
        </div>
      )}
    </header>
  )
}
