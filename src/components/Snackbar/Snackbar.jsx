import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import ErrorIcon from '@mui/icons-material/Error';

const Snackbar = ({ data }) => (
  <Paper elevation={2} sx={{ p: 3 }}>
    <Grid container>
      <Grid item xs={1}>
        <ErrorIcon color="error" />
      </Grid>
      <Grid item xs={11} container sx={{ flexDirection: 'column', flexWrap: 'nowrap' }}>
        <Grid item xs={12}>
          <Typography variant="body1">
            A problem has occurred
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ my: 2 }}>
          <Typography variant="body2">
            Our team is aware. If the problem persists contact the team.
          </Typography>
        </Grid>
        <Grid item xs={3} sx={{ p: 0.2, bgcolor: 'common.backgroundGrey' }}>
          <Typography variant="caption">
            {`ERROR: ${data.id}`}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  </Paper>
);

Snackbar.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default Snackbar;
