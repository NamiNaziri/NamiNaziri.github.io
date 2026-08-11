export default function TimelineItem({ item, compact = false }) {
  return (
    <div className="panel flex gap-4 p-4 md:p-5">
      {item.image && (
        <img src={item.image} alt="" className="h-12 w-12 flex-shrink-0 rounded object-cover md:h-14 md:w-14" />
      )}
      <div className="min-w-0">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h4 className="font-semibold text-ink-100">{item.title}</h4>
          <span className="font-mono text-[11px] uppercase tracking-wide text-accent/80">{item.date}</span>
        </div>
        <p className="text-sm font-medium text-ink-300">{item.org}</p>
        {item.location && <p className="text-xs text-ink-500">{item.location}</p>}
        {item.description && (
          <p className={`mt-2 text-sm leading-relaxed text-ink-300 ${compact ? 'line-clamp-3' : ''}`}>
            {item.description}
          </p>
        )}
        {!compact && item.highlights?.length > 0 && (
          <ul className="mt-2 space-y-1.5 text-sm text-ink-300">
            {item.highlights.map((h) => (
              <li key={h} className="flex gap-2">
                <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
