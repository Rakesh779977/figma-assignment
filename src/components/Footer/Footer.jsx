import { useState } from 'react';
import './Footer.css';

const navLinks = ['About us', 'Services', 'Use Cases', 'Pricing', 'Blog'];

function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Subscribed:', email);
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="footer__inner">
        {/* --- Top Section --- */}
        <div className="footer__top">
          <a href="#" className="footer__logo">
            <span className="footer__logo-star">★</span>
            <span className="footer__logo-text">Positivus</span>
          </a>

          <nav className="footer__nav">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="footer__nav-link">
                {link}
              </a>
            ))}
          </nav>

          <div className="footer__socials">
            {/* LinkedIn */}
            <a href="#" className="footer__social-link" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z"
                  fill="#B9FF66"
                />
              </svg>
            </a>
            {/* Facebook */}
            <a href="#" className="footer__social-link" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z"
                  fill="#B9FF66"
                />
              </svg>
            </a>
            {/* Twitter / X */}
            <a href="#" className="footer__social-link" aria-label="Twitter">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                  fill="#B9FF66"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* --- Middle Section --- */}
        <div className="footer__middle">
          <div className="footer__contact">
            <h3 className="footer__contact-title">
              <span className="footer__contact-pill">Contact us:</span>
            </h3>
            <p className="footer__contact-item">
              Email: info@positivus.com
            </p>
            <p className="footer__contact-item">
              Phone: 555-567-8901
            </p>
            <p className="footer__contact-item">
              Address: 1234 Main St
              <br />
              Moonstone City, Stateflix 256706
            </p>
          </div>

          <div className="footer__newsletter">
            <form className="footer__newsletter-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                className="footer__newsletter-input"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email for newsletter"
              />
              <button type="submit" className="footer__newsletter-btn">
                Subscribe to news
              </button>
            </form>
          </div>
        </div>

        {/* --- Bottom Section --- */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © 2024 Positivus. All Rights Reserved.
          </p>
          <a href="#" className="footer__privacy">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
