import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Grid, Typography, Button, Link, Box } from '@mui/material';

// project import
import { gridSpacing } from 'config.js';

// ==============================|| ERROR PAGE 1 ||============================== //

const ErrorPages1 = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        minWidth: '100%',
        minHeight: '100vh',
        textAlign: 'center',
        p: { xs: 3.75, md: 'inherit' }
      }}
    >
      <Grid container spacing={gridSpacing} justifyContent="center">
        <Grid item lg={4} md={6} sm={10}>
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
              <Typography
                component="div"
                variant="h6"
                sx={{
                  fontSize: '140px',
                  fontWeight: '900',
                  position: 'relative',
                  lineHeight: '120px',
                  color: theme.palette.primary.main,
                  filter: 'drop-shadow(2px 6px 0px #00000033)'
                }}
              >
                404
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                component="div"
                variant="h6"
                sx={{
                  fontSize: '25px',
                  fontWeight: '600',
                  position: 'relative',
                  mb: 2,
                  '&:after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '-15px',
                    left: 'calc(50% - 25px)',
                    width: 50,
                    height: 4,
                    background: theme.palette.primary.main,
                    borderRadius: '3px'
                  }
                }}
              >
                Oops! Page not found!
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography component="div" variant="body2">
                You can head over to our <Link href="/">Homepage</Link> for more options
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary">
                Reload
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ErrorPages1;
