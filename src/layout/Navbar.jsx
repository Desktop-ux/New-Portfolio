import { useState } from 'react'
import logo from '../assets/logo.png'
import './Navbar.css'

const Navbar = () => {

    const navLinks = [
        {href: '#about', label : 'About'},
        {href: '#experience', label : 'Experience'},
        {href: '#projects', label : 'Projects'},
        {href: '#contact', label : 'Contact'},
    ]

    const [navOpen, setNavOpen] = useState(false)

  return (
    <header >
       <nav >
        <a href='#' >
            <img className='logo'  src={logo} alt="Logo" />
        </a>
        <div>
            <div className='nav-links'>
            {navLinks.map((link , key)=>
                <a  href={link.href} key={key}>{link.label}</a>
            )}
            </div>
        </div>
        <button className='Contact-button'>Contact Me</button>
        <button className='Menu-button' onClick={()=> setNavOpen((prev)=> !prev )} >
            {navOpen ? <i class="fa-solid fa-xmark"></i>  : <i class="fa-solid fa-bars"></i>}
            </button>
       </nav>
       {navOpen && (<div className="mobile-menu">
            <div className='mobile-nav-links'>
                {navLinks.map((link , key)=>
                <a  href={link.href} key={key}>{link.label}</a>
            )}

            <button className='mob-Contact-button'>Contact Me</button>
            </div>
       </div>)}
    </header>
  )
}

export default Navbar