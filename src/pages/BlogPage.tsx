import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blogPosts'

export function BlogPage() {
  return (
    <section className="blog-shell">
      <div className="page-heading">
        <p className="eyebrow">Stories & analysis</p>
        <h1>Blog</h1>
      </div>
      <div className="blog-filters">
        <button className="ghost-button is-active">All</button>
        <button className="ghost-button">By brand</button>
        <button className="ghost-button">Personalized feed</button>
      </div>
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <article className="blog-card" key={post.id}>
            <div className="blog-card-media">
              <img src={post.image} alt="" />
            </div>
            <div className="blog-card-body">
              <p className="blog-meta">{post.readTime}</p>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <Link to={`/blog/${post.id}`} className="ghost-button">
                Read
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

