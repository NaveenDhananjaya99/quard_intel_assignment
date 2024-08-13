import React from 'react';
import { Box, Grid, List, ListItem, Typography, Button,  IconButton, Paper,Card,CardContent,CardActions ,Divider} from '@mui/material';
import TeamsList from './TeamList/TeamList';
import FolderList from './folderList/FolderList';
import SidebarFooter from './sidebarFooter/SidebarFooter';
import SidebarHeader from './sidebarHeader/SidebarHeader';


const SideNavigationbar = ({ isMobile, toggleDrawer }) => (
  <Box
    sx={{
        height: '100%', 
      width: isMobile ? '100%' : "auto",
      bgcolor: 'background.paper',
     
      position: isMobile ? 'absolute' : 'static',
      zIndex: isMobile ? 1300 : 'auto',
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'space-between'
      
    }}
  >
    {isMobile && (
      <IconButton onClick={toggleDrawer}>
        {/* <MenuIcon /> */}
       Menu
      </IconButton>
    )}
    <Paper 
      sx={{
        p: 2,
        pb:5,
        
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        bgcolor: 'background.paper', 
        borderRadius: '15px', 
        width: isMobile ? '100%' : "auto",
        maxWidth: 300,
        border: '1px solid', // Adds a solid border
        borderColor: 'divider',
      }}
    >
   <SidebarHeader/>
    <TeamsList/>

    <FolderList/>
    
   
      <SidebarFooter/>
  
    </Paper>
    
   
  </Box>
);

export default SideNavigationbar;