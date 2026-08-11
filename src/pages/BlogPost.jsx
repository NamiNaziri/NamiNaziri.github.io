import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import cpp from 'react-syntax-highlighter/dist/esm/languages/prism/cpp'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { FaArrowLeft } from 'react-icons/fa'
import { postBySlug } from '../data/blog'

SyntaxHighlighter.registerLanguage('cpp', cpp)

export default function BlogPost() {
  const { slug } = useParams()
  const post = postBySlug(slug)
  const [markdown, setMarkdown] = useState(null)

  useEffect(() => {
    if (!post) return
    setMarkdown(null)
    fetch(`${import.meta.env.BASE_URL}${post.file}`)
      .then((res) => res.text())
      .then(setMarkdown)
  }, [post])

  if (!post) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="text-ink-300">Post not found.</p>
        <Link to="/blog" className="btn-link mt-6 inline-flex">
          <FaArrowLeft /> Back to Blog
        </Link>
      </div>
    )
  }

  return (
    <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <Link to="/blog" className="btn-link mb-8 inline-flex">
        <FaArrowLeft /> Back to Blog
      </Link>
      <p className="section-eyebrow mb-2">{post.date}</p>
      {markdown ? (
        <div className="prose-blog">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              code(props) {
                const { children, className, ...rest } = props
                const match = /language-(\w+)/.exec(className || '')
                return match ? (
                  <SyntaxHighlighter {...rest} PreTag="div" language={match[1]} style={atomDark}>
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code {...rest} className={className}>
                    {children}
                  </code>
                )
              },
            }}
          >
            {markdown}
          </ReactMarkdown>
        </div>
      ) : (
        <div className="h-64 animate-pulse rounded bg-base-800" />
      )}
    </article>
  )
}
