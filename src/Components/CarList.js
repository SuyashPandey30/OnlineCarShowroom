import React from 'react';
import './CarList.css';
import Card from './Card';

const CardList = ({ carsData }) => {
  return (
    <div className="card-list">
      {carsData.map((car, index) => (
        <Card
          key={index}
          carImgLinks={car.carImgLinks}
          carInfo={car.carInfo}
          carPrice={car.carPrice}
          circleColors={car.circleColors}
          carName={car.carName}
        />
      ))}
    </div>
  );
};

export default CardList;
