import React from "react";
import "../styles/Footer.css";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // ✅ Import navigation hook

const Footer = () => {
  const navigate = useNavigate(); // ✅ Initialize navigation

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left: Brand & Contact Info */}
        <div className="footer-brand">
          <h2>Pavan Photography</h2>
          <p>Capturing moments, creating memories.</p>

          <div className="footer-contact">
            <p>
              <FaMapMarkerAlt className="footer-icon" /> 📍 Ambatisatram Road,
              Vizianagaram, Andhra Pradesh, India
            </p>
            <p>
              <FaPhoneAlt className="footer-icon" /> 📞 +91 8008644932
            </p>
            <p>
              <FaEnvelope className="footer-icon" /> ✉️
              contact@pavanphotography.com
            </p>
          </div>

          {/* ✅ Book Now Button */}
          <div className="footer-buttons">
          <button
            className="footer-btn book-btn"
            onClick={() => navigate("/booknow")}
          >
            Book Now
          </button>
          <button className="footer-btn call-btn" onClick={() => (window.location.href = "tel:+918008644932")} > Call Now </button>
        </div>
        </div>

        {/* Middle: Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/aboutus">About Us</a>
            </li>
            <li>
              <a href="/gallery/wedding">Gallery</a>
            </li>
            <li>
              <a href="/booknow">Book Now</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Right: Social Media */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://wa.me/918008644932"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Pavan Photography. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
