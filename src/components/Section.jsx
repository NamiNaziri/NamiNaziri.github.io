export default function Section({ id, eyebrow, title, description, children, className = '' }) {
  return (
    <section id={id} className={`relative mx-auto w-full max-w-6xl px-6 py-20 md:py-28 ${className}`}>
      {(eyebrow || title) && (
        <div className="mb-10 md:mb-14">
          {eyebrow && <p className="section-eyebrow mb-3">{eyebrow}</p>}
          {title && <h2 className="text-2xl font-bold tracking-tight text-ink-100 md:text-4xl">{title}</h2>}
          {description && <p className="mt-3 max-w-2xl text-sm text-ink-300 md:text-base">{description}</p>}
        </div>
      )}
      {children}
    </section>
  )
}
