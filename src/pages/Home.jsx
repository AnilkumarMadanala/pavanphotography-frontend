import React from "react";
import "../styles/Home.css";
import "../styles/AboutUs.css";
import Contact from "./Contact";
// About image
import aboutImage from "../assets/pavanimg.jpg";

// Wedding Images
import wedding1 from "../assets/wedding/wedding1.jpg";
import wedding2 from "../assets/wedding/wedding2.jpg";
import wedding3 from "../assets/wedding/wedding3.jpg";
import wedding4 from "../assets/wedding/wedding4.webp";
import wedding5 from "../assets/wedding/wedding5.jpg";
import wedding6 from "../assets/wedding/wedding6.jpeg";
import wedding7 from "../assets/wedding/wedding7.jpeg";
import wedding8 from "../assets/wedding/wedding8.jpeg";
import wedding9 from "../assets/wedding/wedding9.jpg";
import wedding10 from "../assets/wedding/wedding10.jpg";

// Housewarming Images
import housewarming1 from "../assets/housewarming/housewarming1.jpg";
import housewarming2 from "../assets/housewarming/house2.jpg";
import housewarming3 from "../assets/housewarming/house3.jpg";
import housewarming4 from "../assets/housewarming/house4.jpg";
import housewarming5 from "../assets/housewarming/house5.jpg";
import housewarming6 from "../assets/housewarming/house6.jpg";
import housewarming7 from "../assets/housewarming/house7.jpg";
import housewarming8 from "../assets/housewarming/house8.jpg";
import housewarming9 from "../assets/housewarming/house9.jpg";
import housewarming10 from "../assets/housewarming/house10.jpg";
import housewarming11 from "../assets/housewarming/house11.jpg";
import housewarming12 from "../assets/housewarming/house12.jpg";

function Home() {
  const recentImages = [
    wedding1, wedding2, wedding3, wedding4, wedding5,
    wedding6, wedding7, wedding8, wedding9, wedding10,
    housewarming1, housewarming2, housewarming3, housewarming4,
    housewarming5, housewarming6, housewarming7, housewarming8,
    housewarming9, housewarming10, housewarming11, housewarming12,
  ];

  return (
    <div className="home-wrapper">
      {/* ===== HERO VIDEO SECTION ===== */}
      <section className="hero-section">
        <video className="background-video" autoPlay loop muted playsInline>
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="overlay">
          <h1>Pavan Photography</h1>
          <p>Capturing moments that last a lifetime ✨</p>
        </div>
      </section>

      {/* ===== ABOUT US SECTION ===== */}
      <section className="about-container">
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
      </section>

      {/* ===== RECENT CLICKS SECTION ===== */}
      <section className="home-gallery-section">
  <h2>Recent Clicks 📸</h2>
  <div className="home-gallery">
    {recentImages.map((src, index) => (
      <img key={index} src={src} alt={`Recent Click ${index + 1}`} />
    ))}
  </div>
</section>


      {/* ===== HAPPY CUSTOMERS & REVIEWS ===== */}
      {/* ===============================
    HAPPY CUSTOMERS SECTION
=============================== */}
<section className="reviews-section">
  <h2>Our Happy Customers</h2>
  <p className="reviews-subtitle">
    Delivering excellence through every celebration.
  </p>

  <div className="stats-container">
    <div className="stat-box">
      <h3>150+</h3>
      <p>Events Organized</p>
    </div>
    <div className="stat-box">
      <h3>100+</h3>
      <p>Happy Clients</p>
    </div>
    <div className="stat-box">
      <h3>6+</h3>
      <p>Years of Experience</p>
    </div>
  </div>

  <h3 className="reviews-heading">What Our Clients Say</h3>
  <div className="reviews-container">
    <div className="review-card">
      <p>"Absolutely loved the photos! The team was so professional and made us feel comfortable."</p>
            <h4>- nagaraju</h4>
    </div>

    <div className="review-card">
       <p>"Captured every beautiful detail of our wedding day. Highly recommended!"</p>
            <h4>- Sneha & Karthik</h4>
    </div>
    <div className="review-card">
      <p>"Excellent service and stunning photos. Every picture tells a story!"</p>
            <h4>- tanuja</h4>
    </div>
  </div>
</section>
<section id="contact-section">
        <Contact />
      </section>
    </div>
  );
}

export default Home;
