import React from 'react';
import './Card.css';
const Card = (props) => {
  return (
    <div className='card'>
      <div className='card-inner'>
        <h3>{props.name}</h3>
        {/* <img src={props.img} alt='' /> */}
      </div>
      {/* <p>{props.price}</p>
      <p>{props.marketCap}</p>
      <p>{props.change}</p> */}
    </div>
  );
};

export default Card;
