import React, { useContext } from 'react';
import { Drawer } from '@mui/material';
import SideBarContent from './SideBarContent';
import { ThemeContext } from '../App'; // Import the ThemeContext

const SideBar = ({ openDrawer }) => {
  const { theme } = useContext(ThemeContext); // Access the theme from the context

  return (
    <Drawer
      anchor="left"
      open={openDrawer}
      hidebackDrops={true}
      ModalProps={{
        keepMounted: true,
      }}
      variant="persistent"
      sx={{
        '& .MuiDrawer-paper': {
          marginTop: '64px',
          width: 250,
          background: theme === 'dark' ? 'black' : '#F5F5F5', // Apply dark mode background color
          borderRight: 'none',
          height: 'calc(100vh - 60px)',
          color: theme === 'dark' ? 'white' : 'black', // Apply dark mode text color
        },
      }}
    >
      <SideBarContent />
    </Drawer>
  );
};

export default SideBar;
