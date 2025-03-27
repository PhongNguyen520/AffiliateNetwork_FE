import React from 'react'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames/bind'
import { XCircle } from 'lucide-react'
import styles from "./Failed.module.scss"
import config from '../../../../config'

const cx = classNames.bind(styles)

function Failed() {
  const navigate = useNavigate()
  
  const queryParams = new URLSearchParams(window.location.search)
  const reason = queryParams.get('reason')
  const code = queryParams.get('code')
  const transactionId = queryParams.get('transactionId')

  const handleBackToHome = () => {
    navigate(config.routes.overviewAdvertiser)
  }

  return (
    <div className={cx('container')}>
      <div className={cx('failed-card')}>
        <div className={cx('logo-container')}>
          <img src='https://cdn.haitrieu.com/wp-content/uploads/2022/10/Logo-VNPAY-QR-1.png' alt='VNPAY logo'/>
        </div>

        <XCircle className={cx('failed-icon')} />
        <h1 className={cx('failed-title')}>Payment Failed!</h1>
        
        <div className={cx('transaction-details')}>
          {transactionId && (
            <div className={cx('detail-item')}>
              <span className={cx('detail-label')}>Transaction ID:</span>
              <span className={cx('detail-value')}>{transactionId}</span>
            </div>
          )}
          
          <div className={cx('detail-item')}>
            <span className={cx('detail-label')}>Error Code:</span>
            <span className={cx('detail-value')}>{code || 'Unknown'}</span>
          </div>
          
          <div className={cx('detail-item')}>
            <span className={cx('detail-label')}>Reason:</span>
            <span className={cx('detail-value')}>{reason || 'Payment was declined'}</span>
          </div>
        </div>

        <div className={cx('action-buttons')}>
          <button 
            className={cx('back-home-btn')}
            onClick={handleBackToHome}
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  )
}

export default Failed