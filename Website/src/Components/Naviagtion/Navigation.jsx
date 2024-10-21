import React from 'react'
import img from '../assets/Logo.png'
import './Navigation.css'
import { Link } from 'react-router-dom'

export const Navigation = () => {
  return (
    <div>
<nav className="navbar">
        <div className="logo">
            <img src={img}/>
        </div>
        <ul className="nav-links">
            <li><Link to={'/'}>Gateway</Link></li>
            <li className="dropdown">
            <li><Link to={'/men'}>Men</Link></li>
                <div className="dropdown-content">
                    <li><Link to={'men/wedding'}>Wedding</Link></li>
                    <li><Link to={'men/reception'}>Reception</Link></li>
                    <li><Link to={'men/assessories'}>Asssceries</Link></li>
                </div>
            </li>
            <li className="dropdown">
            <li><Link to={'/women'}>Women</Link></li>
                <div class="dropdown-content">
                    <li><Link to={'/women/wedding'}>Wedding</Link></li>
                    <li><Link to={'/women/reception'}>Reception</Link></li>
                    <li><Link to={'/women/assessories'}>Asscecories</Link></li>
                </div>
            </li>
            {/* <li><a href="../About/About.jsx" target='_blank'>About Us</a></li> */}
            <li><Link to={'/contact'}>Contact Us</Link></li>
            <li><Link to={'/about'}>About Us</Link></li>



            {/* <li><Link to={'/login'}>Login</Link></li> */}

            {
            localStorage.getItem('auth-token')
            ?<button onClick={()=>{localStorage.removeItem('auth-token'); window.location.replace('/')}}>Logout</button>
            : <li><Link to={'/login'}>Login</Link></li>
            }


            {/* <li><Link to={'/signup'}>SignUp</Link></li> */}
            <li><Link to={'/cart'}><svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
            </svg></Link>
            </li>

        </ul>
    </nav>


    </div>
  )
}
