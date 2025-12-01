import { Link, Navigate, useParams } from 'react-router-dom'
import { blogPosts } from '../data/blogPosts'

export function BlogArticlePage() {
  const { articleId } = useParams()
  const article = blogPosts.find((post) => post.id === articleId)

  if (!article) {
    return <Navigate to="/blog" replace />
  }

  return (
    <article className="article-shell">
      <Link to="/blog" className="ghost-button back-link">
        ← Back to blog
      </Link>
      <p className="eyebrow">Stories & analysis</p>
      <h1>{article.title}</h1>
      <p className="blog-meta">{article.readTime}</p>
      <div className="article-hero">
        <img src={article.image} alt="" />
      </div>
      <section className="article-content">
        {article.content.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>
    </article>
  )
}

