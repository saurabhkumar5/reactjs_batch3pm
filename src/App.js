import "./App.css";
import Header from './Header/Header.js'
import Footer from "./Footer/Footer";
import Body from "./body/Body";

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from "./Header/About.js";
import Services from "./Header/Services.js";
import Contact from "./Header/Contact.js";
import Form from "./Form.js";
import Img from './shilpa.jpeg'

function App() {
  return (
    <div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFsPoZ5DAtC-vAsNKl8Nj86WkbAH1kDiLpdY79UD-6Ww&s"/>
      {/* <Form/> */}
      {/* <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Body/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/service/:category" element={<Services/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<h1>Error 404 page not found</h1>}/>


        </Routes>
        
      </BrowserRouter> */}
    </div>
  );

  // return(
  //       <div>

  //        <Header/>
  //        <div className='container'>

  //        <Image name="dosa" rating="4" address= "sector16" img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gnfaeaeddfxdzrxzoikp" />
  //        <Image name="aalu" rating="12" address= "sector60" img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bhiqtneraycbpeqjworl"/>
  //        <Image name="maggie" rating="3" address= "sector61" img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/a6h2um4pfxtcxjdgerfb"/>
  //        <Image name="jalebi" rating="6" address= "sector68" img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/mrqt0zyrkl6zmxpngegp"/>
  //        <Image name="samosa" rating="1.2" address= "sector69" img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/s2fcnd0cce1dsmxgel0m"/>
  //        <Image name="halva" rating="4" address= "sector63" img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/a056e32315368f2cc51eb46737433d68"/>
  //        <Image name="chaval daal" rating="3" address= "sector69" img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bbuwmp35jmzxgpwyfq7b"/>
  //        <Image name="laddu" rating="4" address= "sector67" img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/exlyyvgrejqj9meqbnki"/>
  //        <Image name="gulab jamun" rating="2.3" address= "sector60" img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/a6h2um4pfxtcxjdgerfb"/>
  //        <Image name="rasgulla" rating="4" address= "sector68" img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f44bc9708c514cd2dd6ae0d8b4677214"/>
  //        <Image name="halva" rating="4" address= "sector63" img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/a056e32315368f2cc51eb46737433d68"/>
  //        <Image name="chaval daal" rating="3" address= "sector69" img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bbuwmp35jmzxgpwyfq7b"/>
  //        <Image name="laddu" rating="4" address= "sector67" img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/exlyyvgrejqj9meqbnki"/>
  //        <Image name="gulab jamun" rating="2.3" address= "sector60" img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/a6h2um4pfxtcxjdgerfb"/>
  //        <Image name="rasgulla" rating="4" address= "sector68" img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f44bc9708c514cd2dd6ae0d8b4677214"/>
  //        </div>
  //        <Footer/>

  //       </div>

  // )
}

export default App;
