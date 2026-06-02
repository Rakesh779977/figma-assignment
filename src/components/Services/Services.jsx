import './Services.css';

const SERVICES_DATA = [
  {
    id: '01',
    name: 'Brand & Design',
    description: 'Defining unique brand positions, voice guidelines, and high-impact visual design systems that build trust and captivate audiences.',
    link: '#brand-design',
  },
  {
    id: '02',
    name: 'Product Development',
    description: 'Crafting bespoke web applications, interactive portals, and modern mobile solutions using optimized frontend architecture.',
    link: '#product-dev',
  },
  {
    id: '03',
    name: 'Growth & Content',
    description: 'Running target-driven SEO campaigns, creative marketing contents, and data-backed performance strategies to scale conversions.',
    link: '#growth-content',
  },
];

function Services() {
  return (
    <section className="services" id="services">
      <div className="services__container container">
        {/* Section Header */}
        <div className="services__header">
          <h2 className="services__title">
            What we <span className="highlight-green">can</span> <br />
            <span className="highlight-yellow">offer you!</span>
          </h2>
        </div>

        {/* Services Rows */}
        <div className="services__list">
          {SERVICES_DATA.map((service) => (
            <div key={service.id} className="services__row-item">
              <a href={service.link} className="services__row-link">
                {/* Left Description Column */}
                <div className="services__col services__col--desc">
                  <span className="services__number">{service.id}</span>
                  <p className="services__description">{service.description}</p>
                </div>

                {/* Center Name Column */}
                <div className="services__col services__col--name">
                  <h3 className="services__name">{service.name}</h3>
                </div>

                {/* Right Arrow Column */}
                <div className="services__col services__col--action">
                  <div className="services__arrow-btn">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="services__arrow-icon"
                    >
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
