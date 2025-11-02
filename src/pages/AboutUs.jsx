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
    </div>
  );
}

export default AboutUs;
