import React from 'react';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import { useState } from 'react';

const Main = () => {
  const [openDrawer, setOpenDrawer] = useState(true);

  const toggleDrawer = () => {
    setOpenDrawer((prevState) => !prevState);
  };

  return (
    <div>
      <Header
        toggleDrawer={toggleDrawer}
         // Replace with your desired background color
      />
      <SideBar  openDrawer={openDrawer} />
      <div className='aman'>actual message</div>
    </div>
  );
};

export default Main;
