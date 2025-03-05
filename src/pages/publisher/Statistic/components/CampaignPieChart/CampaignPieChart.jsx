import React from 'react';
import classNames from 'classnames/bind';
import styles from './CampaignPieChart.module.scss';
import ReactApexChart from 'react-apexcharts';

const cx = classNames.bind(styles);

const CampaignPieChart = () => {
  const options = {
    chart: {
      type: 'donut',
    },
    colors: ['#000000', '#14B8A6', '#84CC16', '#737373'],
    labels: ['Black Friday Sale', 'Summer Collection', 'Tech Gadgets', 'Home Decor'],
    plotOptions: {
      pie: {
        donut: {
          size: '65%'
        }
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      position: 'right',
      fontSize: '14px',
      markers: {
        width: 10,
        height: 10,
        radius: 0
      },
      itemMargin: {
        horizontal: 10,
        vertical: 5
      }
    },
    responsive: [{
      breakpoint: 768,
      options: {
        legend: {
          position: 'bottom'
        }
      }
    }]
  };

  const series = [38.8, 22.5, 30.6, 8.1];

  return (
    <div className={cx('campaign-chart')}>
      <ReactApexChart 
        options={options} 
        series={series} 
        type="donut" 
        height={300} 
      />
      <div className={cx('chart-legend')}>
        <div className={cx('legend-item')}>
          <div className={cx('legend-dot', 'black')}></div>
          <span className={cx('legend-label')}>Black Friday Sale</span>
          <span className={cx('legend-value')}>38.6%</span>
        </div>
        <div className={cx('legend-item')}>
          <div className={cx('legend-dot', 'teal')}></div>
          <span className={cx('legend-label')}>Summer Collection</span>
          <span className={cx('legend-value')}>22.5%</span>
        </div>
        <div className={cx('legend-item')}>
          <div className={cx('legend-dot', 'green')}></div>
          <span className={cx('legend-label')}>Tech Gadgets</span>
          <span className={cx('legend-value')}>30.6%</span>
        </div>
        <div className={cx('legend-item')}>
          <div className={cx('legend-dot', 'gray')}></div>
          <span className={cx('legend-label')}>Home Decor</span>
          <span className={cx('legend-value')}>8.1%</span>
        </div>
      </div>
    </div>
  );
};

export default CampaignPieChart;
