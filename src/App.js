import './App.css';
import img from './shilpa.jpeg';
import Header from './Header';
import Footer from './Footer';


function App(){
  console.log("hello from reactjs")

  return( 
        <div>
         
         <Header/>
         

        <div>
          <img src={img}/>
          <img src={img}/>
          <img src={img}/>
          <img src={img}/>
        </div>

        <Footer/>
        
        </div>
      
        
      
  )
           
}

export default App;