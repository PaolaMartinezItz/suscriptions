import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Search from '../Search';

const Header = () => {
  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Grid
      container
      item
      xs={12}
      sx={{
        height: small ? '120px' : '70px',
        alignItems: small ? 'flex-start' : 'flex-end',
      }}
    >
      <Grid item xs={12} md={9}>
        <Typography variant={small ? 'h5' : 'h4'}>
          Suscriptions
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        md={3}
        container
        sx={{ justifyContent: small ? 'center' : 'flex-end' }}
      >
        <Search />
      </Grid>
    </Grid>
  );
};

export default Header;
