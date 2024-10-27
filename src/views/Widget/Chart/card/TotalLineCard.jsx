import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
// import colorValue from 'assets/scss/_themes-vars.module.scss';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';

// third party
import Chart from 'react-apexcharts';

// ==============================|| TOTAL LINE CARD ||============================== //

const TotalLineCard = ({ bgColor, chartData, title, percentage, value }) => {
  const theme = useTheme();
  const [chartDatas, setChartDatas] = useState(chartData);

  useEffect(() => {
    setChartDatas((prevState) => ({
      ...prevState,

      options: {
        theme: {
          mode: theme.palette.mode === 'dark' ? 'dark' : 'light'
        }
      }
    }));
  }, [theme.palette.mode]);

  return (
    <Card>
      <CardContent sx={{ padding: 0, paddingBottom: '0 !important' }}>
        <Box bgcolor={bgColor ? bgColor : theme.palette.primary.main}>
          <Box p={2.5}>
            <Grid container direction="column">
              <Grid item container justifyContent="space-between" alignItems="center">
                {value && (
                  <Grid item>
                    <Typography variant="h4" color="#fff" sx={{ fontWeight: 400 }}>
                      {value}
                    </Typography>
                  </Grid>
                )}
                {percentage && (
                  <Grid item>
                    <Typography variant="body2" color="#fff">
                      {percentage}
                    </Typography>
                  </Grid>
                )}
              </Grid>
              {title && (
                <Grid item>
                  <Typography variant="body2" color="#fff">
                    {' '}
                    {title}{' '}
                  </Typography>
                </Grid>
              )}
            </Grid>
          </Box>
          {chartData && <Chart options={chartDatas.options} series={chartDatas.series} type="area" height={100} />}
        </Box>
      </CardContent>
    </Card>
  );
};

TotalLineCard.propTypes = {
  bgColor: PropTypes.string,
  chartData: PropTypes.object,
  value: PropTypes.number,
  title: PropTypes.string,
  percentage: PropTypes.string
};

export default TotalLineCard;
