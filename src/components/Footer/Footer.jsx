import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container container">
        {/* Top Section */}
        <div className="footer__top">
          {/* Logo & Info */}
          <div className="footer__brand">
            <span className="footer__logo">elementum</span>
            <p className="footer__tagline">
              A multidisciplinary creative agency building standard-challenging digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer__nav">
            <h4 className="footer__heading">Navigation</h4>
            <ul className="footer__list">
              <li><a href="#home" className="footer__link">Home</a></li>
              <li><a href="#studio" className="footer__link">Studio</a></li>
              <li><a href="#services" className="footer__link">Services</a></li>
              <li><a href="#contact" className="footer__link">Contact</a></li>
              <li><a href="#faqs" className="footer__link">FAQs</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="footer__contact">
            <h4 className="footer__heading">Get in touch</h4>
            <p className="footer__contact-text">hello@elementum.agency</p>
            <p className="footer__contact-text">+1 (555) 019-2834</p>
            <p className="footer__contact-text">Brooklyn, New York</p>
          </div>

          {/* Socials */}
          <div className="footer__socials">
            <h4 className="footer__heading">Follow us</h4>
            <div className="footer__social-icons">
              <a href="https://linkedin.com" className="footer__social-link" aria-label="LinkedIn" target="_blank" rel="noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="https://twitter.com" className="footer__social-link" aria-label="Twitter" target="_blank" rel="noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="https://dribbble.com" className="footer__social-link" aria-label="Dribbble" target="_blank" rel="noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.49-11.05 1-11.6 8.56"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {currentYear} Elementum Creative Agency. All rights reserved.
          </p>
          <div className="footer__bottom-links">
            <a href="#privacy" className="footer__bottom-link">Privacy Policy</a>
            <a href="#terms" className="footer__bottom-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
