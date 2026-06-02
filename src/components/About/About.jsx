import './About.css';

function About() {
  return (
    <section className="about" id="studio">
      <div className="about__container container">
        {/* Row 1: Text Left, Circle Media Right */}
        <div className="about__row">
          <div className="about__col about__col--text">
            <h2 className="about__heading">
              Tomorrow should be better than{' '}
              <span className="highlight-yellow">today</span>
            </h2>
            <p className="about__text">
              We help progressive brands find their voice and build meaningful connections in the digital space. Our approach is rooted in collaborative strategy, creative expression, and rigorous research that challenges standard industry conventions.
            </p>
            <p className="about__text">
              By working closely with your team, we uncover user insights and translate them into beautiful, highly functional interfaces that drive real conversion and scale.
            </p>
            <a href="#about-more" className="about__link">
              <span>Read more</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="about__link-arrow"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>

          <div className="about__col about__col--media">
            <div className="about__media-wrapper">
              {/* Backing Coral Triangle SVG */}
              <svg
                className="about__decor-triangle"
                width="240"
                height="240"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon points="50,10 90,85 10,85" fill="var(--color-coral)" />
              </svg>

              {/* Decorative Red Curved SVG Line */}
              <svg
                className="about__decor-curve-1"
                width="150"
                height="150"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 20C40 30 70 70 90 90"
                  stroke="var(--color-line-red)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>

              {/* Circular Photo */}
              <div className="about__circle-frame">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400&h=400"
                  alt="Team collaborating around design printouts"
                  className="about__circle-img"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Circle Media Left, Text Right (Alternated) */}
        <div className="about__row about__row--reversed">
          <div className="about__col about__col--text">
            <h2 className="about__heading">
              See how we bring <span className="highlight-pink">ideas</span> to life.
            </h2>
            <p className="about__text">
              We don't just execute requirements; we interrogate the problem and design tailor-made experiences. Through our sprint-based workflows, we validate early and iterate constantly to ensure the final product delivers exceptional business value.
            </p>
            <p className="about__text">
              Our multidisciplinary squad handles everything from deep brand workshops to engineering-ready interactive systems, moving fast and leaving no detail overlooked.
            </p>
            <a href="#projects" className="about__link">
              <span>See our work</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="about__link-arrow"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>

          <div className="about__col about__col--media">
            <div className="about__media-wrapper">
              {/* Backing Purple Blob/Circle Shape */}
              <div className="about__decor-purple-circle" />

              {/* Decorative Red Curved SVG Line */}
              <svg
                className="about__decor-curve-2"
                width="150"
                height="150"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M90 10C65 40 35 70 10 90"
                  stroke="var(--color-line-red)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="6 6"
                />
              </svg>

              {/* Circular Photo */}
              <div className="about__circle-frame">
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400&h=400"
                  alt="Creative designers brainstorming together on interactive board"
                  className="about__circle-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
