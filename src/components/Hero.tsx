import { NavLink, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import HeaderComp from "./HeaderComp";
import { useEffect } from "react";
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="hero-page">
      <HeaderComp />
      
      <main className="hero-main-container">
        <section className="hero-split-section">
          <div className="hero-container-elite">
            {/* Left Column: Text Content */}
            <div className="hero-text-side">
              <div className="hero-badge">AI POWERED DISCOVERY</div>
              <h1 className="hero-title-elite">
                Your <span className="text-gradient">Cinematic</span><br />Journey Begins Here
              </h1>
              <p className="hero-description-elite">
                Don't settle for average entertainment. Our advanced recommendation engine transforms your preferences into a personalized cinematic roadmap.
              </p>
              <div className="hero-action-group">
                <NavLink to="/question1" className="hero-nav-link">
                  <button className="primary-button-elite">
                    <span>Start Discovery</span>
                    <i className="fa-solid fa-play"></i>
                  </button>
                </NavLink>
                <button className="secondary-button-elite" onClick={() => document.getElementById('video-section')?.scrollIntoView({ behavior: 'smooth' })}>
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Right Column: Hero Image */}
            <div className="hero-image-side">
              <div className="hero-main-image-wrap">
                <img src="/images/hero_backdrop.png" alt="Cinema Experience" className="hero-main-image" />
                <div className="hero-image-overlay"></div>
                {/* Floating Elements for Premium Feel */}
                <div className="floating-card rating-card">
                  <i className="fa-solid fa-star"></i>
                  <span>4.9 / 5.0 Rating</span>
                </div>
                <div className="floating-card stream-card">
                  <i className="fa-solid fa-clapperboard"></i>
                  <span>10k+ Movies</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="video-section" className="hero-video-section">
          <div className="section-header-elite">
            <h2 className="section-title-elite">Experience the Magic</h2>
            <div className="section-line"></div>
          </div>
          <div className="video-container-elite">
            <div className="video-inner">
              <iframe
                src="https://www.youtube.com/embed/HihakYi5M2I?si=bTNNc2vxl7Vhgrzc&autoplay=0&mute=1"
                title="Movie Section Preview"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-glow"></div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Hero;