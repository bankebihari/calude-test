import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="brand">
          ✦ The Dev Blog
        </Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <a href="#" className="subscribe-btn">Subscribe</a>
        </div>
      </div>
    </nav>
  );
}
