import React from 'react';
import classNames from 'classnames/bind';
import styles from './TrafficByDevice.module.scss';
import ReactApexChart from 'react-apexcharts';

const cx = classNames.bind(styles);

const TrafficByDevice = () => {
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
        columnWidth: '70%',
      },
    },
    colors: ['#6366F1', '#84CC16', '#000000', '#38BDF8', '#F472B6', '#10B981'],
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ['Linux', 'Mac', 'iOS', 'Web', 'Android', 'Other'],
      labels: {
        style: {
          fontSize: '12px',
        },
      },
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          return value + 'M';
        },
      },
    },
    grid: {
      show: false,
    },
    legend: {
      show: false,
    },
  };

  const series = [{
    name: 'Traffic',
    data: [15, 18, 12, 25, 11, 20]
  }];

  return (
    <div className={cx('device-chart')}>
      <ReactApexChart 
        options={options} 
        series={series} 
        type="bar" 
        height={300} 
      />
    </div>
  );
};

export default TrafficByDevice;