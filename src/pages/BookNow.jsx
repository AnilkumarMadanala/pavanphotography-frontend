import React from "react";
import "../styles/BookNow.css";

function BookNow() {
  return (
    <div className="booknow-container">
      <div className="booknow-content">
        <h1>Book Your Photography Session 📸</h1>
        <p>
          Fill out the form below to book your photography session. We’ll get
          back to you soon to confirm your slot and details!
        </p>

        {/* ✅ Embedded Google Form */}
        <div className="form-container">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdvTetNzCfGvLkdAmy5Vr0pBEX02rT02V0VzOd9IFZobq7cIg/viewform?embedded=true"
            width="100%"
            height="700"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Pavan Photography Booking Form"
          >
            Loading…
          </iframe>
        </div>
      </div>
       <a
  href="https://wa.me/918008644932?text=Hi%20Pavan%20Photography!%20I%20would%20like%20to%20know%20more%20about%20your%20services."
  className="whatsapp-float"
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
    alt="WhatsApp"
    className="whatsapp-icon"
  />
  <span className="whatsapp-text">Chat with us</span>
</a>
    </div>
  );
}

export default BookNow;
