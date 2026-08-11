import { Link, useLocation, useNavigate } from 'react-router-dom'

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

  const goTo = (id) => (e) => {
    e.preventDefault()
    scrollToSection(id, navigate, location.pathname)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-base-700/60 bg-base-950/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link to="/" className="text-sm font-semibold tracking-wide text-ink-100">
          Nami Naziri
        </Link>
        <div className="flex items-center gap-1 font-mono text-xs uppercase tracking-widest">
          <a href="#projects" onClick={goTo('projects')} className="rounded px-3 py-2 text-ink-300 transition-colors hover:text-accent">
            Projects
          </a>
          <Link to="/blog" className="rounded px-3 py-2 text-ink-300 transition-colors hover:text-accent">
            Blog
          </Link>
          <Link to="/cv" className="rounded px-3 py-2 text-ink-300 transition-colors hover:text-accent">
            CV
          </Link>
          <a href="#contact" onClick={goTo('contact')} className="rounded px-3 py-2 text-ink-300 transition-colors hover:text-accent">
            Contact
          </a>
        </div>
      </nav>
    </header>
  )
}
