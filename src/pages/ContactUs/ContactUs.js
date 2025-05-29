import "./ContactUs.css";

function ContactUs() {
  return (
    <section className="contact-section" aria-labelledby="contact-heading">
      <h2 id="contact-heading" className="contact-title">
        Let's connect
      </h2>

      <div className="contact-content">
        <div className="contact-map" aria-hidden="true">
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.0201392220375!2d44.5316037!3d40.1864773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abcdccaadd00b%3A0x5ca6cd2e3cd7155d!2s125%20Armenak%20Armenakyan%20St%2C%20Yerevan%200011!5e0!3m2!1sen!2sam!4v1717079217749!5m2!1sen!2sam"
            width="100%"
            height="250"
            style={{ border: "0", borderRadius: "12px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <form className="contact-form" aria-describedby="form-description">
          <fieldset>
            <legend id="form-description" className="visually-hidden">
              Contact form to reach out to FBF
            </legend>

            <label htmlFor="name">Your name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              aria-required="true"
            />

            <label htmlFor="email">Your email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              aria-required="true"
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Contact us with any question you may have."
              required
              aria-required="true"
            ></textarea>

            <button type="submit" className="submit-btn">
              Contact us
            </button>
          </fieldset>
        </form>
      </div>
    </section>
  );
}
export default ContactUs;
