import {
  amber,
  grey,
  lightBlue,
  purple,
  indigo,
} from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const primaryMain = purple[300];
const primaryOpacity = 'rgba(25, 118, 210, 0.08)';
const primaryInputHover = purple[200];
const secondaryMain = indigo[400];
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
          fontWeight: 400,
          '&.Mui-selected': {
            backgroundColor: primaryMain,
            color: white,
          },
          '&:hover': {
            '&:not(.Mui-disabled)': {
              '&:before': {
                borderBottom: `2px solid ${primaryInputHover}`,
              },
            },
          },
          fontSize: fontSize14,
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
    MuiSelect: {
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
    MuiTableCell: {
      styleOverrides: {
        stickyHeader: {
          backgroundColor: grey[200],
        },
      },
    },
    MuiTextField: {
      defaultProps: { variant: 'standard' },
      styleOverrides: { root: { minWidth: '11.125rem' } },
    },
    MuiTypography: {
      defaultProps: {
        color: 'text.primary',
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
          },
          '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
            borderRadius: 8,
            backgroundColor: grey[300],
          },
          '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover':
          { backgroundColor: grey[400] },
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
    common: { primaryOpacity },
    primary: {
      main: primaryMain,
    },
    secondary: {
      main: secondaryMain,
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
    background: { default: grey[50] },
    action: {
      selected: primaryMain,
      hover: primaryOpacity,
    },
  },
  typography: {
    fontFamily,
    button: { textTransform: 'capitalize' },
  },
});

export default theme;
