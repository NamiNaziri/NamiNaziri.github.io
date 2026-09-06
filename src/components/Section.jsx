/**
 * A content section. With `panel` it becomes a full-height scroll-snap page
 * (see `.snap-panel` in index.css) and registers itself with the dot rail.
 */
export default function Section({ id, eyebrow, title, description, panelLabel, panel = false, children, className = '' }) {
  const layout = panel
    ? 'snap-panel px-6 py-20'
    : 'relative mx-auto w-full max-w-6xl px-6 py-20 md:py-28'

  return (
    <section id={id} data-panel={panel ? panelLabel || title : undefined} className={`${layout} ${className}`}>
      <div className={panel ? 'mx-auto max-h-full w-full max-w-6xl overflow-y-auto' : ''}>
        {(eyebrow || title) && (
          <div className={panel ? 'mb-8' : 'mb-10 md:mb-14'}>
            {eyebrow && <p className="section-eyebrow mb-3">{eyebrow}</p>}
            {title && <h2 className="text-2xl font-bold tracking-tight text-ink-100 md:text-4xl">{title}</h2>}
            {description && <p className="mt-3 max-w-2xl text-sm text-ink-300 md:text-base">{description}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
