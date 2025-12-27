import React from "react";
import "../styles/AboutUs.css";
import aboutImage from "../assets/pavanimg.jpg"; // ⚠️ make sure your image exists

function AboutUs() {
  return (
    <div className="about-container">
      <div className="about-left">
        <img src={aboutImage} alt="Pavan Photography" />
      </div>

      <div className="about-right">
        <h1>About Pavan Photography</h1>
        <p>
          At <strong>Pavan Photography</strong>, we believe every moment tells a story. 
          With a passion for light, emotion, and art, we capture timeless memories 
          that speak beyond words. From candid weddings to creative portraits, 
          our lens transforms fleeting instants into lifelong treasures.
        </p>
        <p>
          Based in <em>Vizianagaram</em>, our dedicated team brings creativity and 
          professionalism to every shoot — ensuring your special day is 
          preserved beautifully and authentically.
        </p>

<button
  className="book-now-btn"
  onClick={() => (window.location.href = "/booknow")}
>
  Book Your Session 📸
</button>
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

export default AboutUs;
