import './Hero.css';

const TEAM_PHOTOS = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250&h=250',
    alt: 'Team member - Designer',
    className: 'hero__photo--1',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=250&h=250',
    alt: 'Team member - Strategist',
    className: 'hero__photo--2',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=250&h=250',
    alt: 'Team member - Developer',
    className: 'hero__photo--3',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=250&h=250',
    alt: 'Team member - Researcher',
    className: 'hero__photo--4',
  },
];

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__container container">
        {/* Left Side: Typography and Content */}
        <div className="hero__content">
          <div className="hero__text-wrapper">
            <h1 className="hero__title">
              A team of <span className="highlight-yellow">thinkers</span>,<br />
              <span className="highlight-pink">changing</span> the<br />
              <span className="highlight-green">status</span> quo.
            </h1>
            
            {/* Purple semi-circle accent */}
            <div className="hero__accent-purple" aria-hidden="true" />
          </div>
          
          <p className="hero__subtitle">
            We are a team of strategists, designers, communicators and researchers changing the status quo. We work with progressive brands to build products and experiences that make a difference.
          </p>
          
          <div className="hero__cta-group">
            <a href="#services" className="hero__btn hero__btn--primary">
              Our Services
            </a>
            <a href="#contact" className="hero__btn hero__btn--secondary">
              Work with us
            </a>
          </div>
        </div>

        {/* Right Side: Scattered Team Photos and Decorative Red SVGs */}
        <div className="hero__media" aria-hidden="true">
          {/* Decorative red curve SVG line */}
          <svg
            className="hero__decor-curve"
            width="280"
            height="140"
            viewBox="0 0 280 140"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 130C60 90 120 10 270 20"
              stroke="var(--color-line-red)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="6 6"
            />
            <path
              d="M255 10L271 20L255 35"
              stroke="var(--color-line-red)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* Scattered team images container */}
          <div className="hero__photos-scatter">
            {TEAM_PHOTOS.map((photo) => (
              <div key={photo.id} className={`hero__photo-frame ${photo.className}`}>
                <img src={photo.src} alt={photo.alt} className="hero__photo-img" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
