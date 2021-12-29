import React, { Suspense } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import { SnackbarProvider } from 'notistack';
import themeNew from './configuration';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Snackbar from './components/Snackbar';
import Suscriptions from './containers';

const drawerWidth = 240;

function App() {
  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ThemeProvider theme={themeNew}>
        <CssBaseline />
        <Suspense fallback={<div>Loading 2...</div>}>
          <Sidebar drawerWidth={drawerWidth} />
          <Paper
            elevation={0}
            sx={{
              height: '100vh',
              flexGrow: 1,
              p: 3,
              pl: `${small ? 3 : `calc(${drawerWidth}px + 24px)`}`,
            }}
          >
            <Header />
            <SnackbarProvider
              transitionDuration={{ exit: 1000 }}
              content={(key, data) => (
                <Grid>
                  <Snackbar id={key} data={data} />
                </Grid>
              )}
            >
              <Suspense fallback={<div>Loading Suscriptions...</div>}>
                <Suscriptions />
              </Suspense>
            </SnackbarProvider>
          </Paper>
        </Suspense>
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
