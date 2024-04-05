import React from 'react';
import styles from './Card.module.css';

type Props = {
  img: string,
  name: string,
  description: string,
  price: number,
  year: number,
}

const Card = (props: Props) => {
  return (
    <div className={styles.card_container}>
      <img src={props.img} alt=""/>
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <hr />
      <h3>R${props.price}</h3>
      <p>{props.year}</p>
      <button>Saiba mais</button>
    </div>
  );
};

export default Card