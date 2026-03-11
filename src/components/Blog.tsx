import HeaderComp from "./HeaderComp";
import Footer from "./Footer";
import "./Blog.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BLOG_POSTS } from "../constants";

const Blog = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="blog-page">
      <HeaderComp />
      
      <main className="blog-container">
        <header className="blog-header">
          <h1 className="blog-title">EXPLORE OUR BLOG</h1>
          <p className="blog-subtitle">Latest Reviews, Lists & Movie News</p>
        </header>

        <section className="blog-grid">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="blog-card glass-morphism">
              <div className="blog-card-image">
                <img src={post.image} alt={post.title} />
                <div className="blog-card-overlay">
                  <span className="category-tag">{post.category}</span>
                </div>
              </div>
              
              <div className="blog-card-content">
                <h2 className="blog-post-title">{post.title}</h2>
                <p className="blog-post-excerpt">{post.description}</p>
                
                <footer className="blog-post-meta">
                  <div className="meta-left">
                    <span className="meta-item">
                      <i className="fa-regular fa-calendar"></i> {post.date}
                    </span>
                    <span className="meta-item">
                      <i className="fa-regular fa-comment"></i> {post.comments} COMMENTS
                    </span>
                  </div>
                  <button className="read-more-btn">
                    Read More <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </footer>
              </div>
            </article>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;