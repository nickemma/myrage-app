import React from 'react'

const Card = (props) => {
  return (
    <section className='card'>
      <div className='card-inner'>
        <h1>{props.name}</h1>
        {/* <img src={props.img} alt="" /> */}
      </div>
    </section>
  );
}

export default Card