import { Link } from "react-router-dom";
import { posts } from "../data/posts";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <header className="hero">
        <h1>The Dev Blog</h1>
        <p>Thoughts on React, CSS, JavaScript, and the modern web.</p>
      </header>

      <main className="posts-grid">
        {posts.map((post) => (
          <article key={post.id} className="card">
            <span className="category">{post.category}</span>
            <h2 className="card-title">{post.title}</h2>
            <p className="card-summary">{post.summary}</p>
            <div className="card-footer">
              <span className="meta">{post.author} · {post.date}</span>
              <Link to={`/post/${post.id}`} className="read-more">
                Read more →
              </Link>
            </div>
          </article>
        ))}
      </main>
    </div>
  );
}
