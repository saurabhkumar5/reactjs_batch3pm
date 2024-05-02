import './App.css';
import Header from './Header';
import Footer from './Footer';
import Image from './Image';

function App(){

  return( 
        <div>
         
         <Header/>
         <div className='container'>
         <Image img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/da34f1382cb97166f2bd96653bc70e1b" name="shilpa mam"/>
         <Image img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gnfaeaeddfxdzrxzoikp" name="sahithi mam"/>
         <Image img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bhiqtneraycbpeqjworl"/>
         <Image img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/a6h2um4pfxtcxjdgerfb"/>
         <Image img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/mrqt0zyrkl6zmxpngegp"/>
         <Image img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/s2fcnd0cce1dsmxgel0m"/>
         <Image img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/a056e32315368f2cc51eb46737433d68"/>
         <Image img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bbuwmp35jmzxgpwyfq7b"/>
         <Image img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/exlyyvgrejqj9meqbnki"/>
         <Image img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/a6h2um4pfxtcxjdgerfb"/>
         <Image img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f44bc9708c514cd2dd6ae0d8b4677214"/>
         </div>
         <Footer/>
        
        </div>
      
        
      
  )
           
}

export default App;





// function momo(a){
//   console.log(a)
// }
// momo(123)
// momo(456)