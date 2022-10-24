import React from 'react'
import Button from '../../mui_components/Button/Button'
import './styles.css'
import TemporaryDrawer from './Drawer';

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
                <p className='link'>
                    <Button text={'Dashboard'} className={'button'} />
                </p>
            </a>
        </div>
        <div className='menu-div'>
            <TemporaryDrawer />
        </div>
    </div>
  )
}

export default Header