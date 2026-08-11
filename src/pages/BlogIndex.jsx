import { Link } from 'react-router-dom'
import TagChip from '../components/TagChip'
import { posts } from '../data/blog'

export default function BlogIndex() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <p className="section-eyebrow mb-3">Notes &amp; Devlogs</p>
      <h1 className="text-3xl font-bold text-ink-100 md:text-4xl">Blog</h1>
      <p className="mt-3 max-w-2xl text-sm text-ink-300 md:text-base">
        Devlogs and notes on animation and gameplay-AI systems, plus talks worth revisiting.
      </p>

      <div className="mt-10 space-y-4">
        {posts.map((post) => (
          <Link key={post.slug} to={`/blog/${post.slug}`} className="panel block p-5 transition-colors hover:border-accent/60">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="font-semibold text-ink-100">{post.title}</h2>
              <span className="font-mono text-[11px] uppercase tracking-wide text-ink-500">{post.date}</span>
            </div>
            <p className="mt-2 text-sm text-ink-300">{post.excerpt}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {post.tags.map((t) => (
                <TagChip key={t}>{t}</TagChip>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
