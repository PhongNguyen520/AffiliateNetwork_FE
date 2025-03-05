import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Statistic.module.scss';
import ReactApexChart from 'react-apexcharts';
import { Bell, Search, Sun, Clock, Layers } from 'lucide-react';

import StatCard from './components/StatCard/StatCard';
import TrafficSource from './components/TrafficSource/TrafficSource';
import TrafficByDevice from './components/TrafficByDevice/TrafficByDevice';
import CampaignPieChart from './components/CampaignPieChart/CampaignPieChart';
import ConversionsChart from './components/ConversionsChart/ConversionsChart';
import CampaignTable from './components/CampaignTable/CampaignTable';

const cx = classNames.bind(styles);

const Statistic = () => {
  const [activeTab, setActiveTab] = useState('Today');
  const [campaignFilter, setCampaignFilter] = useState('Total Campaigns');
  const [yearFilter, setYearFilter] = useState('This year');
  
  // Earning over time chart data
  const earningChartOptions = {
    chart: {
      type: 'line',
      toolbar: {
        show: false,
      },
      background: 'transparent',
    },
    colors: ['#3B82F6', '#222222'],
    stroke: {
      curve: 'smooth',
      width: 3,
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          return value + 'M';
        },
      },
    },
    tooltip: {
      shared: true,
    },
    grid: {
      borderColor: '#f1f1f1',
      strokeDashArray: 4,
    },
    legend: {
      show: false,
    },
    annotations: {
      points: [{
        x: 'Mar',
        y: 18.5,
        marker: {
          size: 6,
        },
        label: {
          text: '$18,356,998',
          offsetY: -15,
          style: {
            background: '#333',
            color: '#fff',
          }
        }
      }]
    },
    markers: {
      size: 5,
    },
  };

  const earningChartSeries = [
    {
      name: 'This year',
      data: [10, 15, 18.5, 14, 16, 18, 20],
    },
    {
      name: 'Last year',
      data: [8, 12, 14, 16, 15, 17, 19],
    },
  ];

  const pausedCampaigns = [
    {
      id: 1,
      name: 'Twitter Ad - ClickUp',
      startDate: '-',
      budget: '$600',
      spend: '$535.17',
      enroll: '11,000',
      clicks: '800',
      order: '400',
      cpa: 'Error',
      audience: 'People who search productivity',
      channel: 'Twitter',
      conversionRate: '-',
      link: 'twitter.com'
    }
  ];

  const reviewCampaigns = [
    {
      id: 1,
      name: 'Email - Holiday promotion',
      startDate: '-',
      budget: '$1,000',
      spend: '$992.30',
      enroll: '10,000',
      clicks: '300',
      order: '150',
      cpa: 'Error',
      audience: 'Active free users',
      channel: 'Email',
      conversionRate: '-',
      link: 'youtube.com'
    },
    {
      id: 2,
      name: 'Facebook retargeting',
      startDate: '-',
      budget: '$1,000',
      spend: '$833.40',
      enroll: '10,000',
      clicks: '430',
      order: '200',
      cpa: 'Error',
      audience: 'Inactive users',
      channel: 'Facebook',
      conversionRate: '-',
      link: 'facebook.com'
    }
  ];

  const runningCampaigns = [
    {
      id: 1,
      name: 'Black Friday Sale',
      startDate: '-',
      budget: '$700',
      spend: '$780',
      enroll: '13,000',
      clicks: '300',
      order: '200',
      cpa: 'Error',
      audience: 'People searching productivity apps',
      channel: 'Email',
      conversionRate: '-',
      link: 'instagram.com'
    },
    {
      id: 2,
      name: 'Summer Collection',
      startDate: '-',
      budget: '$500',
      spend: '$487',
      enroll: '10,000',
      clicks: '200',
      order: '80',
      cpa: 'Error',
      audience: 'People searching for ClickUp and productivity',
      channel: 'Facebook',
      conversionRate: '-',
      link: 'linkedin.com'
    },
    {
      id: 3,
      name: 'Tech Gadgets',
      startDate: '-',
      budget: '$1,000',
      spend: '$980',
      enroll: '8,000',
      clicks: '150',
      order: '30',
      cpa: 'Error',
      audience: 'Tech-savvy people following software',
      channel: 'Twitter',
      conversionRate: '-',
      link: 'twitter.com'
    }
  ];

  return (
    <div className={cx('dashboard')}>
      <main className={cx('main-content')}>
        {/* Stats Row */}
        <div className={cx('stats-row')}>
          <StatCard 
            title="Commission" 
            value="3,254" 
            change="+10.02%" 
            isPositive={true} 
          />
          <StatCard 
            title="Earning" 
            value="$4,204" 
            change="-0.03%" 
            isPositive={false} 
          />
          <StatCard 
            title="Conversion rate" 
            value="5.8%" 
            change="+0.5%" 
            isPositive={true} 
          />
          <StatCard 
            title="Active Links" 
            value="30" 
            change="+3" 
            isPositive={true} 
          />
        </div>

        {/* Chart Section */}
        <div className={cx('chart-section')}>
          <div className={cx('chart-container')}>
            <div className={cx('chart-header')}>
              <div className={cx('tabs')}>
                <button 
                  className={cx('tab', { active: activeTab === 'Today' })}
                  onClick={() => setActiveTab('Today')}
                >
                  Today
                </button>
                <button 
                  className={cx('tab', { active: activeTab === 'Earning OverTime' })}
                  onClick={() => setActiveTab('Earning OverTime')}
                >
                  Earning OverTime
                </button>
                <button 
                  className={cx('tab', { active: activeTab === 'Total Campaigns' })}
                  onClick={() => setActiveTab('Total Campaigns')}
                >
                  Total Campaigns
                </button>
                <button 
                  className={cx('tab', { active: activeTab === 'Operating Status' })}
                  onClick={() => setActiveTab('Operating Status')}
                >
                  Operating Status
                </button>
              </div>
              <div className={cx('year-filter')}>
                <span className={cx('filter-dot', 'this-year')}></span>
                <span className={cx('filter-label')}>This year</span>
                <span className={cx('filter-dot', 'last-year')}></span>
                <span className={cx('filter-label')}>Last year</span>
              </div>
            </div>
            <div className={cx('chart-body')}>
              <ReactApexChart 
                options={earningChartOptions} 
                series={earningChartSeries} 
                type="line" 
                height={300} 
              />
            </div>
          </div>
        </div>

        {/* Traffic Stats Section */}
        <div className={cx('traffic-section')}>
          <div className={cx('traffic-source')}>
            <h3 className={cx('section-title')}>Traffic Source</h3>
            <TrafficSource />
          </div>
          <div className={cx('traffic-device')}>
            <h3 className={cx('section-title')}>Traffic by Device</h3>
            <TrafficByDevice />
          </div>
        </div>

        {/* Campaign Analysis Section */}
        <div className={cx('campaign-analysis')}>
          <div className={cx('campaign-pie')}>
            <h3 className={cx('section-title')}>Campaigns</h3>
            <CampaignPieChart />
          </div>
          <div className={cx('conversions')}>
            <h3 className={cx('section-title')}>Conversions</h3>
            <ConversionsChart />
          </div>
        </div>

        {/* Campaign Tables Section */}
        <div className={cx('campaign-tables')}>
          <h2 className={cx('table-section-title')}>Total Campaigns</h2>
          
          <div className={cx('campaign-table-section')}>
            <h3 className={cx('table-status')}>PAUSED</h3>
            <CampaignTable campaigns={pausedCampaigns} />
          </div>
          
          <div className={cx('campaign-table-section')}>
            <h3 className={cx('table-status')}>REVIEW</h3>
            <CampaignTable campaigns={reviewCampaigns} />
          </div>
          
          <div className={cx('campaign-table-section')}>
            <h3 className={cx('table-status')}>RUNNING</h3>
            <CampaignTable campaigns={runningCampaigns} />
          </div>
        </div>
      </main>

    </div>
  );
};

export default Statistic;