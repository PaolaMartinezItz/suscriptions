import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import theme from './configuration';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Paper elevation={0}>
        <Grid container>
          Holi
        </Grid>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
