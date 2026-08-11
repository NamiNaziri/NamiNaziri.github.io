import { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export default function Gallery({ items = [], title }) {
  const [index, setIndex] = useState(0)

  if (!items.length) return null

  const active = items[index]
  const go = (delta) => setIndex((i) => (i + delta + items.length) % items.length)

  return (
    <div
      className="w-full outline-none"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') go(-1)
        if (e.key === 'ArrowRight') go(1)
      }}
    >
      <div className="relative aspect-video w-full overflow-hidden rounded-md border border-base-600 bg-base-950">
        {active.kind === 'youtube' ? (
          <iframe
            className="h-full w-full"
            src={`https://www.youtube.com/embed/${active.id}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <img src={active.src} alt={title} loading="lazy" className="h-full w-full object-contain" />
        )}
        {items.length > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous"
              onClick={() => go(-1)}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-base-500 bg-base-950/70 p-2 text-ink-100 transition-colors hover:border-accent hover:text-accent"
            >
              <FaChevronLeft size={12} />
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={() => go(1)}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-base-500 bg-base-950/70 p-2 text-ink-100 transition-colors hover:border-accent hover:text-accent"
            >
              <FaChevronRight size={12} />
            </button>
          </>
        )}
      </div>
      {items.length > 1 && (
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {items.map((item, i) => (
            <button
              type="button"
              key={i}
              onClick={() => setIndex(i)}
              className={`h-14 w-20 flex-shrink-0 overflow-hidden rounded border transition-opacity ${
                i === index ? 'border-accent opacity-100' : 'border-base-600 opacity-50 hover:opacity-90'
              }`}
            >
              <img src={item.thumbnail || item.src} alt="" loading="lazy" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
