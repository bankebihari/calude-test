import { useParams, Link, useNavigate } from "react-router-dom";
import { posts } from "../data/posts";
import "./Post.css";

export default function Post() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="not-found">
        <h2>Post not found</h2>
        <Link to="/" className="back-link">← Back to Home</Link>
      </div>
    );
  }

  // Render markdown-like content (simple paragraph + heading support)
  const renderContent = (text) => {
    return text.split("\n\n").map((block, i) => {
      if (block.startsWith("## ")) {
        return <h2 key={i}>{block.replace("## ", "")}</h2>;
      }
      if (block.startsWith("```")) {
        const code = block.replace(/```[a-z]*\n?/, "").replace(/```$/, "");
        return <pre key={i}><code>{code}</code></pre>;
      }
      // Inline bold
      const parts = block.split(/\*\*(.+?)\*\*/g);
      return (
        <p key={i}>
          {parts.map((part, j) =>
            j % 2 === 1 ? <strong key={j}>{part}</strong> : part
          )}
        </p>
      );
    });
  };

  return (
    <div className="post-page">
      <div className="post-container">
        <button onClick={() => navigate(-1)} className="back-link">
          ← Back
        </button>

        <article>
          <div className="post-header">
            <span className="category">{post.category}</span>
            <h1>{post.title}</h1>
            <div className="post-meta">
              <span>{post.author}</span>
              <span className="dot">·</span>
              <span>{post.date}</span>
            </div>
          </div>

          <div className="post-body">{renderContent(post.content)}</div>
        </article>

        <div className="post-nav">
          {posts.find((p) => p.id === post.id - 1) && (
            <Link to={`/post/${post.id - 1}`} className="nav-link prev">
              ← {posts.find((p) => p.id === post.id - 1).title}
            </Link>
          )}
          {posts.find((p) => p.id === post.id + 1) && (
            <Link to={`/post/${post.id + 1}`} className="nav-link next">
              {posts.find((p) => p.id === post.id + 1).title} →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
