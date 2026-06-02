import SectionTitle from '../SectionTitle/SectionTitle';
import './Services.css';

const services = [
  {
    id: 1,
    title: 'SEO',
    variant: 'light',
  },
  {
    id: 2,
    title: 'Pay-per-click Advertising',
    variant: 'lime',
  },
  {
    id: 3,
    title: 'Social Media Marketing',
    variant: 'dark',
  },
  {
    id: 4,
    title: 'Email Marketing',
    variant: 'light',
  },
  {
    id: 5,
    title: 'Content Creation',
    variant: 'lime',
  },
  {
    id: 6,
    title: 'Analytics and Tracking',
    variant: 'dark',
  },
];

function ServiceCard({ title, variant }) {
  const arrowColor = variant === 'dark' ? '#B9FF66' : '#191A23';
  const badgeBg = variant === 'dark' ? '#FFFFFF' : variant === 'lime' ? '#191A23' : '#B9FF66';
  const badgeColor = variant === 'dark' ? '#191A23' : variant === 'lime' ? '#FFFFFF' : '#191A23';

  return (
    <div className={`services-card services-card--${variant}`}>
      <div className="services-card__body">
        <div className="services-card__info">
          <h3 className="services-card__title">
            <span
              className="services-card__badge"
              style={{ backgroundColor: badgeBg, color: badgeColor }}
            >
              {title}
            </span>
          </h3>
          <a
            href="#"
            className={`services-card__link services-card__link--${variant}`}
          >
            <span
              className="services-card__arrow-icon"
              style={{ backgroundColor: arrowColor }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 16L16 4M16 4H6M16 4V14"
                  stroke={variant === 'dark' ? '#191A23' : '#B9FF66'}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="services-card__link-text">Learn more</span>
          </a>
        </div>
        <div className="services-card__visual">
          <div className="services-card__decoration">
            <div className="services-card__deco-circle"></div>
            <div className="services-card__deco-line"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Services() {
  return (
    <section className="services">
      <div className="services__container">
        <SectionTitle
          title="Services"
          description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
        />
        <div className="services__grid">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              variant={service.variant}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
