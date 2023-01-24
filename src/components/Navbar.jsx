import React from 'react'
import logoApple from '../assets/apple-logo.png'

function Navbar() {
  return (
    <div className='navbar'>
        <img src={logoApple} alt="logo-apple" />
        <div className='items'>
            <a href="#">Home</a>
            <a href="#">Product</a>
            <a href="#">About</a>
            <a href="#">Service</a>
        </div>
    </div>
  )
}

export default Navbar
