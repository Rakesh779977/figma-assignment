import { useState, useEffect } from 'react';
import './Header.css';

const NAV_LINKS = [
  { label: 'About us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Use Cases', href: '#use-cases' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Blog', href: '#blog' },
];

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
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
        <a href="/" className="header__logo" aria-label="Positivus Home">
          <svg
            className="header__logo-icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M12 2L13.09 8.26L18 4L14.74 9.91L21 10.91L15.18 13.09L20 18L14.09 15.26L13.09 22L12 15.82L10.91 22L9.91 15.26L4 18L8.82 13.09L3 10.91L9.26 9.91L6 4L10.91 8.26L12 2Z"
              fill="#B9FF66"
            />
          </svg>
          <span className="header__logo-text">Positivus</span>
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

        {/* CTA Button */}
        <a href="#quote" className="header__cta">
          Request a quote
        </a>

        {/* Hamburger Button */}
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

      {/* Mobile Menu Overlay */}
      <div
        className={`header__overlay${mobileMenuOpen ? ' header__overlay--visible' : ''}`}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />

      {/* Mobile Navigation Drawer */}
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
        <a href="#quote" className="header__mobile-cta" onClick={closeMobileMenu}>
          Request a quote
        </a>
      </nav>
    </header>
  );
}

export default Header;
