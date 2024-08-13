import React from 'react';
import { Grid, Paper, useMediaQuery } from '@mui/material';
import SideNavigationbar from '../../components/sidebar/SideNavigationBar';
import Products from './products/Products';

const HomePage = () => {
  // Media queries for mobile and tablet sizes
  const isMobile = useMediaQuery('(max-width:600px)');
  const isTablet = useMediaQuery('(max-width:1023px)');

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Grid container direction={isMobile ? 'column' : 'row'} spacing={2} sx={{ p: 2, pb: 5 }}>
      {/* Sidebar */}
      <Grid
        item
        xs={12}
        sm={isTablet ? 'auto' : 3}
        sx={{ display: drawerOpen || !isTablet ? 'block' : 'none' }}
      >
        <SideNavigationbar isMobile={isMobile} toggleDrawer={toggleDrawer} />
      </Grid>

      <Grid
        item
        xs={12}
        sm={isTablet ? 12 : 9}
        sx={{ pl: 2, pr: 2 }}
      >
        <Paper
          sx={{
            p: 2,
            pb: 5,
            position: 'inherit',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            bgcolor: 'background.paper',
            borderRadius: '15px',
            border: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Products isMobile={isMobile} toggleDrawer={toggleDrawer} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default HomePage;
