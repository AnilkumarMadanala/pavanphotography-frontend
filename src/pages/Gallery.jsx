import React from "react";
import { useParams } from "react-router-dom";
import "../styles/Gallery.css";

// ✅ Import all images (use actual existing ones)
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




function Gallery() {
  const { category } = useParams();

  // ✅ Image sources by category
  const images = {
    wedding: [wedding1, wedding2, wedding3,wedding4,wedding5,wedding6,wedding7,wedding8,wedding9,wedding10],
    housewarming: [housewarming1, housewarming2, housewarming3,housewarming4,housewarming5,housewarming6,housewarming7,housewarming8,housewarming9,housewarming10,housewarming11,housewarming12],

  };

  const categoryImages = images[category] || [];

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">
        {category
          ? `${category.replace(/([A-Z])/g, " $1")} Gallery`
          : "Gallery"}
      </h1>

      <div className="image-grid">
        {categoryImages.length > 0 ? (
          categoryImages.map((img, index) => (
            <div key={index} className="image-card">
              <img src={img} alt={category} />
            </div>
          ))
        ) : (
          <p>No images available for this category yet.</p>
        )}
      </div>
    </div>
  );
}

export default Gallery;
