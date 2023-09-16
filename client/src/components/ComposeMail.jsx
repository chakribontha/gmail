import {useState} from 'react';
import {Dialog, Box , Typography,styled, InputBase, TextField, Button, imageListClasses} from '@mui/material';
import {Close , DeleteOutline  }  from '@mui/icons-material';
import useApi from '../hooks/useApi';
import { API_URL } from '../services/api.urls';
 const dialogStyle ={
    height:'90%',
    width:'80%',
    maxWidth:'100%',
    maxHeight:'100%',
    boxShadow:'none',
    borderRadius:'10px 10px 0 0 ',
    
}


const   Header = styled (Box)({
    display:'flex', justifyContent:'space-between',padding:'10px 15px',
    
    '&>p':{
        fontSize:14,fontWeight:500
    }
})

const RecipientsWrapper=styled(Box)({
    display:'flex',
    flexDirection:'column', padding :'0 15px',
    '&> div':{
        fontSize:14,
        borderBottom:'1px solid green',
        marginTop:10
    }
})

const Footer = styled(Box)({
    display : "flex",
    justifyContent:"space-between",
    padding: '10 15px',
    alignItems:'center',position: 'sticky', // Make the Footer sticky
    bottom: 0,
    zIndex: 0,
})

const SendButton =styled(Button)({
  background:"#0B57D0",
  color:'#fff', 
  textTransform:'none',
  borderRadius:18,
  width:100
})



const CloseButton=styled(Close)({cursor:'pointer'})
const DeleteButton=styled(DeleteOutline)({cursor:'pointer'})


const ComposeMail = ({openDialog , setOpenDialog}) => {
const [data, setData]=useState({});
const sentEmailService=useApi(API_URL.saveSentEmail);

   const config={
  
      Host : "smtp.elasticemail.com",
      Username : process.env.REACT_APP_USERNAME,
      Password : process.env.REACT_APP_PASSWORD,
      Port:2525,
      

   }

  const opPosite=()=>{
    setOpenDialog(prev=>!prev)
  }
  const closeButton=()=>{
    opPosite()
  }

 const sendMail=(e)=>{
  e.preventDefault();
   if (window.Email){




  window.Email.send({
    ...config,
    To : data.to,
    From : "chakribontha9@gmail.com",
    Subject : "data.subject",
    Body : "data.body"
}).then(
  message => alert(message)
);
  const payload ={
    to:data.to,
    subject:data.subject,
    body:data.body,
    date:new Date(),
    image:"",
    name:'aman',
    starred:false,
    type:'sent'
  
  }
  sentEmailService.call(payload)
  if (!sentEmailService.error){
    setOpenDialog(false)
    setData({})
  }

   }
      setOpenDialog(false);
 }

const onValueChange=(e,field)=>{
  setData({...data,[field]:e.target.value});
  console.log(field);
  console.log(e);
}





  return (
   <Dialog
     open ={openDialog}
     PaperProps={{sx:dialogStyle}}
      
>
    <Header>
      <Typography>   NEW MESSAGE </Typography>
      <CloseButton fontSize='small' onClick={()=>{closeButton()}}/>
    </Header>

    <RecipientsWrapper>
       <InputBase placeholder ="Recipients"name="to" onChange={(e)=>onValueChange(e,'to')}/>
       <InputBase placeholder ="subject" name="subject"onChange={(e)=>onValueChange(e)}/>
    </RecipientsWrapper>

    <TextField  multiline rows={20} sx={
      {'& .MuiOutlinedInput-notchedOutline':{
        border:'none'
        
      }}
    }onChange={(e)=>onValueChange(e)}
    name='body'
    />
    <Footer>
      <SendButton onClick={(e)=>sendMail(e)}
      >
        send
      </SendButton>

      <DeleteButton onClick={()=>setOpenDialog(false)}/>
    </Footer>
   </Dialog>
  )
}

export default ComposeMail
