import {
  amber,
  grey,
  lightBlue,
  purple,
  orange,
  red,
  blue,
  teal,
} from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const primaryLight = teal[100];
const primaryMain = blue.A200;
const primaryDark = '#165cad';
const primaryOpacity = 'rgba(68, 138, 255, 0.08)';
const backgroundGrey = grey[300];
const white = '#ffffff';
const fontFamily = ['Roboto', 'Fantasy'].join(',');
const fontSize14 = '0.875rem';

const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        size: 'medium',
        variant: 'contained',
      },
      styleOverrides: {
        root: {
          minWidth: '8rem',
        },
      },
    },
    MuiDrawer: {
      defaultProps: {
        anchor: 'left',
        variant: 'permanent',
      },
      styleOverrides: {
        paper: {
          overflowX: 'hidden',
          boxSizing: 'border-box',
          width: 'inherit',
        },
      },
    },
    MuiFab: {
      defaultProps: {
        color: 'primary',
        size: 'small',
      },
    },
    MuiFormControl: {
      defaultProps: {
        variant: 'standard',
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontSize: fontSize14,
        },
        root: {
          fontSize: fontSize14,
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: fontSize14,
        },
      },
    },
    MuiIconButton: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          fontFamily,
          fontSize: fontSize14,
          '&.Mui-selected': {
            backgroundColor: primaryMain,
            color: white,
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontWeight: 400,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: fontSize14,
        },
      },
    },
    MuiListItem: {
      defaultProps: {
        disablePadding: true,
      },
      styleOverrides: {
        root: {
          fontFamily,
          fontWeight: 400,
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          fontSize: fontSize14,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: fontSize14,
        },
      },
    },
    MuiSnackbar: {
      styleOverrides: {
        root: {
          top: 75,
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: '8px 16px',
        },
        stickyHeader: {
          padding: '14px 16px',
          backgroundColor: primaryDark,
          color: white,
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
      styleOverrides: {
        root: {
          width: '100%',
          minWidth: '11.125rem',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        body2: {
          fontSize: fontSize14,
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: white,
          '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
            backgroundColor: white,
            height: 12,
            width: 12,
            fontSize: fontSize14,
          },
          '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
            borderRadius: 8,
            backgroundColor: backgroundGrey,
          },
          '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover':
          {
            backgroundColor: grey[400],
          },
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xxl: 1920,
    },
  },
  palette: {
    common: {
      primaryLight,
      primaryMain,
      primaryDark,
      primaryOpacity,
      backgroundGrey,
      netflix: red.A400,
      disney: purple.A400,
      prime: orange.A400,
    },
    netflix: {
      main: primaryMain,
    },
    primary: {
      light: primaryLight,
      main: primaryMain,
    },
    warning: {
      light: amber[500],
      main: amber[700],
      dark: amber[800],
      contrastText: white,
    },
    info: {
      light: lightBlue[300],
      main: lightBlue[500],
      dark: lightBlue[600],
      contrastText: white,
    },
    background: {
      default: white,
    },
    action: {
      selected: primaryMain,
      hover: primaryOpacity,
    },
  },
  typography: {
    fontFamily: ['Roboto', 'Fantasy'].join(','),
    h6: {
      fontWeight: 600,
    },
    body1: {
      fontSize: fontSize14,
      fontWeight: 600,
    },
    body2: {
      fontSize: fontSize14,
    },
    button: {
      textTransform: 'capitalize',
    },
  },
});

export default theme;
