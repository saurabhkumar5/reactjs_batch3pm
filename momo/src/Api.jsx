import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Api = () => {
                const [api, setApi]   = useState([])
            
           useEffect(()=>{
            axios.get("https://jsonplaceholder.typicode.com/users")
                 .then((value)=>{
                    // console.log(value.data)
                    setApi(value.data)
                 })
           },[])
  return (
    <div>
        {
            api.map((value)=>{
                
                return(
                   <div>
                     <h1>name: {value.name} email: {value.email}</h1>
                     
                   </div>
                )
            })
        }
    </div>
  )
}

export default Api