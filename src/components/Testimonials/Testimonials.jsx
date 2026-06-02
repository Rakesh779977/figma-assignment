import { useState } from 'react';
import './Testimonials.css';

const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'Product Manager, FinTech Inc.',
    text: 'Elementum completely reshaped our product strategy. Their collaborative process felt less like an agency and more like a true extension of our team. The final design is stunning and has doubled our conversion rates.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150',
  },
  {
    id: 2,
    name: 'David Chen',
    role: 'Co-founder, Bloom Creative',
    text: "The team's attention to detail, spacing, typography, and interactive aesthetics is top-tier. They challenged our assumptions and brought design insights we would have never reached ourselves.",
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150',
  },
  {
    id: 3,
    name: 'Elena Rostova',
    role: 'VP of Marketing, Horizon Corp',
    text: "Elementum proved that speed and premium quality don't have to be mutually exclusive. Their sprint-based workflow kept us fully aligned, and their creative campaigns have gotten us massive traction.",
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150',
  },
  {
    id: 4,
    name: 'Marcus Aurelius',
    role: 'Brand Lead, Stoic Group',
    text: 'It is rare to find an agency that excels at both high-level brand strategy and engineering-ready development. Elementum delivered a seamless system that our engineering team was thrilled to build.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150',
  },
];

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  return (
    <section className="testimonials" id="faqs">
      <div className="testimonials__container container">
        {/* Section Title */}
        <div className="testimonials__header">
          <h2 className="testimonials__title">
            <span className="highlight-green">What</span> they say <br />
            <span className="highlight-yellow">About Us</span>
          </h2>
        </div>

        {/* Content Wrapper */}
        <div className="testimonials__content-wrapper">
          {/* Giant decorative quotation mark */}
          <span className="testimonials__giant-quote">“</span>

          {/* Testimonial card */}
          <div className="testimonials__card">
            <p className="testimonials__text">
              {TESTIMONIALS_DATA[activeIndex].text}
            </p>
            <div className="testimonials__meta">
              <h4 className="testimonials__client-name">
                {TESTIMONIALS_DATA[activeIndex].name}
              </h4>
              <span className="testimonials__client-role">
                {TESTIMONIALS_DATA[activeIndex].role}
              </span>
            </div>
          </div>

          {/* Interactive Avatars Navigation */}
          <div className="testimonials__avatars-nav">
            {TESTIMONIALS_DATA.map((t, idx) => (
              <button
                key={t.id}
                className={`testimonials__avatar-btn${idx === activeIndex ? ' testimonials__avatar-btn--active' : ''}`}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Show testimonial from ${t.name}`}
              >
                <img src={t.avatar} alt={t.name} className="testimonials__avatar-img" />
              </button>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="testimonials__controls">
            <button
              onClick={handlePrev}
              className="testimonials__control-btn"
              aria-label="Previous testimonial"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>
            <span className="testimonials__index-label">
              0{activeIndex + 1} / 0{TESTIMONIALS_DATA.length}
            </span>
            <button
              onClick={handleNext}
              className="testimonials__control-btn"
              aria-label="Next testimonial"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
