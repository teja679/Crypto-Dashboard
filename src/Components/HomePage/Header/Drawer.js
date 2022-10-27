import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import { IconButton, Switch } from '@mui/material';
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';
import './styles.css'
import { motion } from 'framer-motion'

export default function TemporaryDrawer({ darkTheme, toggleTheme, status, setStatus }) {
 
  const [open, setOpen] = React.useState(false)

  return (
    <div className='drawer'>
      <div className='menu-button'>
        <IconButton onClick={() => setOpen(true)}>
            <MenuOpenRoundedIcon color='primary' />
        </IconButton>
      </div>
      <Drawer anchor={'right'} open={open} onClose={() => setOpen(false)}>
        <div className='drawer-div'>
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
                <a href='/dashboard'>
                    <p className='links'>Dashboard</p>
                </a>
        </div>
      </Drawer>
    </div>
  );
}
