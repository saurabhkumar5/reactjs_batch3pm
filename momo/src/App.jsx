
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










// import React from 'react'
// import Api from './Api'
// import Github from './Github'
// import Form from './Form'
// import Map from './Map'

// import ValidationForm from './ValidationForm'
// import Nasa from './Nasa'


// function App() {
//   return (
//     <div>
//       <Api/>
//       <Github/>
//       <Map/>
//       <Form/>
//       <ValidationForm/>
//       <Nasa/>
      
//     </div>
//   )
// }

// export default App



// import React, { createContext } from 'react'
// import CM from './CM'
// import Janta from './Janta'
// import './CM.css'

// // create, provider, consumer
//  const data = createContext();
 
// function App() {
//   let paisa = "5000"
//   return (
//     <div className='pm'>
//       <h1>hello i am pm</h1>
//       <data.Provider value={paisa}>
//        <CM/>
//       </data.Provider>
     
      
//     </div>
//   )
// }

// export default App;
// export {data}





// import React, { createContext } from 'react'
// import CM from './CM'
// import Janta from './Janta'
// import './CM.css'

// // create, provider, consumer
//  const data = createContext();
//  const data1 = createContext();
 
// function App() {
//   let paisa = "5000";
//   let bonus = "10000"
//   return (
//     <div className='pm'>
//       <h1>hello i am pm</h1>
//       <data.Provider value={paisa}>
//        <data1.Provider value={bonus}>
//         <CM/>
//        </data1.Provider>
//       </data.Provider>
     
      
//     </div>
//   )
// }

// export default App;
// export {data,data1}




// import React, { useRef, useState } from 'react'
// import './App.css'

// function App() {
//          const a = useRef("");
//           const [name, setName] = useState("aman")

//            function reset(){
//                  setName("")
//                  a.current.focus()
//            }
//            function change(){
//             // setName("raman")

//             a.current.value = "raman";
//             a.current.style.color = "blue"
//            }
//   return (
//     <div>
//       <h1>hello</h1>
//       <p>world</p>
//       <input className='momo' ref={a} type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
//       <button onClick={reset}>reset</button>
//       <button onClick={change}>change</button>
//     </div>
//   )
// }

// export default App






import React from 'react'
import SimpleSlider from './SimpleSlider'

function App() {
  return (
    <div>
      <SimpleSlider/>
    </div>
  )
}

export default App