import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./Home.module.css";
import Card from "../../components/card/Card";
import image from "../../img/image1.png";

const Home = () => {
  const car = [
    {
      img: image,
      name: "Hyundai Tucson",
      description: "2.7 MPFI GLS 24V 180CV 4WD GASOLINA 4P MANUAL",
      price: "97.500",
      year: "2024",
    },
    {
      img: image,
      name: "Hyundai HB20",
      description: "2.7 MPFI GLS 24V 180CV 4WD GASOLINA 4P MANUAL",
      price: "49.500",
      year: "2024",
    },
    {
      img: image,
      name: "Hyundai Azera",
      description: "2.7 MPFI GLS 24V 180CV 4WD GASOLINA 4P MANUAL",
      price: "59.500",
      year: "2024",
    },
  ];
  return (
    <div>
      <div className={styles.search}>
        <SearchIcon />
        <input
          type="text"
          name="search"
          placeholder="Busque por marca ou modelo"
        />
        <Link to="/products"><label htmlFor="search">Pesquisar</label></Link>
      </div>
      <div className={styles.news_section}>
        <h1>Destaques</h1>
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
      </div>
      <div className={styles.banner}>Anúncio</div>
    </div>
  );
};

export default Home;
