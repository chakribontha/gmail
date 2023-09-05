import React from 'react'
import {Drawer , styled } from '@mui/material';
import SideBarContent from './SideBarContent';



const SideBar = ({openDrawer}) => {
  return (
   <Drawer
   anchor ='left'
   open={openDrawer}
   hidebackDrops ={true}
   ModalProps={{
    keepMounted:true
   }}
   variant = "persistent"
   sx= {{
    '& .MuiDrawer-paper':{
        marginTop:'64px', width : 250,background:'#F5F5F5',
        borderRight :"none",
        height:'calc(100vh-60px)'


    }
   }}>
   <SideBarContent/></Drawer>
  )
}

export default SideBar
