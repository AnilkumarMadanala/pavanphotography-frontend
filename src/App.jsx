import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import BookNow from "./pages/BookNow";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Home page — includes video, about, and gallery */}
        <Route
          path="/"
          element={
            <>
              <Home />     {/* 🎥 Video Section */}
              {/* 🧑‍💼 About Us Section */}
            </>
          }
        />

        {/* Dedicated pages */}
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/booknow" element={<BookNow />} />
        <Route path="/gallery/:category" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
