import React, { useState } from 'react'
import Button from '../../mui_components/Button/Button'
import './styles.css'
import TemporaryDrawer from './Drawer';
import Search from '../../DashboardPage/Search';
import { Switch } from '@mui/material';

const Header = () => {
    const setDark = () => {
        localStorage.setItem("theme", "dark");
        document.documentElement.setAttribute("data-theme", "dark")
    }
    const setLight = () => {
        localStorage.setItem("theme", "light");
        document.documentElement.setAttribute("data-theme", "light")
    }
    const storedTheme = localStorage.getItem("theme");
    
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark").matches
    
    const defaultDark =
    storedTheme === "dark" || (storedTheme === null && prefersDark);

    const [darkTheme, setDarkTheme] = useState(
        defaultDark == "dark" ? true : false
    );

    if (defaultDark) {
        setDark();
    } 

    
  const toggleTheme = (e) => {
    if (!darkTheme) {
      setDark();
    } else {
      setLight();
    }
    setDarkTheme(!darkTheme);
  };
    return (
        <div className='navbar'>
            <a href='/'>
                <h1>Crypto Dashboard.</h1>
            </a>
            <div className='links-div'>
                <Switch
                    defaultChecked
                    value={!darkTheme}
                    onClick={() => toggleTheme()}
                />
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