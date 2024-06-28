import React from "react";
import Card from "../../components/card/Card";
import image from "../../img/image1.png";

const Vehicle = () => {
  const car = {
    img: image,
    name: "Hyundai Tucson",
    description: "2.7 MPFI GLS 24V 180CV 4WD GASOLINA 4P MANUAL",
    price: 97500,
    year: 2024,
  };

  return (
    <div className="container">
      <Card
        img={car.img}
        name={car.name}
        description={car.description}
        price={car.price}
        year={car.year}
      />
    </div>
  );
};

export default Vehicle;
