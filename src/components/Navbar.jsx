import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* LEFT */}
      <div className="navbar-left">
        <h2>Pavan Photography</h2>
      </div>

      {/* MENU TOGGLE (MOBILE) */}
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* CENTER */}
      <div className="navbar-center">
        <ul className={menuOpen ? "active" : ""}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/aboutus">About Us</Link></li>

          {/* Dropdown for Recent Gallery */}
          <li
            className="dropdown"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <span className="dropdown-title">Recent Gallery ▾</span>
            {dropdownOpen && (
              <ul className="dropdown-menu">
                <li><Link to="/gallery/wedding">Wedding</Link></li>
                <li><Link to="/gallery/halfsaree">Half Saree</Link></li>
                <li><Link to="/gallery/birthday">Birthday</Link></li>
                <li><Link to="/gallery/babyshower">Baby Shower</Link></li>
                <li><Link to="/gallery/engagement">Engagement</Link></li>
                <li><Link to="/gallery/housewarming">House Warming</Link></li>
                <li><Link to="/gallery/annualday">Annual Day</Link></li>
                <li><Link to="/gallery/specialevents">Special Events</Link></li>
              </ul>
            )}
          </li>
                    <li><Link to="/contact">Contact</Link></li>


          <li>
            <Link to="/booknow">
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
