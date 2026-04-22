import React from 'react'
import './Gallery.css'

function Gallery() {

  const images = [
    "https://images.unsplash.com/photo-1580582932707-520aed937b7b",
    "https://images.unsplash.com/photo-1596495577886-d920f1fb7238",
    "https://images.unsplash.com/photo-1577896851231-70ef18881754",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7",
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
    "https://images.unsplash.com/photo-1601582589907-f92af5ed9db8"
  ];

  return (
    <div className="gallery-page">

      {/* Hero Section */}
      <section className="gallery-hero">
        <h1>Our Gallery</h1>
        <p>Moments from our school life</p>
      </section>

      {/* Image Grid */}
      <section className="gallery-container">
        {images.map((img, index) => (
          <div className="gallery-card" key={index}>
            <img src={img} alt="school" />
          </div>
        ))}
      </section>

    </div>
  )
}

export default Gallery;