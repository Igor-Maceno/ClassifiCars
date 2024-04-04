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
    <div className="card_container">
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      
    </div>
  );
};

export default Card