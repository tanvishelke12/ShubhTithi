import React from 'react'
import './Navbar.css'
import img from '../../assets/Logo.png'
export const Navbar = () => {
  return (
    <div className='navbar'>
 
    <img src={img} className='nav-logo'/>
    <h1>Admin Portal</h1>

    </div>
  )
}
export default Navbar
