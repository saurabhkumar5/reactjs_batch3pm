import './Header.css'

function Header(){
    return(
        <header>
           
          <h1>website logo</h1>

          <nav>
             <a href="/" id="home">Home</a>
             <a href="/about" id="about">About</a>
             <a href="/service" id="service">Services</a>
             <a href="/contact" id="contact">Contact</a>
          </nav>
        </header>
    )
}

export default Header;