import { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaExpand, FaTimes } from 'react-icons/fa'

function Media({ item, title, className = '' }) {
  if (item.kind === 'youtube') {
    return (
      <iframe
        className={`h-full w-full ${className}`}
        src={`https://www.youtube.com/embed/${item.id}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    )
  }
  return <img src={item.src} alt={title} loading="lazy" className={`h-full w-full object-contain ${className}`} />
}

export default function Gallery({ items = [], title }) {
  const [index, setIndex] = useState(0)
  const [zoomed, setZoomed] = useState(false)

  const go = (delta) => setIndex((i) => (i + delta + items.length) % items.length)

  useEffect(() => {
    if (!zoomed) return
    const onKey = (e) => {
      if (e.key === 'Escape') setZoomed(false)
      if (e.key === 'ArrowLeft') go(-1)
      if (e.key === 'ArrowRight') go(1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [zoomed, items.length])

  if (!items.length) return null

  const active = items[index]
  const multiple = items.length > 1

  const arrowClass =
    'absolute top-1/2 z-10 -translate-y-1/2 p-3 text-2xl text-white/70 drop-shadow-lg transition-colors hover:text-white'

  return (
    <div
      // min-w-0 lets the thumbnail strip scroll instead of widening the grid column.
      className="w-full min-w-0 outline-none"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') go(-1)
        if (e.key === 'ArrowRight') go(1)
      }}
    >
      <div className="group relative aspect-video w-full overflow-hidden rounded-md bg-black/60 shadow-2xl ring-1 ring-white/10">
        <Media item={active} title={title} />

        {multiple && (
          <>
            <button type="button" aria-label="Previous" onClick={() => go(-1)} className={`${arrowClass} left-0`}>
              <FaChevronLeft />
            </button>
            <button type="button" aria-label="Next" onClick={() => go(1)} className={`${arrowClass} right-0`}>
              <FaChevronRight />
            </button>

            <div className="pointer-events-none absolute inset-x-0 bottom-3 flex justify-center gap-2">
              {items.map((_, i) => (
                <span
                  key={i}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    i === index ? 'bg-white' : 'border border-white/60 bg-transparent'
                  }`}
                />
              ))}
            </div>
          </>
        )}

        {active.kind !== 'youtube' && (
          <button
            type="button"
            aria-label="View full size"
            onClick={() => setZoomed(true)}
            className="absolute bottom-0.5 right-0.5 p-3.5 text-white/60 transition-colors hover:text-white"
          >
            <FaExpand />
          </button>
        )}
      </div>

      {multiple && (
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {items.map((item, i) => (
            <button
              type="button"
              key={i}
              aria-label={`Show item ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-12 w-[4.5rem] flex-shrink-0 overflow-hidden rounded border-2 transition-opacity md:h-14 md:w-20 ${
                i === index ? 'border-accent opacity-100' : 'border-transparent opacity-50 hover:opacity-90'
              }`}
            >
              <img src={item.thumbnail || item.src} alt="" loading="lazy" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}

      {zoomed && (
        <div
          role="presentation"
          onClick={() => setZoomed(false)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-10"
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setZoomed(false)}
            className="absolute right-4 top-4 p-2 text-2xl text-white/70 transition-colors hover:text-white"
          >
            <FaTimes />
          </button>
          <img
            src={active.src}
            alt={title}
            onClick={(e) => e.stopPropagation()}
            className="max-h-full max-w-full object-contain"
          />
        </div>
      )}
    </div>
  )
}
