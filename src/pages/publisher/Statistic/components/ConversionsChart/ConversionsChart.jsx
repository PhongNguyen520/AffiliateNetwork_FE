import React from 'react';
import classNames from 'classnames/bind';
import styles from './ConversionsChart.module.scss';
import ReactApexChart from 'react-apexcharts';

const cx = classNames.bind(styles);

const ConversionsChart = () => {
  const options = {
    chart: {
      type: 'bar',
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        columnWidth: '60%',
      },
    },
    colors: ['#6366F1', '#10B981', '#000000', '#38BDF8', '#94A3B8', '#84CC16'],
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      labels: {
        style: {
          fontSize: '12px',
        },
      },
    },
    yaxis: {
        labels: {
          style: {
            fontSize: '12px',
          },
          formatter: (value) => { 
            return value + 'M';
          }
        },
        min: 0,
        max: 30,
        tickAmount: 6
      },
      grid: {
        borderColor: '#E2E8F0',
        strokeDashArray: 4,
        yaxis: {
          lines: {
            show: true
          }
        },
        xaxis: {
          lines: {
            show: false
          }
        }
      },
      legend: {
        show: false
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function(value) {
            return value + 'M conversions';
          }
        }
      }
      };
      
      const series = [{
        name: 'Black Friday Sale',
        data: [15, 22, 14, 18, 26, 12, 24, 18, 22, 26, 20, 28]
      }, {
        name: 'Summer Collection',
        data: [18, 25, 16, 20, 23, 18, 20, 24, 20, 22, 18, 24]
      }, {
        name: 'Tech Gadgets',
        data: [16, 18, 22, 20, 16, 24, 18, 16, 22, 18, 20, 22]
      }];
      
      return (
        <div className={cx('conversions-chart-container')}>
          <h3 className={cx('chart-title')}>Conversions</h3>
          <div className={cx('chart-wrapper')}>
            <ReactApexChart 
              options={options}
              series={series}
              type="bar"
              height={350}
            />
          </div>
        </div>
      );
      };
      
      export default ConversionsChart;