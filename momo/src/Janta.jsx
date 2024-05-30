// import React from 'react'
// import './CM.css'
// import { data } from './App'

// function Janta() {
//   return (
//     <div className='janta'>
//         <h1>hello i am janta</h1>
//         <data.Consumer>
//           {
//             (paisa)=>{
//               return(
//                     <h1>money transfer {paisa}</h1>
//               )
//             }
//           }
//         </data.Consumer>
//     </div>
//   )
// }

// export default Janta





import React, { useContext } from 'react'
import './CM.css'
import { data,data1 } from './App'

function Janta() {
             
             const paisa = useContext(data)
             const bonus = useContext(data1)
  return (
    <div className='janta'>
        <h1>hello i am janta</h1>
        <h1>paisa coming from pm {paisa} and bonus{bonus}</h1>
    </div>
  )
}

export default Janta