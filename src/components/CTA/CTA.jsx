import './CTA.css';

function CTA() {
  return (
    <section className="cta">
      <div className="cta__container">
        <div className="cta__content">
          <h2 className="cta__heading">Let's make things happen</h2>
          <p className="cta__text">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <button className="cta__button" type="button">
            Get your free proposal
          </button>
        </div>
        <div className="cta__visual">
          <div className="cta__shape">
            <div className="cta__shape-star">&#x2605;</div>
            <div className="cta__shape-circle"></div>
            <div className="cta__shape-ring"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
