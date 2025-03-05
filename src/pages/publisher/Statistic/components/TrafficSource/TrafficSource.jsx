import React from 'react';
import classNames from 'classnames/bind';
import styles from './TrafficSource.module.scss';

const cx = classNames.bind(styles);

const TrafficSource = () => {
  const sources = [
    { name: 'Google', value: 60 },
    { name: 'YouTube', value: 25 },
    { name: 'Instagram', value: 80 },
    { name: 'Pinterest', value: 30 },
    { name: 'Facebook', value: 40 },
    { name: 'Twitter', value: 15 },
    { name: 'Tumblr', value: 10 }
  ];

  return (
    <div className={cx('traffic-source')}>
      {sources.map((source, index) => (
        <div key={index} className={cx('source-item')}>
          <span className={cx('source-name')}>{source.name}</span>
          <div className={cx('progress-container')}>
            <div 
              className={cx('progress-bar')} 
              style={{ width: `${source.value}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrafficSource;
