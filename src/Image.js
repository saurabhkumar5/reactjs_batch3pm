
import React from 'react';
import './Image.css';

 function Image({img,name,rating,address}) {

  return (
    <div className='container'>
      <div className='box'>
        <img src={img}/>
        <h1>{name}</h1>
        <p>{rating} star</p>
        <h2>{address}</h2>
    </div>
    </div>
    
  )
}

export default Image;



