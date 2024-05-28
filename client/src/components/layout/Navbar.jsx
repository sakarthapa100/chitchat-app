import React, { Suspense, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box // Import Box from MUI
} from '@mui/material';
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Add as AddIcon,
  Group as GroupIcon,
  Home as HomeIcon,
  Notifications as NotificationsIcon,
  ExitToApp as ExitToAppIcon,
  Search,
} from '@mui/icons-material';

import SearchDialog from '../../specific/Search'
import NotificationDialog from '../../specific/Notifications'
import NewGroupDialog from '../../specific/NewGroup'
import { useMediaQuery, useTheme } from '@mui/material';
import {useNavigate} from 'react-router-dom'

export default function NavBar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


const navigate = useNavigate()

const[isSearch, setIsSearch] = useState(false)
const[isNewGroup, setIsNewGroup] = useState(false)
const[isNotification, setIsNotification] = useState(false)



  const handleMobile = () => {
    console.log("Mobile");
  };
  const openSearchDialog = () => {
    setIsSearch((prev)=> !prev)
  };
  const seeNotification = () => {
    setIsNotification((prev)=> !prev)
  };
  const openNewGroup = () => {
    setIsNewGroup((prev)=> !prev)
  };
  const navigateToGroup = () => {
    navigate('/groups')
  };
 const logoutHandler =()=>{
  console.log("hh")
 }
 
  return (
    <div sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#f44336' }}>
        <Toolbar>
          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <IconButton color='inherit' onClick={handleMobile}>
              <MenuIcon />
            </IconButton>
          </Box>

          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Chit chat
          </Typography>
          {!isMobile && (
            <>
              <IconButton color="inherit" size="large" onClick={openSearchDialog}>
                <SearchIcon />
              </IconButton>
              <IconButton color="inherit" size="large" onClick={openNewGroup}>
                <AddIcon />
              </IconButton>
              <IconButton color="inherit" size="large"onClick={navigateToGroup} >
                <GroupIcon />
              </IconButton>
              <IconButton color="inherit" fontSize="large" onClick={seeNotification}>
                <NotificationsIcon />
              </IconButton>
              <IconButton color="inherit" onClick={logoutHandler}>
                <ExitToAppIcon />
              </IconButton>
            </>
          )}
        </Toolbar>
      </AppBar>

{
  isSearch && (
<Suspense fallback={<div> Loading..</div>}>
    <SearchDialog />
</Suspense>
  

  )
}
{
  isNewGroup && (
<Suspense fallback={<div> Loading..</div>}>
    <NewGroupDialog />
</Suspense>
  

  )
}
{
  isNotification && (
<Suspense fallback={<div> Loading..</div>}>
    <NotificationDialog />
</Suspense>
  

  )
}

    </div>
  );
}
