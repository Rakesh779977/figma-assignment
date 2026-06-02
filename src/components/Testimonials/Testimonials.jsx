import { useState, useEffect, useCallback } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    quote:
      'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.',
    name: 'John Smith',
    position: 'Marketing Director at ABC Corp',
  },
  {
    id: 2,
    quote:
      'Positivus has been instrumental in transforming our digital strategy. Their data-driven approach and creative solutions have helped us reach new audiences and increase conversions by 40%. The team is always available and proactive in suggesting new ideas.',
    name: 'Jane Doe',
    position: 'CEO at XYZ Inc',
  },
  {
    id: 3,
    quote:
      'The results we have achieved with Positivus have exceeded our expectations. Their SEO and content marketing strategies have not only improved our search rankings but also established us as thought leaders in our industry.',
    name: 'Michael Johnson',
    position: 'VP of Marketing at Tech Solutions',
  },
  {
    id: 4,
    quote:
      'Working with Positivus has been a game-changer for our e-commerce business. Their PPC campaigns and social media management have driven a 60% increase in sales. They truly understand our brand and target audience.',
    name: 'Emily Davis',
    position: 'Founder at StyleHub',
  },
  {
    id: 5,
    quote:
      'Positivus delivered outstanding results for our startup. Their comprehensive approach to digital marketing helped us build brand awareness from scratch and acquire our first 10,000 customers within six months.',
    name: 'Robert Wilson',
    position: 'Co-founder at LaunchPad',
  },
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);

  const updateVisibleCount = useCallback(() => {
    if (window.innerWidth >= 1024) {
      setVisibleCount(3);
    } else if (window.innerWidth >= 768) {
      setVisibleCount(2);
    } else {
      setVisibleCount(1);
    }
  }, []);

  useEffect(() => {
    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, [updateVisibleCount]);

  const maxIndex = Math.max(0, testimonials.length - visibleCount);
  const totalDots = maxIndex + 1;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  // Clamp currentIndex when visibleCount changes
  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const translateX = -(currentIndex * (100 / visibleCount));

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials__header">
        <h2 className="testimonials__title">
          <span className="testimonials__title-pill">Testimonials</span>
        </h2>
        <p className="testimonials__description">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
          about Our Digital Marketing Services
        </p>
      </div>

      <div className="testimonials__container">
        <div className="testimonials__carousel">
          <div
            className="testimonials__track"
            style={{
              transform: `translateX(${translateX}%)`,
              '--visible-count': visibleCount,
            }}
          >
            {testimonials.map((testimonial) => (
              <div className="testimonials__slide" key={testimonial.id}>
                <div className="testimonials__card">
                  <div className="testimonials__bubble">
                    <p className="testimonials__quote">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                  </div>
                  <div className="testimonials__author">
                    <span className="testimonials__author-name">
                      {testimonial.name}
                    </span>
                    <span className="testimonials__author-position">
                      {testimonial.position}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="testimonials__controls">
          <button
            className="testimonials__arrow testimonials__arrow--prev"
            onClick={handlePrev}
            aria-label="Previous testimonial"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M19 12H5M5 12L12 19M5 12L12 5"
                stroke="#B9FF66"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="testimonials__dots">
            {Array.from({ length: totalDots }).map((_, index) => (
              <button
                key={index}
                className={`testimonials__dot ${
                  index === currentIndex ? 'testimonials__dot--active' : ''
                }`}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            className="testimonials__arrow testimonials__arrow--next"
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="#B9FF66"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
