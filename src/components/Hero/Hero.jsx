import './Hero.css';

const COMPANY_LOGOS = [
  'Amazon',
  'Dribbble',
  'HubSpot',
  'Notion',
  'Netflix',
  'Zoom',
];

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero__container">
        {/* Left Content */}
        <div className="hero__content">
          <h1 className="hero__heading">
            Navigating the
            <span className="hero__highlight"> digital landscape </span>
            for success
          </h1>
          <p className="hero__description">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <a href="#consultation" className="hero__cta">
            Book a consultation
          </a>
        </div>

        {/* Right Illustration */}
        <div className="hero__illustration" aria-hidden="true">
          <div className="hero__art">
            {/* Abstract megaphone / speaker shape */}
            <svg
              className="hero__art-svg"
              viewBox="0 0 400 380"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Main megaphone body */}
              <ellipse cx="200" cy="170" rx="130" ry="130" fill="#191A23" />

              {/* Lime accent circle */}
              <circle cx="200" cy="170" r="80" fill="#B9FF66" />

              {/* Inner dark circle */}
              <circle cx="200" cy="170" r="45" fill="#191A23" />

              {/* Small decorative dots */}
              <circle cx="95" cy="80" r="12" fill="#B9FF66" />
              <circle cx="310" cy="260" r="8" fill="#B9FF66" />
              <circle cx="330" cy="90" r="6" fill="#191A23" />

              {/* Radiating lines from center */}
              <line x1="200" y1="40" x2="200" y2="15" stroke="#191A23" strokeWidth="3" strokeLinecap="round" />
              <line x1="280" y1="70" x2="300" y2="50" stroke="#191A23" strokeWidth="3" strokeLinecap="round" />
              <line x1="320" y1="150" x2="345" y2="145" stroke="#191A23" strokeWidth="3" strokeLinecap="round" />
              <line x1="80" y1="150" x2="55" y2="145" stroke="#191A23" strokeWidth="3" strokeLinecap="round" />
              <line x1="120" y1="70" x2="100" y2="50" stroke="#191A23" strokeWidth="3" strokeLinecap="round" />

              {/* Star / sparkle shapes */}
              <path
                d="M320 170 L326 164 L332 170 L326 176 Z"
                fill="#B9FF66"
              />
              <path
                d="M75 200 L81 194 L87 200 L81 206 Z"
                fill="#B9FF66"
              />

              {/* Curved arrow / motion line */}
              <path
                d="M130 310 Q200 280 270 310"
                stroke="#191A23"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M265 305 L275 312 L268 318"
                stroke="#191A23"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Floating text-like lines */}
              <rect x="150" y="340" width="40" height="4" rx="2" fill="#B9FF66" />
              <rect x="200" y="340" width="55" height="4" rx="2" fill="#191A23" opacity="0.3" />
              <rect x="160" y="355" width="70" height="4" rx="2" fill="#191A23" opacity="0.2" />
            </svg>

            {/* Floating decorative elements */}
            <div className="hero__art-float hero__art-float--1" />
            <div className="hero__art-float hero__art-float--2" />
            <div className="hero__art-float hero__art-float--3" />
          </div>
        </div>
      </div>

      {/* Company Logos Strip */}
      <div className="hero__logos">
        <div className="hero__logos-track">
          {/* Duplicate logos for seamless infinite scroll */}
          {[...COMPANY_LOGOS, ...COMPANY_LOGOS].map((name, index) => (
            <div key={`${name}-${index}`} className="hero__logo-item">
              <span className="hero__logo-text">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
