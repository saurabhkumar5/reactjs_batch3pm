
import React from 'react';
import './Image.css';

function Image(props) {
 
  return (
    <div className='container'>
      <div className='box'>
        <img src={props.momo}/>
        <h1>{props.name}</h1>
        <p>Adress:belongi</p>
        <h2>Hobbey:making reels</h2>
    </div>
    </div>
    
  )
}

export default Image



