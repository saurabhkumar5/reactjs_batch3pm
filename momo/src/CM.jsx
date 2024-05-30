import React from 'react'
import DM from './DM'
import './CM.css'

function CM({paisa}) {

    
  return (
    <div className='cm'>
        <h1>Hello i am cm</h1>
        <DM paisa={paisa}/>
    </div>
  )
}

export default CM