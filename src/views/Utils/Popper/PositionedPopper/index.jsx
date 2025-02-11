import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import Popper from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';

// ==============================|| POSITION POPPER ||============================== //

export default function PositionedPopper() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();
  const theme = useTheme();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Popper open={open} anchorEl={anchorEl} placement={placement} sx={{ zIndex: 1200 }} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
              <Typography sx={{ padding: theme.spacing(2) }}>The content of the Popper.</Typography>
            </Paper>
          </Fade>
        )}
      </Popper>
      <Grid container justifyContent="space-around">
        <Grid item xs={12} md={9}>
          <Grid container justifyContent="center">
            <Grid item>
              <Button color="secondary" onClick={handleClick('top-start')}>
                top-start
              </Button>
              <Button color="secondary" onClick={handleClick('top')}>
                top
              </Button>
              <Button color="secondary" onClick={handleClick('top-end')}>
                top-end
              </Button>
            </Grid>
          </Grid>
          <Grid container justifyContent="center">
            <Grid item xs={6}>
              <Button color="secondary" onClick={handleClick('left-start')}>
                left-start
              </Button>
              <br />
              <Button color="secondary" onClick={handleClick('left')}>
                left
              </Button>
              <br />
              <Button color="secondary" onClick={handleClick('left-end')}>
                left-end
              </Button>
            </Grid>
            <Grid item container xs={6} alignItems="flex-end" direction="column">
              <Grid item>
                <Button color="secondary" onClick={handleClick('right-start')}>
                  right-start
                </Button>
              </Grid>
              <Grid item>
                <Button color="secondary" onClick={handleClick('right')}>
                  right
                </Button>
              </Grid>
              <Grid item>
                <Button color="secondary" onClick={handleClick('right-end')}>
                  right-end
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid container justifyContent="center">
            <Grid item>
              <Button color="secondary" onClick={handleClick('bottom-start')}>
                bottom-start
              </Button>
              <Button color="secondary" onClick={handleClick('bottom')}>
                bottom
              </Button>
              <Button color="secondary" onClick={handleClick('bottom-end')}>
                bottom-end
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
