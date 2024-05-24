import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Github = () => {
  const [data, setdata] = useState([])
    useEffect(()=>{
             axios.get("https://api.github.com/users/saurabhkumar5")
             .then((value)=>setdata(value.data))
                

    },[])

  return (
    <div>
       
     <h1>{data.followers}:followers</h1>
      <img src={data.avatar_url} width="200px"/>
      <h1>{data.name}</h1>
      <h1>{data.public_repos}</h1>
    </div>
  )
}

export default Github