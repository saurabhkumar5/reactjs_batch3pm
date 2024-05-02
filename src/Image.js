
import React from 'react';
import './Image.css';

function Image({img,name}) {

  return (
    <div className='container'>
      <div className='box'>
        <img src={img}/>
        <h1>{name}</h1>
        <p>Adress:belongi</p>
        <h2>Hobbey:making reels</h2>
    </div>
    </div>
    
  )
}

export default Image



