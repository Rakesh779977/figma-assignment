import { useState } from 'react';
import './Newsletter.css';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="newsletter" id="contact">
      <div className="newsletter__container container">
        <div className="newsletter__card">
          {/* Text Content */}
          <div className="newsletter__content">
            <h2 className="newsletter__title">
              Stay in the loop. <br />
              Subscribe to <span className="highlight-yellow">Elementum</span>
            </h2>
            <p className="newsletter__subtitle">
              Get the latest insights on design, technology, and branding directly in your inbox. No spam, we promise.
            </p>
          </div>

          {/* Form Content */}
          <div className="newsletter__action">
            {submitted ? (
              <div className="newsletter__success" role="alert">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="newsletter__success-icon"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Thank you! You are subscribed.</span>
              </div>
            ) : (
              <form className="newsletter__form" onSubmit={handleSubmit}>
                <div className="newsletter__form-group">
                  <input
                    type="email"
                    className="newsletter__input"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    aria-label="Email address"
                  />
                  <button type="submit" className="newsletter__btn">
                    Subscribe
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
