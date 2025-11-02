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
    </div>
  );
}

export default BookNow;
