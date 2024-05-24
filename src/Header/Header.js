import './Header.css'
import {Link, NavLink} from 'react-router-dom'

function Header(){
    return(
        <header>
           
          <h1>website logo</h1>

          <nav>
             {/* <a href="/" id="home">Home</a>
             <a href="/about" id="about">About</a>
             <a href="/service" id="service">Services</a>
             <a href="/contact" id="contact">Contact</a> */}

             {/* <Link to="/" id="home">Home</Link>
             <Link to="/about" id="about">About</Link>
             <Link to="/service" id="service">Services</Link>
             <Link to="/contact" id="contact">Contact</Link> */}

             <NavLink to="/" id="home" style={({isActive})=>{
               return{backgroundColor:isActive?'red':' '}}
             }
              >Home</NavLink>
             <NavLink to="/about" id="about" style={({isActive})=>{
               return{backgroundColor:isActive?'red':' '}}
             }>About</NavLink>
             <NavLink to="/service" id="service" style={({isActive})=>{
               return{backgroundColor:isActive?'red':' '}}
             }>Services</NavLink>
             <NavLink to="/contact" id="contact" style={({isActive})=>{
               return{backgroundColor:isActive?'red':' '}}
             }>Contact</NavLink>

          </nav>
        </header>
    )
}

export default Header;