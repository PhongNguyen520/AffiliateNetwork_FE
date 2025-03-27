import React from 'react'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames/bind'
import { CheckCircle } from 'lucide-react'
import styles from "./Success.module.scss"
import config from '../../../../config'

const cx = classNames.bind(styles)

function Success() {
  const navigate = useNavigate()
  
  const queryParams = new URLSearchParams(window.location.search)
  const transactionId = queryParams.get('transactionId')
  const amount = queryParams.get('amount')

  const handleBackToHome = () => {
    navigate(config.routes.overviewAdvertiser)
  }

  return (
    <div className={cx('container')}>
      <div className={cx('success-card')}>
        <div className={cx('logo-container')}>
          <img src='https://cdn.haitrieu.com/wp-content/uploads/2022/10/Logo-VNPAY-QR-1.png' alt='VNPAY logo'/>
        </div>

        <CheckCircle className={cx('success-icon')} />
        <h1 className={cx('success-title')}>Payment Successful!</h1>
        <div className={cx('transaction-details')}>
          <div className={cx('detail-item')}>
            <span className={cx('detail-label')}>Transaction ID:</span>
            <span className={cx('detail-value')}>{transactionId}</span>
          </div>
          <div className={cx('detail-item')}>
            <span className={cx('detail-label')}>Amount:</span>
            <span className={cx('detail-value')}>
              {new Intl.NumberFormat('vi-VN', { 
                style: 'currency', 
                currency: 'VND' 
              }).format(parseFloat(amount))}
            </span>
          </div>
        </div>
        <button 
          className={cx('back-home-btn')}
          onClick={handleBackToHome}
        >
          Back to Home
        </button>
      </div>
    </div>
  )
}

export default Success