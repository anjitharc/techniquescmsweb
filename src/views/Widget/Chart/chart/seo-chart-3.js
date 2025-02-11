import value from 'assets/scss/_themes-vars.module.scss';

const chartData = {
  type: 'area',
  height: 40,
  options: {
    chart: {
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: [value.error],
    fill: {
      type: 'solid',
      opacity: 0
    },
    markers: {
      size: 2,
      opacity: 0.9,
      colors: value.error,
      strokeColor: value.error,
      strokeWidth: 2,
      hover: {
        size: 4
      }
    },
    stroke: {
      curve: 'straight',
      width: 3
    },
    tooltip: {
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: {
          formatter: () => 'Products :'
        }
      },
      marker: {
        show: false
      }
    }
  },
  series: [
    {
      name: 'series1',
      data: [9, 66, 41, 89, 63, 25, 44, 12, 36, 20, 54, 25, 9]
    }
  ]
};

export default chartData;
