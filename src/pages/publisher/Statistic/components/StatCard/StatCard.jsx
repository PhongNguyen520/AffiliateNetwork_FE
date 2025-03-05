import React from 'react';
import classNames from 'classnames/bind';
import styles from './StatCard.module.scss';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

const cx = classNames.bind(styles);

const StatCard = ({ title, value, change, isPositive }) => {
  return (
    <div className={cx('stat-card')}>
      <div className={cx('card-header')}>
        <span className={cx('card-title')}>{title}</span>
      </div>
      <div className={cx('card-value')}>{value}</div>
      <div className={cx('card-change', { positive: isPositive, negative: !isPositive })}>
        {isPositive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
        <span>{change}</span>
      </div>
    </div>
  );
};

export default StatCard;