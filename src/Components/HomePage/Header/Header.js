import React from 'react'
import './styles.css'

const Header = () => {
  return (
    <div className='navbar'>
        <a href='/'>
            <h1>Crypto Dashboard.</h1>
        </a>
        <div className='links-div'>
            <a href='/'>
                <p className='link'>Home</p>
            </a>
            <a href='/compare'>
                <p className='link'>Compare</p>
            </a>
            <a href='/about'>
                <p className='link'>About Us</p>
            </a>
            <a href='/dashboard'>
                <p className='link'>Dashboard</p>
            </a>
        </div>
    </div>
  )
}

export default Header