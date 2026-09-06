import { useEffect, useState } from 'react'

/**
 * Fixed dot rail down the right edge, one dot per `[data-panel]` section.
 * Panels are discovered from the DOM so Home stays the single source of order.
 */
export default function SectionDots() {
  const [panels, setPanels] = useState([])
  const [activeId, setActiveId] = useState(null)

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll('[data-panel]'))
    setPanels(nodes.map((n) => ({ id: n.id, label: n.dataset.panel })))

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveId(visible.target.id)
      },
      { threshold: [0.25, 0.5, 0.75] }
    )
    nodes.forEach((n) => observer.observe(n))
    return () => observer.disconnect()
  }, [])

  if (panels.length < 2) return null

  return (
    <nav aria-label="Section navigation" className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 lg:flex">
      {panels.map((panel) => {
        const isActive = panel.id === activeId
        return (
          <a
            key={panel.id}
            href={`#${panel.id}`}
            aria-label={panel.label}
            aria-current={isActive ? 'true' : undefined}
            onClick={(e) => {
              e.preventDefault()
              document.getElementById(panel.id)?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="group relative flex items-center justify-center p-1"
          >
            <span
              className={`rounded-full transition-all duration-200 ${
                isActive ? 'h-2.5 w-2.5 bg-accent' : 'h-1.5 w-1.5 bg-white/40 group-hover:bg-white/80'
              }`}
            />
            <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded bg-base-900/90 px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-ink-100 opacity-0 transition-opacity group-hover:opacity-100">
              {panel.label}
            </span>
          </a>
        )
      })}
    </nav>
  )
}
