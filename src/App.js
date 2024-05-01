import './App.css';
import Header from './Header';
import Footer from './Footer';
import Image from './Image';
import shilpa from './shilpa.jpeg';
import hr from './sahithi.jpeg'
import marketing from './abhishek.jpeg'


function App(){
  console.log("hello from reactjs")

  return( 
        <div>
         
         <Header/>
         <div className='container'>
         <Image momo={shilpa} name="shilpa mam"/>
         <Image momo={hr} name="sahithi mam"/>
         <Image momo={marketing}/>
         <Image/>
         </div>
         <Footer/>
        
        </div>
      
        
      
  )
           
}

export default App;