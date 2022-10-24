import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import { IconButton } from '@mui/material';
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';
import './styles.css'
export default function TemporaryDrawer() {
 
    const [open, setOpen] = React.useState(false)


  return (
    <div>
      <div className='menu-button'>
        <IconButton onClick={() => setOpen(true)}>
            <MenuOpenRoundedIcon color='primary' />
        </IconButton>
      </div>
      <Drawer anchor={'right'} open={open} onClose={() => setOpen(false)}>
        <div className='drawer-div'>
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

      </Drawer>
    </div>
  );
}
