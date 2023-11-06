import React from 'react';
import "./Carousel.css";

const Carousel = ({ items }) => {
  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {items.map((item, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <img
              src={item.imageUrl}
              className="d-block w-100 carousel-image"
              alt={item.alt}
            />
            <div className="carousel-overlay">
              <h3>{item.heading}</h3>
              <button className="see-in-cart-button">CheckOut</button>
            </div>
          </div>
        ))}
      </div>
      <a className="carousel-control-prev" href="#carouselExample" role="button" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExample" role="button" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </a>
    </div>
  );
};

export default Carousel;
