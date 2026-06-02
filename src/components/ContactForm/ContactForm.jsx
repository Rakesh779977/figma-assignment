import { useState } from 'react';
import './ContactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    contactType: 'sayHi',
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      contactType: formData.contactType,
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__header">
        <h2 className="contact__title">
          <span className="contact__title-pill">Contact Us</span>
        </h2>
        <p className="contact__description">
          Connect with Us: Let&#39;s Discuss Your Digital Marketing Needs
        </p>
      </div>

      <div className="contact__container">
        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__radio-group">
            <label className="contact__radio-label">
              <input
                type="radio"
                name="contactType"
                value="sayHi"
                checked={formData.contactType === 'sayHi'}
                onChange={handleChange}
                className="contact__radio-input"
              />
              <span className="contact__radio-custom" />
              <span className="contact__radio-text">Say Hi</span>
            </label>
            <label className="contact__radio-label">
              <input
                type="radio"
                name="contactType"
                value="getQuote"
                checked={formData.contactType === 'getQuote'}
                onChange={handleChange}
                className="contact__radio-input"
              />
              <span className="contact__radio-custom" />
              <span className="contact__radio-text">Get a Quote</span>
            </label>
          </div>

          <div className="contact__field">
            <label className="contact__label" htmlFor="contact-name">
              Name
            </label>
            <input
              id="contact-name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="contact__input"
              required
            />
          </div>

          <div className="contact__field">
            <label className="contact__label" htmlFor="contact-email">
              Email*
            </label>
            <input
              id="contact-email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="contact__input"
              required
            />
          </div>

          <div className="contact__field">
            <label className="contact__label" htmlFor="contact-message">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="contact__textarea"
              rows="4"
              required
            />
          </div>

          <button type="submit" className="contact__submit">
            Send Message
          </button>
        </form>

        <div className="contact__illustration" aria-hidden="true">
          <div className="contact__illustration-shape contact__illustration-shape--circle" />
          <div className="contact__illustration-shape contact__illustration-shape--dots">
            {Array.from({ length: 9 }).map((_, i) => (
              <span key={i} className="contact__illustration-dot" />
            ))}
          </div>
          <div className="contact__illustration-shape contact__illustration-shape--star">
            ✦
          </div>
          <div className="contact__illustration-shape contact__illustration-shape--line" />
          <div className="contact__illustration-shape contact__illustration-shape--ring" />
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
