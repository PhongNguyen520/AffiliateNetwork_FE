import React from 'react';
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
import styles from './Unauthorized.module.scss';
import { FaLock } from 'react-icons/fa';

const cx = classNames.bind(styles);

function Unauthorized() {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className={cx('container')}>
      <FaLock className={cx('icon')} />
      <h1 className={cx('title')}>Access Denied</h1>
      <p className={cx('message')}>
        Sorry, you don't have the necessary permissions to view this page.
      </p>
      <button onClick={handleBackToHome} className={cx('back-button')}>
        Go Back to Home
      </button>
    </div>
  );
}

export default Unauthorized;
