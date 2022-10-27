import React, { useState } from 'react'
import Button from '../../mui_components/Button/Button'
import './styles.css'
import TemporaryDrawer from './Drawer';
import { Switch } from '@mui/material';
import { motion } from "framer-motion"

const Header = ({ status, setStatus }) => {
    const setDark = () => {
        localStorage.setItem("theme", "dark");
        document.documentElement.setAttribute("data-theme", "dark")
    }
    const setLight = () => {
        localStorage.setItem("theme", "light");
        document.documentElement.setAttribute("data-theme", "light")
    }
    const storedTheme = localStorage.getItem("theme");
    
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: light").matches
    
    const defaultDark =
    storedTheme === "dark" || (storedTheme === null && prefersDark);

    const [darkTheme, setDarkTheme] = useState(
        defaultDark == "light" ? true : false
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
                <motion.h1 
                animate={{scale: [1, 2, 2, 1, 1],
                    rotate: [0, 30, 0, -30, 0],}}
                >Crypto Dashboard.</motion.h1>
            </a>
            <div className='links-div'>
                <Switch
                    defaultChecked
                    value={!darkTheme}
                    onClick={() => toggleTheme()}
                />
                <a href='/'>
                    <p className='links'>Home</p>
                </a>
                <p className='links' onClick={() => setStatus(!status)}>Search</p>
                <a href='/compare'>
                    <p className='links'>Compare</p>
                </a>
                <a href='/about'>
                    <p className='links'>About Us</p>
                </a>
                <a href='/dashboard'>
                    <p className='links'>
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