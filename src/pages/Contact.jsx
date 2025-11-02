import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section className="contact-page">
      <h2 className="contact-title">Get in Touch</h2>
      <p className="contact-intro">
        We'd love to hear from you! Reach out for event bookings, partnership
        inquiries, or any questions.
      </p>

      <div className="contact-container">
        {/* Left Side: Map */}
        <div className="map-section">
          <iframe
            title="sudhakar-events-location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5551.895600259813!2d83.4125137893968!3d18.115171385827882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3be551eba9496f%3A0x666593d65b5afe26!2sAmbati%20Satram%20Rd%2C%20Ambati%20Satram%20Area%2C%20Vizianagaram%2C%20Andhra%20Pradesh%20535002!5e0!3m2!1sen!2sin!4v1762103685634!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Right Side: Info + Form */}
        <div className="contact-info">
          <div className="info-card">
            <h3>Pavan Photography</h3>
            <p>📍 Ambatisatram road, Vizianagaram, Andhrapradesh, India</p>
            <p>📞 +91 8008644932</p>
            <p>✉️ contact@pavanphotography.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
