import React, { useContext } from 'react'
import Janta from './Janta'
import './CM.css'
import { data,data1 } from './App'

function DM() {
            const paisa = useContext(data)
             const bonus = useContext(data1)

             console.log(paisa,bonus)
  return (
    <div className='dm'>
        <h1>hello i am dm</h1>
        {/* <Janta paisa={paisa}/> */}
        <div>
        <h1>hello i am janta</h1>
        <h1>paisa coming from pm {paisa} and bonus{bonus}</h1>
    </div>
    </div>
  )
}

export default DM