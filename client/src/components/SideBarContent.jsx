import React from 'react'
import {Box, Button,styled, List , ListItem} from '@mui/material';
import { CreateOutlined } from '@mui/icons-material';
import { SIDEBAR_DATA } from '../config/sidebar.config';
import ComposeMail from './ComposeMail';
const ComposeButton = styled(Button)({
    background:'#c2e7fff',
    color:'#green',padding :16,
    borderRadius:16, minWidth:16,textTransform:'none'

})

const Containbox =styled(Box)({
    padding:8,
    '& > ul':{
        padding:'10px 0 0 5px',
        fontSize:14,
        fontWeight:500,
        cursor:'pointer'
    },
    '& > ul>li>svg':
    {
        marginRight:20
    }


})

const SideBarContent = () => {
  return (
      <Containbox>
        
        <ComposeButton>
            <CreateOutlined/>compose 
        </ComposeButton>
       
       <List>
         {
            SIDEBAR_DATA.map(data=>(
                <ListItem>
                  <data.icon fontSize="small"/>  {data.title}
                </ListItem>
            ))
         }
       </List>
       <ComposeMail/>
      </Containbox>
  
  )
}

export default SideBarContent
