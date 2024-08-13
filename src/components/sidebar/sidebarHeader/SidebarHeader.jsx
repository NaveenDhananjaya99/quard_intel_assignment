import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import profilePic from '../../../assets/images/profile-pic.jpg'
import companyLogo from '../../../assets/images/company-logo.jpg'

const SidebarHeader = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px',
       
     
      }}
    >
      
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <img 
          src={companyLogo} 
          alt="Company Logo" 
          style={{ height: '40px', marginRight: '16px' }} // Adjust logo size and spacing
        />
         <Box
        sx={{
        
          alignItems: 'center',
        }}
      >
        <Typography variant="body1">INC</Typography>
        <Typography variant="h6">InnovateHub</Typography>
      </Box>
        
      </Box>

     
      <Avatar
        alt="Profile Picture"
        src={profilePic} // Replace with the actual profile picture URL
        sx={{ width: 40, height: 40 }}
      />
    </Box>
  );
};

export default SidebarHeader;
