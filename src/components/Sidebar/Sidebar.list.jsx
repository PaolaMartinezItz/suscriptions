import React from 'react';
import IosShareIcon from '@mui/icons-material/IosShare';
import DashboardIcon from '@mui/icons-material/Dashboard';
import StyleIcon from '@mui/icons-material/Style';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const menu = [
  {
    id: 'menu-item-transactions',
    label: 'Transactions',
    icon: <IosShareIcon />,
    selected: false,
  },
  {
    id: 'menu-item-suscriptions',
    label: 'Suscriptions',
    icon: <DashboardIcon />,
    selected: true,
  },
  {
    id: 'menu-item-cards',
    label: 'Cards',
    icon: <StyleIcon />,
    selected: false,
  },
  {
    id: 'menu-item-people',
    label: 'People',
    icon: <PeopleAltIcon />,
    selected: false,
  },
  {
    id: 'menu-item-vendors',
    label: 'Vendors',
    icon: <AccountBalanceIcon />,
    selected: false,
  },
];

export default menu;
