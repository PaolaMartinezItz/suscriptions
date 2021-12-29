import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AttractionsIcon from '@mui/icons-material/Attractions';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import menu from './Sidebar.list';

const SidebarTemplate = ({ drawerWidth }) => {
  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Drawer sx={{ width: drawerWidth }} variant={small ? 'temporary' : 'permanent'}>
      <Grid container sx={{ m: 2, alignItems: 'center' }}>
        <Grid item xs={3}>
          <AttractionsIcon fontSize="large" />
        </Grid>
        <Grid item xs={9}>
          <Typography variant="h6">
            Atrato
          </Typography>
        </Grid>
      </Grid>
      <List>
        {menu.map((item) => (
          <ListItem key={item.id}>
            <ListItemButton selected={item.selected}>
              <ListItemIcon
                sx={{ color: item.selected ? 'common.primaryDark' : 'primary' }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                disableTypography
                primary={item.label}
                sx={{
                  color: item.selected ? 'common.primaryDark' : 'primary',
                  fontWeight: item.selected ? 500 : 'inherit',
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

SidebarTemplate.propTypes = {
  drawerWidth: PropTypes.number.isRequired,
};

export default SidebarTemplate;
