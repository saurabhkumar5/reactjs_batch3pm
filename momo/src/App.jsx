
  // import React from 'react'
  // import './App.css';
  // import { useState } from 'react';
  // import { AiFillAudio } from "react-icons/ai";
  
  // function App() {
  //         const [value,setValue]  = useState(10);

  //         let handle = ()=>{
  //           setValue(value+2)
  //         }
          
  //         let hand = ()=>{
  //           setValue(value-1)
  //         }
  //   return (
  //     <div className='momo'>
  //       <h1>  {value} <AiFillAudio /> </h1>
  //       {/* <button onClick={()=>setValue(value+1)}>inc+</button> */}
  //       <button onClick={handle}>inc+ </button>
  //       <button onClick={hand}>dec-</button>
  //     </div>
  //   )
  // }
  
  // export default App



// function home(){
//    console.log("hello")
//    return(
//     <h1>hello</h1>
//    )
// }





// import React, { useState } from 'react'


// function App() {
//              const [number,setNumber]  = useState("shimla")
//              console.log(number)

//              const handle = ()=>{
//               setNumber(number=="shimla"?"manali":"shimla")
//               // setNumber(home)
//              }

//   return (
//     <div>
      
//         <h1>{number}</h1>
//         <button onClick={handle}>click</button>
      
//     </div>
//   )
// }

// export default App






// import React, { useState } from 'react'

// function App() {

//   const [value,setValue]   = useState({name:"sonam",lastname:"kaur",age:15})
//   return (
//     <div>
//       <h1>{value.name} and last name {value.lastname} and age is{value.age} </h1>
//       <button onClick={()=>setValue({...value,lastname:"duggu",age:55})}>change</button>
//     </div>
//   )
// }

// export default App



// import React, { useEffect, useState } from 'react'

// const App = () => {
//        const [value, setValue]   = useState(0);
//        const [number, setNumber]   = useState(0);
    
//   useEffect(()=>{
//     console.log("hello")
//   },[number])
//   return (
//     <div>
//       <h1>{value}</h1>
//       <h1>{number}</h1>
//       <button onClick={()=>setValue(value+1)}>click+</button>
//       <button onClick={()=>setNumber(number-1)}>click-</button>
//     </div>
//   )
// }

// export default App










import React from 'react'
import Api from './Api'
import Github from './Github'
import Form from './Form'
import Map from './Map'

import ValidationForm from './ValidationForm'


function App() {
  return (
    <div>
      {/* <Api/> */}
      {/* <Github/> */}
      {/* <Map/> */}
      {/* <Form/> */}
      <ValidationForm/>
      
    </div>
  )
}

export default App
