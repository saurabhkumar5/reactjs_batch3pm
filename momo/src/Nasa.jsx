import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Nasa.css'

function Nasa() {
       const [data,setdata] = useState([])
    //    console.log(data)
         useEffect(()=>{
            axios.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=DEMO_KEY")
            //   .then((value)=>console.log(value.data.photos))
            .then((value)=>setdata(value.data.photos))
         },[])
         
  return (
    <div>
        <h1>Nasa</h1>
        {
            data.map((value)=>{
                  return(
                    <>
                    <img src={value.img_src} className='marsh'/>
                    <span>{value.earth_data}</span>
                    </>
                  )
            })
        }
    </div>
  )
}

export default Nasa