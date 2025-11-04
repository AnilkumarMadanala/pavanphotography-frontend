import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/logo/logo3.webp"; 

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // ✅ Prevent auto-closing menu while it’s open
  useEffect(() => {
    const handleScroll = () => {
      if (!menuOpen) {
        // Only handle logic when menu is closed
        setDropdownOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  const handleLinkClick = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      {/* LEFT */}
       <div className="navbar-left">
        <Link to="/" className="logo-link" onClick={handleLinkClick}>
          <img src={logo} alt="Pavan Photography Logo" className="logo-img" />
          <h2>Pavan Photography</h2>
        </Link>
      </div>

      {/* MENU TOGGLE (MOBILE) */}
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "×" : "☰"}
      </button>

      {/* CENTER */}
      <div className="navbar-center">
        <ul className={menuOpen ? "active" : ""}>
          <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
          <li><Link to="/aboutus" onClick={handleLinkClick}>About Us</Link></li>

          {/* Dropdown for Recent Gallery */}
          <li
            className="dropdown"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <span className="dropdown-title">Recent Gallery ▾</span>
            {dropdownOpen && (
              <ul className="dropdown-menu">
                <li><Link to="/gallery/wedding" onClick={handleLinkClick}>Wedding</Link></li>
                <li><Link to="/gallery/halfsaree" onClick={handleLinkClick}>Half Saree</Link></li>
                <li><Link to="/gallery/birthday" onClick={handleLinkClick}>Birthday</Link></li>
                <li><Link to="/gallery/babyshower" onClick={handleLinkClick}>Baby Shower</Link></li>
                <li><Link to="/gallery/engagement" onClick={handleLinkClick}>Engagement</Link></li>
                <li><Link to="/gallery/housewarming" onClick={handleLinkClick}>House Warming</Link></li>
                <li><Link to="/gallery/annualday" onClick={handleLinkClick}>Annual Day</Link></li>
                <li><Link to="/gallery/specialevents" onClick={handleLinkClick}>Special Events</Link></li>
              </ul>
            )}
          </li>

          <li><Link to="/contact" onClick={handleLinkClick}>Contact</Link></li>

          <li>
            <Link to="/booknow" onClick={handleLinkClick}>
              <button className="call-now">Book Now</button>
            </Link>
          </li>
        </ul>
      </div>

      {/* RIGHT */}
      <div className="navbar-right">
        <a href="tel:+918008644932" className="call-button">Call Now</a>
      </div>
    </nav>
  );
}

export default Navbar;
