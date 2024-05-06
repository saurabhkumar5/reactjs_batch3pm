import React from 'react'
import Data from '../Data.js';
import Image from '../Image'
function Body() {
  return (
    <div>
         <div className="container">
        {Data.map((value, index) => {
          return (
            <Image
              name={value.name}
              rating={value.rating}
              address={value.address}
              img={value.img}
            />
          );
        })}
      </div>
    </div>
  )
}

export default Body