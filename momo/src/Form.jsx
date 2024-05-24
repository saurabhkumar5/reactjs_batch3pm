import React, { useState } from 'react'

function Form() {

      let [name,setName]  = useState("sohan")
      let [number,setNumber]  = useState()


      
  return (
    <div>
      <h1>{name}</h1>
     <form>
       <label>name</label>
       <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/><br/>
        <lable>age</lable>
        <input type='number' value={number} onChange={(e)=>setNumber(e.target.value)}/>

    </form>

    </div>
  )
}

export default Form




