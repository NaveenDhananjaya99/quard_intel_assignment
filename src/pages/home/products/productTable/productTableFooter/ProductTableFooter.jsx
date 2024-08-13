import React, { useState } from 'react';
import { Paper, Typography, IconButton, Button, Grid, Box } from '@mui/material';
import ArchiveIcon from '@mui/icons-material/Archive';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CloseIcon from '@mui/icons-material/Close';

function ProductTableFooter({ selectedBrands, onClose }) {
  return (
<Box sx={{ display: 'flex', justifyContent: 'space-evenly', mt: 5 }}>
      <Paper
        elevation={3}
        sx={{
          padding: '16px',
          width: '50%', // Adjust width for responsiveness
      
          position: 'relative',
        }}
      >
        {/* Close Icon */}
        {/* <IconButton
          onClick={onClose}
          sx={{
            position: 'inherit',
            top: '8px',
            right: '8px',
          }}
        >
          <CloseIcon />
        </IconButton> */}

        <Grid container spacing={2} alignItems="center">
          {/* Number of Selected Brands */}
          <Grid item xs={12} sm={3} container alignItems="center"  justifyContent="space-evenly">
            <Paper
              sx={{
                padding: '8px 16px',
                backgroundColor: 'black',
                color: 'white',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="body1">
                {selectedBrands}
              </Typography>
            </Paper>
            <Typography variant="body1" sx={{ ml: 2 }}>
              Selected
            </Typography>
          </Grid>

          {/* Action Buttons */}
          <Grid item xs={12} sm={9} container spacing={1} justifyContent="space-evenly">
            <Button
              variant="contained"
              startIcon={<ArchiveIcon />}
              sx={{ marginRight: '8px' ,
                backgroundColor: "background.paper",
                color: "black",
                textTransform: "none", // Turn off capitalization
                "&:hover": {
                  backgroundColor: "#f5f5f5",
                },
              }}
            >
              Archive
            </Button>
            <Button
              variant="contained"
              startIcon={<DeleteIcon />}
              sx={{ marginRight: '8px' ,
                backgroundColor: "background.paper",
                color: "red",
                textTransform: "none", // Turn off capitalization
                "&:hover": {
                  backgroundColor: "#f5f5f5",
                },
              }}
            >
              Delete
            </Button>
            <Button
              variant="contained"
              startIcon={<MoreHorizIcon />}
              sx={{ marginRight: '8px' ,
                backgroundColor: "background.paper",
                color: "black",
                textTransform: "none", // Turn off capitalization
                "&:hover": {
                  backgroundColor: "#f5f5f5",
                },
              }}
            >
              More
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  )
}

export default ProductTableFooter