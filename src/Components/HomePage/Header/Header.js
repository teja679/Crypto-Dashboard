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
                    animate={{ rotate: [2, -2, 2, 0], }}
                >Crypto Dashboard.</motion.h1>
            </a>
            <div className='links-div'>
                <Switch
                    defaultChecked
                    value={!darkTheme}
                    onClick={() => toggleTheme()}
                />
                <motion.a whileHover={{
                    scale: 1.2,
                    transition: { duration: 1 },
                }}
                    whileTap={{ scale: 0.9 }} href='/'>
                    <p className='links'>Home</p>
                </motion.a>
                <p className='links' onClick={() => setStatus(!status)}>Search</p>
                <motion.a whileHover={{
                    scale: 1.2,
                    transition: { duration: 1 },
                }}
                    whileTap={{ scale: 0.9 }} href='/compare'>
                    <p className='links'>Compare</p>
                </motion.a>
                <motion.a whileHover={{
                    scale: 1.2,
                    transition: { duration: 1 },
                }}
                    whileTap={{ scale: 0.9 }} href='/dashboard'>
                    <p className='links'>
                        <Button text={'Dashboard'} className={'button'} />
                    </p>
                </motion.a>
            </div>
            <div className='menu-div'>
                <TemporaryDrawer darkTheme={darkTheme} toggleTheme={toggleTheme} status={status} setStatus={setStatus}/>
            </div>
        </div>
    )
}

export default Header