import React from "react";
import styles from "./Product.module.css";
import Card from "../../components/card/Card";
import image1 from "../../img/image1.png";
import image3 from '../../img/image3.png';
import image2 from '../../img/image2.png';
import image4 from '../../img/image4.png';
import image5 from '../../img/image5.png';
import image6 from '../../img/image6.png';
import image7 from '../../img/image7.png';
import image8 from '../../img/image8.png';
import image9 from '../../img/image9.png';
import image10 from '../../img/image10.png';
import image11 from '../../img/image11.png';
import image12 from '../../img/image12.png';

const Product = () => {
  const car = [
    {
      img: image1,
      name: "Hyundai Tucson",
      description: "2.7 MPFI GLS 24V 180CV 4WD GASOLINA 4P MANUAL",
      price: 97500,
      year: 2024,
    },
    {
      img: image2,
      name: "Hyundai HB20",
      description: "2.7 MPFI GLS 24V 180CV 4WD GASOLINA 4P MANUAL",
      price: 49500,
      year: 2024,
    },
    {
      img: image3,
      name: "Hyundai Azera",
      description: "2.7 MPFI GLS 24V 180CV 4WD GASOLINA 4P MANUAL",
      price: 59500,
      year: 2024,
    },
    {
        img:image4,
        name: "Citröen C4",
        description: "2.0 16V EXCLUSIVE FLEX 4P AUTOMÁTICO",
        price: 45000,
        year: 2012,
    },
    {
        img:image5,
        name: "Volksvagem Gol",
        description: "1.0 MI 8V FLEX 4P MANUAL",
        price: 20000,
        year: 2010,
    },
    {
        img:image6,
        name: "Fiat 500",
        description: "1.4 8V 85CV 3P MANUAL",
        price: 30000,
        year: 2015,
    },
    {
        img:image7,
        name: "Mitsubishi Pajero",
        description: "3.2 DI-D 4X4 GLS 16V TURBO INTERCOOLER DIESEL 4P AUTOMÁTICO",
        price: 120000,
        year: 2018,
    },
    {
        img:image8,
        name: "Ford Fiesta",
        description: "1.6 8V FLEX 4P MANUAL",
        price: 25000,
        year: 2013,
    },
    {
        img:image9,
        name: "Chevrolet Corsa",
        description: "1.0 MPFI WIND 8V GASOLINA 2P MANUAL",
        price: 10000,
        year: 2005,
    },
    {
        img:image10,
        name: "Toyota ETIOS",
        description: "1.3 16V X 4P MANUAL",
        price: 35000,
        year: 2016,
    },
    {
        img:image11,
        name: "VolksWagen VOYAGE",
        description: "1.6 MI 8V FLEX 4P MANUAL",
        price: 30000,
        year: 2014,
    },
    {
        img:image12,
        name: "Chevrolet Ipanema",
        description: "2.0 MPFI GL 8V GASOLINA 4P MANUAL",
        price: 15000,
        year: 1998,
    }
  ];
  return (
    <div className={styles.news}>
          {car.map((car) => (
            <Card
              img={car.img}
              name={car.name}
              description={car.description}
              price={car.price}
              year={car.year}
            />
          ))}
        </div>
  );
};

export default Product;
