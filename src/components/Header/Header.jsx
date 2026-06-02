import { useState, useEffect } from 'react';
import './Header.css';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Studio', href: '#studio' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
  { label: 'FAQs', href: '#faqs' },
];

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="header__container">
        {/* Logo */}
        <a href="#home" className="header__logo" aria-label="Elementum Home">
          <span className="header__logo-text">elementum</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="header__nav" aria-label="Main navigation">
          <ul className="header__nav-list">
            {NAV_LINKS.map((link) => (
              <li key={link.label} className="header__nav-item">
                <a href={link.href} className="header__nav-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Elements: Profile & Hamburger */}
        <div className="header__actions">
          <button className="header__action-btn header__profile-btn" aria-label="User Profile">
            <svg
              className="header__profile-icon"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>

          <button
            className={`header__hamburger${mobileMenuOpen ? ' header__hamburger--active' : ''}`}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className="header__hamburger-line" />
            <span className="header__hamburger-line" />
            <span className="header__hamburger-line" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`header__overlay${mobileMenuOpen ? ' header__overlay--visible' : ''}`}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />

      <nav
        id="mobile-menu"
        className={`header__mobile-nav${mobileMenuOpen ? ' header__mobile-nav--open' : ''}`}
        aria-label="Mobile navigation"
      >
        <ul className="header__mobile-list">
          {NAV_LINKS.map((link) => (
            <li key={link.label} className="header__mobile-item">
              <a
                href={link.href}
                className="header__mobile-link"
                onClick={closeMobileMenu}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="header__mobile-footer">
          <button className="header__mobile-profile-btn" onClick={closeMobileMenu}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span>My Account</span>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
