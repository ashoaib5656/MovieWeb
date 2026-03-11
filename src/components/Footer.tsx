import "./Footer.css";

const Footer = () => {
  return (
    <footer className="production-footer">
      <div className="footer-container">
        {/* Top Section: Branding & Newsletter */}
        <div className="footer-top-row">
          <div className="footer-brand-side">
            <h2 className="footer-logo">MOVI<span>E</span> SECTION</h2>
            <p className="brand-tagline">Experience Cinema Intelligence.</p>
          </div>
          <div className="footer-newsletter-side">
            <div className="newsletter-wrap">
              <p>Subscribe for cinematic updates</p>
              <div className="newsletter-input-group">
                <input type="email" placeholder="Email Address" />
                <button className="join-btn">JOIN</button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content: Original Text & Modern Columns */}
        <div className="footer-main-grid">
          {/* Column 1: Original Description */}
          <div className="footer-main-col info-col">
            <h3 className="col-title">THE SMART WAY TO PICK A MOVIE.</h3>
            <p>
              Watching movies is fun, but figuring out what movie to watch next is a nerve-racking experience. 
              Endlessly scrolling through Netflix, watching trailers on YouTube, looking up IMDb ratings, wasting half an hour and still cannot decide what to watch – does this seem familiar to you?
            </p>
            <p>
              Our movie recommendation engine is the answer to "What movie should I watch?". Your film choices are about to be simplified greatly.
            </p>
          </div>

          {/* Column 2: Original Features */}
          <div className="footer-main-col features-col">
            <h3 className="col-title">WHY USE OUR ENGINE?</h3>
            <ul className="footer-feature-list">
              <li>Hand-picked movies tagged by connoisseurs</li>
              <li>Considers your mood and the occasion</li>
              <li>Watch trailers directly on our website</li>
              <li>Single recommendation for easier decision</li>
              <li>Special categories: Spy, Heist, True Stories & more</li>
              <li>New recommendations added consistently</li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="footer-main-col links-col">
            <h3 className="col-title">QUICK LINKS</h3>
            <ul className="footer-simple-list">
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Feedback</a></li>
            </ul>
          </div>

          {/* Column 4: Socials */}
          <div className="footer-main-col social-col">
            <h3 className="col-title">COMMUNITY</h3>
            <div className="footer-social-links">
              <a href="#" className="s-icon"><i className="fa-brands fa-x-twitter"></i> Twitter</a>
              <a href="#" className="s-icon"><i className="fa-brands fa-instagram"></i> Instagram</a>
              <a href="#" className="s-icon"><i className="fa-brands fa-youtube"></i> YouTube</a>
              <a href="#" className="s-icon"><i className="fa-brands fa-discord"></i> Discord</a>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="footer-stats-strip">
          <div className="stat-pill-elite">
            <span className="s-val">760+</span> <span className="s-label">MOVIES</span>
          </div>
          <div className="stat-pill-elite">
            <span className="s-val">20</span> <span className="s-label">GENRES</span>
          </div>
          <div className="stat-pill-elite">
            <span className="s-val">10K+</span> <span className="s-label">ACTORS</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copy-text">© {new Date().getFullYear()} MOVIEGEN. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;