import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";

type Props = {
  img: string;
  name: string;
  description: string;
  price: number;
  year: number;
};

const Card = (props: Props) => {
  return (
    <div className={styles.card_container}>
      <img src={props.img} alt="" />
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <hr />
      <h3>R${props.price},00</h3>
      <p>{props.year}</p>
      <Link to="/product/veiculo" className={styles.button}>
        <button>Saiba mais</button>
      </Link>
    </div>
  );
};

export default Card;
