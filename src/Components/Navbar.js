import React from 'react'
import'../Styles/Navbar.css'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
   <>
    <div className="navbar">
    <div className="logo--image">
       <Link to={'/'}><img src='Images/Logo.png' alt=""/></Link>
       <Link to={'/'}><span>Trade Smart</span></Link>
    </div>
    <div className="links">
        <Link to={'/Stocks'}><span>Stocks </span></Link>
    </div>
    </div>
   </>
  )
}
