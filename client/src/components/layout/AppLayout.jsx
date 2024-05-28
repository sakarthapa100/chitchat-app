import React from 'react'
import Header from './Navbar'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ChatList from '../../specific/ChatList';
import { samplechats } from '../../constants/sampleData';

const AppLayout = () =>WrappedComponent=> {
  return(props)=>{
      return (
    <>
   <Header />
   <Grid container height={"calc(100vh - 4rem)"}>
  <Grid 
    item 
    xs={4} 
    md={3} 
    sx={{
      display: { xs: "none", sm: "block" }
    }} 
    height={"100%"} 
  >
    <ChatList chats={samplechats} />
    
  </Grid>
  
  <Grid 
    item 
    xs={12} 
    sm={8} 
    md={5} 
    lg={6} 
    height="100%" 
    bgcolor="primary.main"
  >
    <WrappedComponent {...props} />
  </Grid>
  
  <Grid 
    item 
    xs={4} 
    md={4} 
    lg={3} 
    sx={{
      display: { xs: "none", sm: "block" }
    }} 
    height={"100%"} 
  >
    Third
  </Grid>
</Grid>



    
   
    </>
    

  )
  }

}

export default AppLayout