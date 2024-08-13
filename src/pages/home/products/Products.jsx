import React from "react";
import { Box, Grid, List, ListItem, Typography, TextField, Avatar, Paper, Table, TableHead, TableBody, TableRow, TableCell, useMediaQuery, IconButton } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
 
import ProductTableNew from "./productTable";

function Products({toggleDrawer,isMobile}) {

  
  return (
    <Box p={isMobile ? 1 : 3}>
      {/* Header with buttons */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        {isMobile && (
          <IconButton onClick={toggleDrawer}>
            {/* <MenuIcon /> */}
          Menu
          </IconButton>
        )}
        {/* <Typography variant="h4">Products</Typography>
        <Grid item xs={12} sm={4}>
        <TextField
          fullWidth
          placeholder="Search..."
          InputProps={{
            startAdornment: <SearchIcon />,
          }}
        />
      </Grid>
      <Grid item xs={12} sm={2} container justifyContent="flex-end">
        <IconButton>
          <MessageIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
      </Grid> */}
      </Box>
      {/* Products Table */}
  <ProductTableNew/>
    </Box>
  );
}

export default Products;
