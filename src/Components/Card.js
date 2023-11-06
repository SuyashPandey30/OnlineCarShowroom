import React, { useState } from "react";
import "./Card.css";
const Card = ({ carImgLinks, carInfo, carPrice, circleColors,carName }) => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const changeImageColor = (index) => {
    setCurrentColorIndex(index);
  };

  return (
    <div className="card">
      <div className="car-image">
        <img src={carImgLinks[currentColorIndex]} alt="Car" />
      </div>
      <div className="color-circles">
        {circleColors.map((color, index) => (
          <button
            key={index}
            className={`circle ${currentColorIndex === index ? "active" : ""}`}
            style={{ backgroundColor: color }}
            onClick={() => changeImageColor(index)}
          />
        ))}
      </div>
      <div className="car-name">
        <h5>{carName}</h5>
      </div>
      <div className="car-info">
        <p>{carInfo}</p>
      </div>
      <div className="car-price">
        <p>₹ {carPrice}</p>
      </div>
      <button className="btn btn-info btn-outline">
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
